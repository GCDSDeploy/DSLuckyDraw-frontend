# Step 2 — Risk Review (Phase 1)

**Date:** Step 2 pre-implementation  
**Scope:** Draw algorithm only. No API, no frontend, no deployment.

---

## 1. Uniqueness Risk

**Q: How does the algorithm guarantee no sign can ever be drawn twice?**

- Only rows with `is_drawn = false` are candidates. The algorithm will:
  - Select one such row (inside a transaction, with row lock — see Concurrency below).
  - Update that row to `is_drawn = true`.
- Once updated, the row is never selected again for a draw. No sign can be drawn twice.

**Q: What happens if two draws happen concurrently?**

- Selection and update must run inside a **single transaction** with **row locking** (`SELECT ... FOR UPDATE`). The chosen row is locked until the transaction commits.
- A second concurrent draw will either:
  - Block on the same row until the first transaction commits (then get a different row), or
  - Select a different undrawn row and lock that.
- So concurrent draws see a consistent view of “who is undrawn” and never double-assign the same sign.

**Conclusion:** Uniqueness is guaranteed by (1) only ever selecting undrawn rows, (2) updating the chosen row to drawn, and (3) doing both under a transaction with row lock.

---

## 2. Inventory Integrity Risk

**Q: Confirm that drawn + undrawn always equals 10,000.**

- Total rows in `signs` are fixed at 10,000 (Step 1). No INSERT/DELETE in draw logic.
- At any time: `COUNT(*)` = 10,000; `SUM(is_drawn=0) + SUM(is_drawn=1)` = 10,000.
- Draw logic only performs `UPDATE signs SET is_drawn = true WHERE id = ?`. So drawn + undrawn always equals 10,000.

**Q: Confirm that no rows are ever deleted or regenerated.**

- Draw logic does not run `DELETE`, `TRUNCATE`, or re-insert. No regeneration of the pool. Rows are only updated in place.

**Conclusion:** Inventory integrity is preserved; 10,000 total, only `is_drawn` changes.

---

## 3. Concurrency Risk

**Q: Confirm that selection + update is atomic.**

- Selection and update will run in one **transaction**:
  - `BEGIN` (or equivalent).
  - `SELECT ... FROM signs WHERE is_drawn = false ... LIMIT 1 OFFSET ? FOR UPDATE` to choose and lock the row.
  - `UPDATE signs SET is_drawn = true WHERE id = ?`.
  - `COMMIT`.
- `FOR UPDATE` makes the selected row locked until commit, so no other transaction can select or update it until we finish. Selection + update are effectively atomic at the row level.

**Q: Confirm retry behavior if UPDATE affects 0 rows.**

- Spec: “Retry once if update fails.” If `UPDATE ... WHERE id = ? AND is_drawn = false` affects 0 rows (e.g. row was already drawn due to an edge case or bug), the implementation will retry the **entire draw** once (one more COUNT → OFFSET → SELECT FOR UPDATE → UPDATE). No infinite retry; one retry only.

**Conclusion:** Concurrency is handled by transaction + row lock; single retry on failed update is defined and bounded.

---

## 4. Performance Risk

**Q: OFFSET usage is allowed. Confirm 10,000-row scale is safe without optimization.**

- Draw uses: `COUNT(*)` on `is_drawn = false` and `SELECT ... ORDER BY id LIMIT 1 OFFSET ?` with an index that supports the filter (e.g. `idx_signs_level_drawn` or a similar index on `is_drawn`).
- At 10,000 rows, one COUNT and one LIMIT/OFFSET per draw is acceptable. No need for cursor-based or other optimization at this scale.
- OFFSET is explicitly allowed by spec; no change to this for Step 2.

**Conclusion:** Performance at 10k rows is acceptable with COUNT + OFFSET; no optimization required.

---

## 5. Scope Risk

**Q: Confirm that this step introduces NO API, NO frontend logic, NO deployment.**

- Step 2 delivers **only** the draw algorithm: a function (or script) that:
  - Connects to MySQL using existing env (same as Step 1).
  - Runs: COUNT → random OFFSET → SELECT one row (FOR UPDATE) → UPDATE is_drawn = true (in one transaction).
  - Returns a sign object `{ id, level, type, reward_code }` or OUT_OF_STOCK.
- No HTTP server, no routes, no API endpoints. No changes to frontend code or deployment. No changes to Step 1 schema or data.

**Conclusion:** Scope is limited to backend draw logic only; no API, no frontend, no deployment.

---

## Risk Assessment Summary

| Risk area         | Mitigation                                      | Acceptable? |
|-------------------|-------------------------------------------------|-------------|
| Uniqueness        | Only undrawn rows; update to drawn; row lock    | Yes         |
| Inventory         | No delete/regenerate; only UPDATE is_drawn     | Yes         |
| Concurrency       | Transaction + SELECT FOR UPDATE + 1 retry      | Yes         |
| Performance       | COUNT + OFFSET at 10k scale allowed            | Yes         |
| Scope             | Draw logic only; no API/frontend/deploy        | Yes         |

**Overall:** Risks are identified and mitigated at current scale (10,000 signs, single DB). No frontend or deployment is touched. Step 1 schema and data remain unchanged.

---

## Confirmation for Phase 2

- Risks are **acceptable** at current scale.
- Implementation will follow the specified flow: pre-generated pool only; COUNT → random OFFSET → SELECT one row (FOR UPDATE) → UPDATE is_drawn = true in a transaction; retry once if update fails; return sign or OUT_OF_STOCK.
- **No frontend changes.** No API. No deployment. Red lines remain in force.

Proceed to **Phase 2 — Execution** only after explicit approval.

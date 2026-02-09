# Git Workflow: H5 Lucky Draw Backend (Step 1–3)

This document provides **step-by-step Git commands and instructions** to create a GitHub repository for the backend only. **No backend logic or code is modified**—only Git setup and push.

---

## Prerequisites

- Git installed locally.
- GitHub account (and optionally [GitHub CLI](https://cli.github.com/) installed).
- **Repository name**: Choose a name (e.g. `ds-lucky-draw-backend`) and **confirm it** before creating the remote. Do not use an auto-generated name without your approval.

---

## Step 0 — Safety: Add a `.gitignore` (recommended)

**Purpose:** Avoid committing secrets (`.env`) and dependencies (`node_modules/`). This is a new file, not a change to Step 1–3 logic.

**Location:** Create `backend/.gitignore` with:

```gitignore
# Dependencies
node_modules/

# Environment and secrets (never commit)
.env

# OS / editor
.DS_Store
*.log
```

**Action:** Create the file manually in `backend/` or run:

```bash
cd backend
cat > .gitignore << 'EOF'
node_modules/
.env
.DS_Store
*.log
EOF
```

---

## Step 1 — Initialize the local repository

**Command:**

```bash
cd "/Users/liuhaijing/Library/CloudStorage/OneDrive-波士顿咨询公司/Documents/🟡 GTM/Ecard/DSLuckyDraw/backend"
git init
```

**Description:** Creates a new Git repository inside the `backend/` folder. The repo root will be `backend/` (so only Step 1–3 backend files live in this repo).

---

## Step 2 — Confirm which files will be committed

**Command:**

```bash
git status
```

**Description:** Lists tracked/untracked files. With `.gitignore` in place, you should see only source and config files (e.g. `schema.sql`, `init-pool.js`, `draw.js`, `server.js`, `api/draw-api.js`, `package.json`, `.env.example`, etc.), and **not** `node_modules/` or `.env`. Review the list to ensure no incomplete or unwanted folders are included.

---

## Step 3 — Add all Step 1–3 files

**Command:**

```bash
git add .
```

**Description:** Stages all files in `backend/` that are not ignored by `.gitignore`. This includes:

- **Step 1:** `schema.sql`, `init-pool.js`, `verify-pool.js`, `reset-pool.js`, `.env.example`, `package.json`, `package-lock.json`
- **Step 2:** `draw.js`, `step2-test.js`
- **Step 3:** `server.js`, `api/draw-api.js`, `step3-test.js`
- **Config:** `.gitignore` (if created in Step 0)

**Check again:**

```bash
git status
```

Ensure no incomplete folders or sensitive files are staged. If something wrong is staged, run `git reset HEAD <file>` to unstage it.

---

## Step 4 — Commit with a meaningful message

**Command:**

```bash
git commit -m "Initial commit: H5 Lucky Draw backend (Step 1–3) — DB schema, pool init, draw algorithm, draw API"
```

**Description:** Creates the first commit with a clear message describing the scope (Step 1: schema & pool, Step 2: draw logic, Step 3: HTTP API). You can shorten or reword the message as you like.

---

## Step 5 — Create the GitHub repository (choose one method)

**You must choose a repository name and confirm it before running any create command.**

### Option A — GitHub CLI (if installed)

**Command:**

```bash
gh repo create YOUR_REPO_NAME --private --source=. --remote=origin --push
```

Replace `YOUR_REPO_NAME` with your chosen name (e.g. `ds-lucky-draw-backend`). This creates the repo on GitHub, adds `origin`, and pushes in one step. If you prefer to push manually, omit `--push`:

```bash
gh repo create YOUR_REPO_NAME --private --source=. --remote=origin
```

**Description:** Uses GitHub CLI to create a new **private** repo, set the current directory as source, add remote `origin`, and optionally push. For a public repo, use `--public` instead of `--private`.

---

### Option B — Manual creation on GitHub + add remote

1. **Create repo on GitHub:**  
   Go to [https://github.com/new](https://github.com/new).  
   Set **Repository name** to the name you confirmed (e.g. `ds-lucky-draw-backend`).  
   Choose **Private** (or Public).  
   **Do not** initialize with a README, .gitignore, or license (you already have content locally).  
   Click **Create repository**.

2. **Add remote and push (see Step 6–7 below).**

---

### Option C — Create repo via GitHub API (curl)

Replace `YOUR_REPO_NAME` and `YOUR_GITHUB_TOKEN` with your values:

```bash
curl -X POST -H "Authorization: token YOUR_GITHUB_TOKEN" -H "Accept: application/vnd.github.v3+json" https://api.github.com/user/repos -d '{"name":"YOUR_REPO_NAME","private":true}'
```

**Description:** Creates a private repo under your user. Then add the remote (Step 6) and push (Step 7). Use a [Personal Access Token](https://github.com/settings/tokens) with `repo` scope.

---

## Step 6 — Add remote origin (if not already added)

**Command:**

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

Replace `YOUR_USERNAME` with your GitHub username and `YOUR_REPO_NAME` with the repository name you confirmed.

**Description:** Links the local repo to the GitHub repo. If you used `gh repo create ... --remote=origin`, this is already done; skip or run `git remote -v` to confirm.

**If `origin` already exists and points to the wrong URL:**

```bash
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

---

## Step 7 — Push to the main branch

**Command:**

```bash
git branch -M main
git push -u origin main
```

**Description:** Renames the current branch to `main` (if it is not already) and pushes to `origin main`. The `-u` option sets `origin main` as the upstream so future `git push` works without extra arguments.

---

## Summary checklist

| Step | Action |
|------|--------|
| 0 | Add `backend/.gitignore` (exclude `node_modules/`, `.env`) |
| 1 | `git init` in `backend/` |
| 2 | `git status` — confirm file list |
| 3 | `git add .` — stage Step 1–3 files only (per .gitignore) |
| 4 | `git commit -m "..."` — meaningful message |
| 5 | Create GitHub repo (CLI / web / API) **after confirming repo name** |
| 6 | `git remote add origin <url>` (if needed) |
| 7 | `git branch -M main && git push -u origin main` |

---

## Red lines (reminder)

- **Do not** modify Step 1–3 backend logic or code.
- **Do not** push incomplete or unintended folders (rely on `.gitignore` and `git status`).
- **Do not** auto-generate the repository name; **confirm the name with the user** before creating the remote.

/**
 * Description 页面「保存到相册」：离屏容器 390×660，只克隆背景 + 绿底图 + 内容区，等图加载后再渲染
 * - 不截整页，不包含 CTA/导航
 * - 容器不用 display:none，用定位移出视口
 * - 渲染后移除容器
 */

import html2canvas from 'html2canvas';

const OUTPUT_WIDTH = 390;
const OUTPUT_HEIGHT = 660;
const SCALE = 3;
const PAGE_BACKGROUND = 'linear-gradient(-180deg, #F95279 10%, #F55243 100%)';

/** oklch 回退为 hex，避免 html2canvas 解析报错 */
const OKLCH_FALLBACK_CSS = `
:root, .dark { --foreground: #252525; --card-foreground: #252525; --popover: #ffffff; --popover-foreground: #252525; --primary-foreground: #ffffff; --secondary: #e8e9f5; --ring: #9a9a9a; --chart-1: #e8952c; --chart-2: #4db8a8; --chart-3: #3d5a9c; --chart-4: #e8c43a; --chart-5: #e0a83a; --sidebar: #fafafa; --sidebar-foreground: #252525; --sidebar-primary-foreground: #fafafa; --sidebar-accent: #f5f5f5; --sidebar-accent-foreground: #363636; --sidebar-border: #e5e5e5; --sidebar-ring: #9a9a9a; }
.dark { --background: #252525; --foreground: #fafafa; --card: #252525; --card-foreground: #fafafa; --popover: #252525; --popover-foreground: #fafafa; --primary: #fafafa; --primary-foreground: #363636; --secondary: #454545; --secondary-foreground: #fafafa; --muted: #454545; --muted-foreground: #9a9a9a; --accent: #454545; --accent-foreground: #fafafa; --destructive: #c43b3b; --destructive-foreground: #e05a3a; --border: #454545; --input: #454545; --ring: #6e6e6e; --chart-1: #4d6ae8; --chart-2: #5bc9a8; --chart-3: #e0a83a; --chart-4: #e05a9a; --chart-5: #e86a4a; --sidebar: #363636; --sidebar-foreground: #fafafa; --sidebar-primary: #4d6ae8; --sidebar-primary-foreground: #fafafa; --sidebar-accent: #454545; --sidebar-accent-foreground: #fafafa; --sidebar-border: #454545; --sidebar-ring: #6e6e6e; }
`;

/** 等待容器内所有 img 加载完成（含已缓存的） */
function waitForImages(container: HTMLElement, timeoutMs = 8000): Promise<void> {
  const imgs = Array.from(container.querySelectorAll<HTMLImageElement>('img'));
  if (imgs.length === 0) return Promise.resolve();

  return Promise.all(
    imgs.map((img) => {
      if (img.complete && img.naturalWidth > 0) return Promise.resolve();
      return Promise.race([
        new Promise<void>((resolve) => {
          img.onload = () => resolve();
          img.onerror = () => resolve();
        }),
        new Promise<void>((r) => setTimeout(r, timeoutMs)),
      ]);
    })
  ).then(() => {});
}

/**
 * 离屏容器渲染：只克隆背景层 + Landing_Background_LayerGreen + Description_Illustration_Title_Container
 * @param pageContainer 带 data-name="LuckyDraw_Description" 的页面根容器
 */
export async function captureDescriptionToJpg(
  pageContainer: HTMLElement,
  _resultId: number
): Promise<Blob> {
  const backgroundLayer = pageContainer.querySelector<HTMLElement>(
    '[data-name="Landing_Background_LayerGreen"]'
  );
  const contentContainer = pageContainer.querySelector<HTMLElement>(
    '[data-name="Description_Illustration_Title_Container"]'
  );

  if (!contentContainer) {
    throw new Error('Description_Illustration_Title_Container not found');
  }

  const offScreen = document.createElement('div');
  offScreen.setAttribute('data-description-capture-root', 'true');
  Object.assign(offScreen.style, {
    position: 'fixed',
    left: '-99999px',
    top: '0',
    width: `${OUTPUT_WIDTH}px`,
    height: `${OUTPUT_HEIGHT}px`,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    background: PAGE_BACKGROUND,
    boxSizing: 'border-box',
    zIndex: '99999',
  });
  offScreen.style.display = 'block';
  offScreen.style.visibility = 'visible';
  offScreen.style.opacity = '1';

  const wrapper = document.createElement('div');
  wrapper.style.cssText = `position:relative;width:100%;height:100%;overflow:hidden;`;

  if (backgroundLayer) {
    const bgClone = backgroundLayer.cloneNode(true) as HTMLElement;
    bgClone.style.position = 'absolute';
    bgClone.style.inset = '0';
    bgClone.style.width = '100%';
    bgClone.style.height = '100%';
    wrapper.appendChild(bgClone);
  }

  const contentClone = contentContainer.cloneNode(true) as HTMLElement;
  contentClone.style.position = 'absolute';
  contentClone.style.left = '50%';
  contentClone.style.transform = 'translateX(-50%)';
  contentClone.style.top = '0';
  wrapper.appendChild(contentClone);

  offScreen.appendChild(wrapper);
  document.body.appendChild(offScreen);

  await new Promise((r) => requestAnimationFrame(r));
  await waitForImages(offScreen);

  const w = offScreen.offsetWidth;
  const h = offScreen.offsetHeight;
  if (w <= 0 || h <= 0) {
    if (offScreen.parentNode) offScreen.parentNode.removeChild(offScreen);
    throw new Error(`Capture container has invalid size: ${w}x${h}`);
  }

  try {
    const canvas = await html2canvas(offScreen, {
      useCORS: true,
      scale: SCALE,
      width: OUTPUT_WIDTH,
      height: OUTPUT_HEIGHT,
      logging: false,
      backgroundColor: '#ffffff',
      ignoreElements: (el) => {
        const node = el as HTMLElement;
        if (typeof getComputedStyle !== 'undefined' && getComputedStyle(node).display === 'none') return true;
        return false;
      },
      onclone: (clonedDoc, clonedRoot) => {
        const appendTarget = clonedDoc.head ?? clonedDoc.documentElement;
        if (appendTarget) {
          const style = clonedDoc.createElement('style');
          style.textContent = OKLCH_FALLBACK_CSS;
          appendTarget.appendChild(style);
          clonedDoc.querySelectorAll('style').forEach((el) => {
            if (el.textContent)
              el.textContent = el.textContent.replace(/oklch\([^)]+\)/g, '#727272');
          });
        }
      },
    });

    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (b) => (b ? resolve(b) : reject(new Error('toBlob failed'))),
        'image/jpeg',
        1.0
      );
    });
    return blob;
  } finally {
    if (offScreen.parentNode) offScreen.parentNode.removeChild(offScreen);
  }
}

/**
 * 文件名：BCGDesignStudioLuckydraw + 8 位 result ID 的最后四位 + .jpg
 */
export function getDescriptionJpgFileName(resultId: number): string {
  const suffix = String(resultId).padStart(8, '0').slice(-4);
  return `BCGDesignStudioLuckydraw${suffix}.jpg`;
}

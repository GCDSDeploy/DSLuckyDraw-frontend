import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

/* 预加载书法体字体，加快首屏标题显示 */
import shangshouFontUrl from "@/assets/fonts/No.77-ShangShouCangShuFaTi-2.ttf?url";
const preloadLink = document.createElement("link");
preloadLink.rel = "preload";
preloadLink.href = shangshouFontUrl;
preloadLink.as = "font";
preloadLink.type = "font/ttf";
preloadLink.crossOrigin = "anonymous";
document.head.appendChild(preloadLink);

createRoot(document.getElementById("root")!).render(<App />);

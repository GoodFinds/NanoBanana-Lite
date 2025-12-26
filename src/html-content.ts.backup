export const htmlContent = `
<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>🍌 nano banana</title>
  <style>
    :root{
      --bg: #fbfbfd;
      --surface: #ffffff;
      --surface-secondary: #f5f5f7;
      --surface-tertiary: #ebebf0;
      --text: #1d1d1f;
      --text-secondary: #86868b;
      --accent: #007aff;
      --accent-hover: #0056cc;
      --accent-gradient: linear-gradient(135deg, #007aff 0%, #5856d6 100%);
      --success: #30d158;
      --warning: #ff9f0a;
      --error: #ff3b30;
      --border: rgba(0,0,0,0.08);
      --border-light: rgba(0,0,0,0.04);
      --shadow: 0 4px 20px rgba(0,0,0,0.08);
      --shadow-large: 0 20px 40px rgba(0,0,0,0.15);
      --glass: rgba(255,255,255,0.85);
    }
    * { box-sizing: border-box; }
    html, body { 
      height: 100%; 
      margin: 0; 
      padding: 0;
    }
    body {
      background: 
        radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%),
        linear-gradient(135deg, #fbfbfd 0%, #f0f0f3 100%);
      color: var(--text);
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif;
      font-size: 17px;
      line-height: 1.47;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      min-height: 100vh;
    }
    header {
      background: rgba(255,255,255,0.7);
      backdrop-filter: saturate(200%) blur(30px);
      -webkit-backdrop-filter: saturate(200%) blur(30px);
      border-bottom: 1px solid rgba(255,255,255,0.2);
      padding: 24px;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 1px 0 0 rgba(255,255,255,0.8) inset;
    }
    h1 {
      margin: 0;
      font-size: 32px;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: var(--text);
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .banana-logo {
      font-size: 36px;
      display: inline-block;
      filter: drop-shadow(0 2px 4px rgba(255,193,7,0.3));
    }
    @keyframes bananaSwing {
      0%, 100% { 
        transform: rotate(-10deg) scale(1);
        filter: drop-shadow(0 2px 4px rgba(255,193,7,0.3));
      }
      25% { 
        transform: rotate(5deg) scale(1.1);
        filter: drop-shadow(0 4px 8px rgba(255,193,7,0.5)) hue-rotate(10deg);
      }
      50% { 
        transform: rotate(-5deg) scale(1.05);
        filter: drop-shadow(0 6px 12px rgba(255,193,7,0.4)) hue-rotate(20deg);
      }
      75% { 
        transform: rotate(8deg) scale(1.08);
        filter: drop-shadow(0 4px 8px rgba(255,193,7,0.6)) hue-rotate(15deg);
      }
    }
    main {
      max-width: 800px;
      margin: 0 auto;
      padding: 32px 24px 60px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .section {
      margin-bottom: 24px;
    }
    @media (max-width: 768px) { 
      header { padding: 16px 20px; }
      h1 { font-size: 28px; }
      main { padding: 20px 16px 40px; max-width: 100%; }
    }
    .card {
      background: rgba(255,255,255,0.7);
      backdrop-filter: saturate(200%) blur(40px);
      -webkit-backdrop-filter: saturate(200%) blur(40px);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 12px;
      padding: 32px;
      box-shadow: 
        0 8px 32px rgba(0,0,0,0.08),
        0 1px 0 0 rgba(255,255,255,0.8) inset,
        0 0 0 1px rgba(255,255,255,0.05);
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      position: relative;
      overflow: hidden;
    }
    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent);
      pointer-events: none;
    }
    .card::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      padding: 1px;
      background: linear-gradient(145deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1));
      mask: linear-gradient(black, black) content-box, linear-gradient(black, black);
      mask-composite: exclude;
      -webkit-mask-composite: xor;
      pointer-events: none;
    }
    .grow { flex: 1; }
    label {
      display: block;
      font-size: 15px;
      font-weight: 600;
      color: var(--text);
      margin-bottom: 8px;
    }
    input[type="text"], input[type="url"] {
      width: 100%;
      height: 44px;
      padding: 0 16px;
      border-radius: 8px;
      background: rgba(255,255,255,0.6);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.4);
      color: var(--text);
      font-size: 17px;
      outline: none;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      box-shadow: 
        0 1px 0 0 rgba(255,255,255,0.8) inset,
        0 2px 8px rgba(0,0,0,0.04);
    }
    input[type="text"]:focus, input[type="url"]:focus {
      border-color: rgba(0,122,255,0.4);
      background: rgba(255,255,255,0.8);
      box-shadow: 
        0 1px 0 0 rgba(255,255,255,0.9) inset,
        0 0 0 3px rgba(0,122,255,0.1),
        0 4px 16px rgba(0,0,0,0.08);
    }
    textarea {
      width: 100%;
      min-height: 120px;
      resize: vertical;
      padding: 16px;
      border-radius: 8px;
      background: rgba(255,255,255,0.6);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.4);
      color: var(--text);
      font-size: 17px;
      font-family: inherit;
      outline: none;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      box-shadow: 
        0 1px 0 0 rgba(255,255,255,0.8) inset,
        0 2px 8px rgba(0,0,0,0.04);
    }
    textarea:focus {
      border-color: rgba(0,122,255,0.4);
      background: rgba(255,255,255,0.8);
      box-shadow: 
        0 1px 0 0 rgba(255,255,255,0.9) inset,
        0 0 0 3px rgba(0,122,255,0.1),
        0 4px 16px rgba(0,0,0,0.08);
    }
    textarea.drag-over {
      border-color: rgba(0,122,255,0.6);
      background: rgba(0,122,255,0.05);
      box-shadow: 
        0 1px 0 0 rgba(255,255,255,0.9) inset,
        0 0 0 3px rgba(0,122,255,0.15),
        0 4px 20px rgba(0,122,255,0.2);
    }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: rgba(255,255,255,0.6);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      color: var(--text);
      border: 1px solid rgba(255,255,255,0.4);
      padding: 0 20px;
      height: 44px;
      border-radius: 8px;
      font-size: 17px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      white-space: nowrap;
      text-decoration: none;
      box-shadow: 
        0 1px 0 0 rgba(255,255,255,0.8) inset,
        0 2px 8px rgba(0,0,0,0.04);
    }
    .btn:active {
      transform: scale(0.98);
      transition: transform 0.1s ease;
    }
    .btn[disabled] {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none !important;
    }
    .btn.primary {
      background: linear-gradient(135deg, #007aff 0%, #5856d6 100%);
      color: white;
      border: 1px solid rgba(0,122,255,0.4);
      font-weight: 600;
      box-shadow: 
        0 1px 0 0 rgba(255,255,255,0.2) inset,
        0 4px 16px rgba(0,122,255,0.25),
        0 0 0 1px rgba(0,122,255,0.1);
    }
    .pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--surface-tertiary);
      border: 1px solid var(--border);
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
      color: var(--text-secondary);
      font-weight: 500;
    }
    .toolbar {
      display: flex;
      gap: 12px;
      align-items: center;
      flex-wrap: wrap;
    }
    .drop {
      border: 2px dashed rgba(0,122,255,0.3);
      background: rgba(255,255,255,0.4);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-radius: 12px;
      padding: 32px;
      text-align: center;
      color: var(--text-secondary);
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      font-size: 15px;
      box-shadow: 
        0 1px 0 0 rgba(255,255,255,0.6) inset,
        0 2px 12px rgba(0,0,0,0.04);
    }
    .thumbs {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: 12px;
      margin-top: 16px;
    }
    .thumb {
      position: relative;
      aspect-ratio: 1;
      border-radius: 8px;
      overflow: hidden;
      background: rgba(255,255,255,0.6);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.4);
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      box-shadow: 
        0 1px 0 0 rgba(255,255,255,0.8) inset,
        0 2px 8px rgba(0,0,0,0.04);
    }
    .thumb img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .thumb .x {
      position: absolute;
      top: 8px;
      right: 8px;
      background: rgba(0,0,0,0.7);
      backdrop-filter: blur(10px);
      border: none;
      border-radius: 50%;
      color: white;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }
    .gallery {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
      margin-top: 20px;
      min-height: 500px;
      justify-content: center;
    }
    .shot {
      border: 1px solid rgba(255,255,255,0.4);
      border-radius: 12px;
      overflow: hidden;
      background: rgba(255,255,255,0.7);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      box-shadow: 
        0 1px 0 0 rgba(255,255,255,0.8) inset,
        0 4px 16px rgba(0,0,0,0.06);
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .shot img {
      display: block;
      width: 100%;
      height: auto;
    }
    .shot .bar {
      display: flex;
      gap: 12px;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      background: var(--surface-secondary);
      border-top: 1px solid var(--border);
    }
    .muted { color: var(--text-secondary); }
    .small { font-size: 14px; }
    .krow {
      display: flex;
      gap: 12px;
      align-items: center;
      flex-wrap: wrap;
    }
    .log {
      white-space: pre-wrap;
      font-family: SF Mono, Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;
      font-size: 14px;
      color: var(--text-secondary);
      background: rgba(255,255,255,0.4);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.4);
      border-radius: 8px;
      padding: 16px;
      max-height: 240px;
      overflow: auto;
      line-height: 1.4;
      box-shadow: 
        0 1px 0 0 rgba(255,255,255,0.6) inset,
        0 2px 8px rgba(0,0,0,0.04);
    }
    details {
      margin: 0;
      background: rgba(255,255,255,0.5);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.4);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 
        0 1px 0 0 rgba(255,255,255,0.6) inset,
        0 2px 8px rgba(0,0,0,0.04);
    }
    summary {
      list-style: none;
      cursor: pointer;
      font-weight: 600;
      padding: 16px;
      color: var(--text);
      transition: background 0.2s ease;
    }
    summary::-webkit-details-marker {
      display: none;
    }
    details[open] summary {
      border-bottom: 1px solid var(--border);
    }
    details .content {
      padding: 16px;
    }
    footer {
      padding: 20px;
      text-align: center;
      color: var(--text-secondary);
      font-size: 14px;
    }
    .switch {
      position: relative;
      display: inline-block;
      width: 52px;
      height: 32px;
    }
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    .switch .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #e5e5ea;
      transition: 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
      border-radius: 32px;
    }
    .switch .slider:before {
      position: absolute;
      content: "";
      height: 28px;
      width: 28px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      transition: 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
      border-radius: 50%;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    .switch input:checked + .slider {
      background-color: var(--accent);
    }
    .switch input:checked + .slider:before {
      transform: translateX(20px);
    }
    /* Image placeholder loading effect */
    .image-placeholder {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
      border-radius: 8px;
      position: relative;
      overflow: hidden;
    }
    .image-placeholder::after {
      content: '🖼️';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 32px;
      opacity: 0.5;
    }
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    /* Empty state placeholder */
    .empty-placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 80px 40px;
      color: var(--text-secondary);
      text-align: center;
      background: rgba(255,255,255,0.3);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px dashed rgba(0,122,255,0.2);
      border-radius: 12px;
      min-height: 400px;
    }
    .empty-placeholder .icon {
      font-size: 48px;
      margin-bottom: 16px;
      opacity: 0.6;
    }
    .empty-placeholder .text {
      font-size: 16px;
      font-weight: 500;
      opacity: 0.8;
    }
    /* Card drawing animations */
    .card-back {
      background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%);
      border-radius: 12px;
      aspect-ratio: 2/3;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 32px;
      font-weight: bold;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      animation: cardPulse 2s ease-in-out infinite;
    }
    .card-back::before {
      content: '';
      position: absolute;
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      background: linear-gradient(45deg, #ffd700, #ff6b6b, #4ecdc4, #45b7d1, #ffd700);
      background-size: 400% 400%;
      border-radius: inherit;
      z-index: -1;
      animation: rainbowFlow 1.5s ease-in-out infinite, glowPulse 2s ease-in-out infinite;
    }
    .card-back::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
      transform: translate(-50%, -50%);
      animation: sparkle 1s ease-in-out infinite;
    }
    @keyframes cardPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    @keyframes rainbowFlow {
      0% { background-position: 0% 50%; filter: hue-rotate(0deg) brightness(1.2); }
      50% { background-position: 100% 50%; filter: hue-rotate(180deg) brightness(1.5); }
      100% { background-position: 0% 50%; filter: hue-rotate(360deg) brightness(1.2); }
    }
    @keyframes glowPulse {
      0%, 100% { box-shadow: 0 0 20px rgba(255,215,0,0.5), 0 0 40px rgba(255,215,0,0.3); }
      50% { box-shadow: 0 0 40px rgba(255,215,0,0.8), 0 0 80px rgba(255,215,0,0.5); }
    }
    @keyframes sparkle {
      0%, 100% { opacity: 0; transform: translate(-50%, -50%) rotate(0deg); }
      50% { opacity: 1; transform: translate(-50%, -50%) rotate(180deg); }
    }
    .card-flip {
      perspective: 1200px;
      width: 100%;
      max-width: 400px;
      height: 500px;
      animation: cardEntry 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    @keyframes cardEntry {
      0% { 
        transform: scale(0) rotateY(-180deg);
        opacity: 0;
      }
      50% {
        transform: scale(1.2) rotateY(-90deg);
        opacity: 0.7;
      }
      100% { 
        transform: scale(1) rotateY(0deg);
        opacity: 1;
      }
    }
    .card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transform-style: preserve-3d;
      animation: floatCard 3s ease-in-out infinite;
    }
    @keyframes floatCard {
      0%, 100% { transform: translateY(0px) rotateX(0deg); }
      50% { transform: translateY(-10px) rotateX(5deg); }
    }
    .card-inner.flipped {
      transform: rotateY(180deg);
      animation: flipReveal 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    @keyframes flipReveal {
      0% { transform: rotateY(0deg) scale(1); }
      50% { transform: rotateY(90deg) scale(1.1); filter: brightness(1.5); }
      100% { transform: rotateY(180deg) scale(1); }
    }
    .card-front, .card-back-side {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 12px;
      overflow: hidden;
    }
    .card-front {
      transform: rotateY(180deg);
      background: transparent;
      border: none;
      box-shadow: none;
    }
    .card-front img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 12px;
    }
    .card-rarity {
      position: absolute;
      top: 12px;
      right: 12px;
      padding: 4px 8px;
      border-radius: 16px;
      font-size: 12px;
      font-weight: bold;
      color: white;
      text-shadow: 0 1px 2px rgba(0,0,0,0.5);
    }
    .rarity-common { background: linear-gradient(135deg, #6b7280, #9ca3af); }
    .rarity-rare { background: linear-gradient(135deg, #8b5cf6, #a855f7); }
    .rarity-epic { background: linear-gradient(135deg, #f59e0b, #f97316); }
    .rarity-legendary { background: linear-gradient(135deg, #ef4444, #dc2626); }
    .card-description-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba(0,0,0,0.8));
      color: white;
      padding: 20px 16px 16px;
      text-align: left;
      border-radius: 0 0 12px 12px;
    }
    .card-download-btn {
      margin-top: 16px;
      text-align: center;
    }
    .card-description {
      font-size: 14px;
      line-height: 1.4;
      margin-bottom: 12px;
      min-height: 20px;
      opacity: 0;
      animation: fadeInDescription 0.5s ease-out 0.5s forwards;
    }
    @keyframes fadeInDescription {
      to { opacity: 1; }
    }
    .typewriter {
      border-right: 2px solid rgba(255,255,255,0.7);
      animation: blinkCursor 1s infinite;
    }
    @keyframes blinkCursor {
      0%, 50% { border-right-color: rgba(255,255,255,0.7); }
      51%, 100% { border-right-color: transparent; }
    }
    @keyframes slideDown {
      0% { 
        opacity: 0; 
        transform: translateY(-20px); 
      }
      100% { 
        opacity: 1; 
        transform: translateY(0); 
      }
    }
    .card-name {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 4px;
    }
    .card-stars {
      font-size: 14px;
    }
    /* Dramatic effects */
    .screen-flash {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
      z-index: 9999;
      pointer-events: none;
      opacity: 0;
      animation: flashScreen 0.5s ease-out;
    }
    @keyframes flashScreen {
      0% { opacity: 0; }
      50% { opacity: 1; }
      100% { opacity: 0; }
    }
    .particles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
    }
    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: #ffd700;
      border-radius: 50%;
      animation: particleFloat 2s ease-out forwards;
    }
    @keyframes particleFloat {
      0% {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
      100% {
        transform: translateY(-100px) scale(0);
        opacity: 0;
      }
    }
    .legendary-aura {
      position: absolute;
      top: -20px;
      left: -20px;
      right: -20px;
      bottom: -20px;
      background: radial-gradient(circle, rgba(255,215,0,0.4) 0%, rgba(255,0,0,0.2) 50%, transparent 80%);
      border-radius: 20px;
      animation: legendaryPulse 1s ease-in-out infinite;
      z-index: -2;
    }
    @keyframes legendaryPulse {
      0%, 100% { 
        transform: scale(1);
        filter: blur(0px);
      }
      50% { 
        transform: scale(1.1);
        filter: blur(2px);
      }
    }
    .epic-glow {
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      background: radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%);
      border-radius: 15px;
      animation: epicGlow 1.5s ease-in-out infinite;
      z-index: -2;
    }
    @keyframes epicGlow {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.05); }
    }
    /* Custom cursor styles */
    .btn { cursor: pointer; }
    .btn.primary { cursor: pointer; }
    .drop { cursor: copy; }
    .thumb { cursor: zoom-in; }
    .thumb .x { cursor: pointer; }
    .shot { cursor: zoom-in; }
    summary { cursor: pointer; }
    input[type="text"], input[type="url"], textarea { cursor: text; }
    input[type="file"] { cursor: pointer; }
    input[type="checkbox"] { cursor: pointer; }
    .switch { cursor: pointer; }
    /* SF Pro Display font loading */
    @supports (font: -apple-system-body) {
      body { font: -apple-system-body; }
    }
    /* 拖拽相关样式 */
    .drag-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 122, 255, 0.1);
      border: 2px dashed var(--accent);
      border-radius: 12px;
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 100;
      backdrop-filter: blur(10px);
    }
    .drag-overlay.active {
      display: flex;
    }
    .drag-hint {
      background: var(--accent);
      color: white;
      padding: 12px 20px;
      border-radius: 24px;
      font-size: 14px;
      font-weight: 500;
      box-shadow: 0 4px 20px rgba(0, 122, 255, 0.3);
    }
    textarea.drag-over {
      border-color: var(--accent) !important;
      box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.15) !important;
      background: rgba(0, 122, 255, 0.05) !important;
    }
  </style>
</head>
<body>
  <header>
    <h1><span class="banana-logo">🍌</span> nano banana</h1>
  </header>
  <main>
    <!-- 卡片展示区 -->
    <section class="section" id="resultsSection" style="display: none;">
      <div class="card" style="min-height: 600px; position: relative;">
        <div style="position: absolute; top: 20px; right: 20px; display: flex; gap: 8px; z-index: 10; align-items: center;">
          <a class="btn" id="download" style="opacity: 0.7; font-size: 14px; display: none; text-decoration: none; height: 44px; line-height: 44px;">⬇️ 下载</a>
          <button class="btn" id="clear" style="opacity: 0.7; font-size: 14px; height: 44px;">重置</button>
        </div>
        <div id="gallery" class="gallery" style="margin-top: 0;"></div>
      </div>
    </section>
    <!-- 许愿输入区 -->
    <section class="section" id="controlSection">
      <div class="card">
        <label>🎯 抽卡许愿</label>
        <div style="position: relative;" id="promptContainer">
          <textarea id="prompt" placeholder="描述你想要抽到的卡片...&#10;&#10;例如：美丽的精灵法师、炫酷的机甲战士、可爱的魔法少女&#10;&#10;💡 支持拖拽图片到此处上传"></textarea>
          <div class="drag-overlay" id="dragOverlay">
            <div class="drag-hint">📤 释放鼠标上传图片</div>
          </div>
          <div id="thumbs" class="thumbs" style="margin-top: 12px;"></div>
          <div style="position: absolute; bottom: 12px; right: 12px; display: flex; gap: 8px; align-items: center;">
            <label style="color: var(--accent); cursor: pointer; font-size: 14px;" title="点击或拖拽上传图片">
              📎 <input id="file" type="file" accept="image/*" multiple hidden>
            </label>
            <span style="color: var(--text-secondary); font-size: 12px;" id="fileCount"></span>
          </div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div class="pill" id="status">准备抽卡</div>
            <div style="font-size: 12px; color: var(--text-secondary);">传说 2% • 史诗 8% • 稀有 20% • 普通 70%</div>
          </div>
          <button class="btn primary" id="go" style="font-size: 18px; padding: 0 32px; height: 50px;">🎴 开始抽卡</button>
        </div>
      </div>
    </section>
    <!-- 高级设置 -->
    <section class="section">
      <div class="card">
        <details>
          <summary>⚙️ 高级设置</summary>
          <div class="content">
            <label>API Key (可选)</label>
            <div class="krow" style="margin-bottom: 16px;">
              <input id="userKey" type="text" placeholder="sk-or-...">
              <label class="switch">
                <input id="useMine" type="checkbox">
                <span class="slider"></span>
              </label>
              <span style="font-size: 15px; color: var(--text-secondary);">使用自定义Key</span>
            </div>
            <button class="btn" id="saveKey">保存设置</button>
            <label style="margin-top: 20px;">模型配置</label>
            <div class="krow">
              <input id="model" type="text" value="google/gemini-2.5-flash-image-preview:free" placeholder="模型ID">
              <input id="endpoint" type="url" value="/api/chat" placeholder="API端点">
            </div>
          </div>
        </details>
        <div class="muted small" style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--border-light);">
          💡 支持标准 Chat Completions 格式，图像模型会在 <code>choices[0].message.content 中的图像数据</code> 返回图片
        </div>
      </div>
    </section>
  </main>
  <footer>
  </footer>
<script>
;(() => {
  // ====== 内置加密Key区（已混淆，100条，单文件嵌入） ======
  const _p = ["nano-","banana","🟡2025-09-01","🍌","XiGordenSun@duge360-","公号","AI加速派"].join("");
  const OBF_KEYS = [
    "ecad03839dd27bdc.FF75B0H_I_m2O_-G_gvGdawLnmUzUchjb76j9o1ca0ABBeZaC-cz_a9qqYH6WcF2oVbKMTBfnWBqvKHw2Q9pQAMCt1BVtm35rw.62be501f",
    "190a445007f2a861.-kSe3ThPEwTaJn-5bU-73bAlL7z34crU6gMZZ9i_YnztSYrQKFoABMYoeb0-Gb-N4iJ06KawyYbrBEw22rdhfepNh4QsVQRQlA.b20462a9",
    "a5d39adbb8fc32e6.v347gm7_sfOG_BMKIc27AjigRY46Q8mgLzaMBw3TTGKuJHDYLur3-pj0FVwmwe9cO6FOjjsTxPJ9adoHC9FCa_QtI454tqL6mg.4b1a1b18"
  ];
  async function deobf(entry) {
    const parts = entry.split('.');
    const saltHex = parts[0];
    const b64 = parts[1];
    const chk = parts[2];
    const cipher = base64UrlToBytes(b64);
    const mask = await sha256Bytes(strToBytes(_p + saltHex));
    const plain = xorBytes(cipher, mask);
    const sum = (await sha1Hex(plain)).slice(0,8);
    if (chk && chk !== sum) throw new Error('checksum mismatch');
    return new TextDecoder().decode(plain);
  }
  async function pickKey() {
    const pool = OBF_KEYS.slice();
    for (var i=pool.length-1;i>0;i--){ var j = Math.floor(Math.random()*(i+1)); var t=pool[i]; pool[i]=pool[j]; pool[j]=t; }
    for (var k=0;k<pool.length;k++) {
      try { return await deobf(pool[k]) } catch(e) { console.warn('解密失败，尝试下一条', e) }
    }
    throw new Error('没有可用的内置Key');
  }
  // 拖拽上传功能
  function initDragAndDrop() {
    var promptContainer = el('promptContainer');
    var promptEl = el('prompt');
    var dragOverlay = el('dragOverlay');
    var fileEl = el('file');
    if (!promptContainer || !promptEl || !dragOverlay || !fileEl) {
      return;
    }
    var dragCounter = 0;
    // 阻止默认的拖拽行为
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      promptContainer.addEventListener(eventName, preventDefaults, false);
      document.body.addEventListener(eventName, preventDefaults, false);
    });
    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }
    // 拖拽进入
    promptContainer.addEventListener('dragenter', function(e) {
      dragCounter++;
      if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
        promptEl.classList.add('drag-over');
        dragOverlay.classList.add('active');
      }
    });
    // 拖拽离开
    promptContainer.addEventListener('dragleave', function(e) {
      dragCounter--;
      if (dragCounter === 0) {
        promptEl.classList.remove('drag-over');
        dragOverlay.classList.remove('active');
      }
    });
    // 拖拽悬停
    promptContainer.addEventListener('dragover', function(e) {
      if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
        e.dataTransfer.dropEffect = 'copy';
        promptEl.classList.add('drag-over');
        dragOverlay.classList.add('active');
      }
    });
    // 释放文件
    promptContainer.addEventListener('drop', function(e) {
      dragCounter = 0;
      promptEl.classList.remove('drag-over');
      dragOverlay.classList.remove('active');
      var files = e.dataTransfer.files;
      if (files.length > 0) {
        // 过滤出图片文件
        var imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
        if (imageFiles.length > 0) {
          // 模拟文件输入
          var dt = new DataTransfer();
          imageFiles.forEach(file => dt.items.add(file));
          fileEl.files = dt.files;
          // 触发文件变化事件
          var event = new Event('change', { bubbles: true });
          fileEl.dispatchEvent(event);
          // 显示提示
          toast('📤 已上传 ' + imageFiles.length + ' 张图片');
        } else {
          toast('❌ 请拖拽图片文件', true);
        }
      }
    });
    // 全局拖拽离开事件（防止在其他区域时overlay不消失）
    document.addEventListener('dragleave', function(e) {
      if (e.clientX === 0 && e.clientY === 0) {
        dragCounter = 0;
        promptEl.classList.remove('drag-over');
        dragOverlay.classList.remove('active');
      }
    });
  }
  // 基础函数
  function el(id){ return document.getElementById(id) }
  // UI元素
  var promptEl = el('prompt');
  var fileEl = el('file');
  var thumbsEl = el('thumbs');
  var galleryEl = el('gallery');
  var statusEl = el('status');
  var goBtn = el('go');
  var clearBtn = el('clear');
  var userKeyEl = el('userKey');
  var useMineEl = el('useMine');
  var saveKeyBtn = el('saveKey');
  var modelEl = el('model');
  var endpointEl = el('endpoint');
  var imgs = [];
  function toast(msg, bad){ 
    statusEl.textContent = msg; 
    statusEl.style.color = bad ? 'var(--err)' : ''; 
    setTimeout(() => statusEl.textContent = '准备抽卡', 2000);
  }
  function status(s){ statusEl.textContent = s }
  function showEmptyState() {
    // 空状态只在没有结果时显示在控制界面下方
    var resultsSection = el('resultsSection');
    if (resultsSection.style.display !== 'none') {
      return; // 如果有结果显示，不需要空状态
    }
  }
  function getRarity() {
    var rand = Math.random();
    if (rand < 0.02) return { name: 'legendary', stars: '⭐⭐⭐⭐', text: '传说' };
    if (rand < 0.10) return { name: 'epic', stars: '⭐⭐⭐', text: '史诗' };
    if (rand < 0.30) return { name: 'rare', stars: '⭐⭐', text: '稀有' };
    return { name: 'common', stars: '⭐', text: '普通' };
  }
  function showCardBack() {
    // 显示结果区域
    var resultsSection = el('resultsSection');
    if (resultsSection.style.display === 'none') {
      resultsSection.style.display = 'block';
      resultsSection.style.animation = 'slideDown 0.5s ease-out';
    }
    var flipContainer = document.createElement('div');
    flipContainer.className = 'card-flip';
    var cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    var cardBackSide = document.createElement('div');
    cardBackSide.className = 'card-back-side card-back';
    var bananaIcon = document.createElement('div');
    bananaIcon.style.cssText = 'font-size: 48px; animation: bananaSwing 1.5s ease-in-out infinite;';
    bananaIcon.textContent = '🍌';
    cardBackSide.appendChild(bananaIcon);
    var cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    cardInner.appendChild(cardBackSide);
    cardInner.appendChild(cardFront);
    flipContainer.appendChild(cardInner);
    galleryEl.appendChild(flipContainer);
    return { flipContainer, cardInner, cardFront };
  }
  function createParticles(container) {
    for (var i = 0; i < 20; i++) {
      var particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 2 + 's';
      container.appendChild(particle);
    }
  }
  function createScreenFlash() {
    var flash = document.createElement('div');
    flash.className = 'screen-flash';
    document.body.appendChild(flash);
    setTimeout(function() {
      document.body.removeChild(flash);
    }, 500);
  }
  function typeWriter(element, text, speed) {
    element.textContent = '';
    element.classList.add('typewriter');
    let i = 0;
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        element.classList.remove('typewriter');
      }
    }
    type(); // 立即开始打字机效果
  }
  function showResult(dataUrl, cardComponents, description) {
    if (!cardComponents) {
      cardComponents = showCardBack();
    }
    var rarity = getRarity();
    var img = new Image();
    img.style.imageRendering = 'high-quality';
    img.style.imageRendering = '-webkit-optimize-contrast';
    img.src = dataUrl;
    // 添加稀有度光环效果
    if (rarity.name === 'legendary') {
      var aura = document.createElement('div');
      aura.className = 'legendary-aura';
      cardComponents.flipContainer.appendChild(aura);
      createScreenFlash();
    } else if (rarity.name === 'epic') {
      var glow = document.createElement('div');
      glow.className = 'epic-glow';
      cardComponents.flipContainer.appendChild(glow);
    }
    // 添加粒子效果
    var particleContainer = document.createElement('div');
    particleContainer.className = 'particles';
    cardComponents.flipContainer.appendChild(particleContainer);
    createParticles(particleContainer);
    cardComponents.cardFront.appendChild(img);
    // 创建外部描述容器  
    var descriptionContainer = document.createElement('div');
    descriptionContainer.style.cssText = 'margin-top: 16px; padding: 12px; background: rgba(255,255,255,0.7); backdrop-filter: blur(20px); border-radius: 8px; border: 1px solid rgba(255,255,255,0.4); opacity: 0; transition: opacity 0.5s ease;';
    var descriptionEl = document.createElement('div');
    descriptionEl.className = 'card-description';
    descriptionEl.style.cssText = 'color: var(--text); font-size: 14px; line-height: 1.4; margin: 0;';
    descriptionContainer.appendChild(descriptionEl);
    // 准备顶部下载按钮
    var topDownloadBtn = el('download');
    topDownloadBtn.download = 'image-' + Date.now() + '.png';
    topDownloadBtn.href = dataUrl;
    // 添加描述到图片下方
    setTimeout(function() {
      if (description) {
        galleryEl.appendChild(descriptionContainer);
        // 显示描述容器并开始打字机效果
        setTimeout(function() {
          descriptionContainer.style.opacity = '1';
          typeWriter(descriptionEl, description, 50);
        }, 100);
        // 显示顶部下载按钮
        setTimeout(function() {
          topDownloadBtn.style.display = 'block';
        }, 500);
      } else {
        // 没有描述时直接显示下载按钮
        topDownloadBtn.style.display = 'block';
      }
    }, 3200);
    // 震撼的翻转动画序列
    setTimeout(function() {
      cardComponents.cardInner.style.animation = 'none';
      cardComponents.cardInner.classList.add('flipped');
      // 传说级别额外震屏效果
      if (rarity.name === 'legendary') {
        setTimeout(createScreenFlash, 600);
        setTimeout(createScreenFlash, 1200);
      }
      // 图片加载完成后，从卡片中"弹出"并变成独立显示
      setTimeout(function() {
        // 创建独立的图片容器
        var imageContainer = document.createElement('div');
        imageContainer.style.cssText = 'width: 100%; max-width: 400px; margin: 20px auto; transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);';
        // 克隆图片
        var independentImg = img.cloneNode();
        independentImg.style.cssText = 'width: 100%; height: auto; border-radius: 12px; transform: scale(0.8); opacity: 0; transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);';
        imageContainer.appendChild(independentImg);
        // 隐藏原卡片，显示独立图片
        cardComponents.flipContainer.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        cardComponents.flipContainer.style.transform = 'scale(0.8)';
        cardComponents.flipContainer.style.opacity = '0';
        galleryEl.appendChild(imageContainer);
        // 触发图片出现动画
        setTimeout(function() {
          independentImg.style.transform = 'scale(1)';
          independentImg.style.opacity = '1';
        }, 100);
        // 移除原卡片
        setTimeout(function() {
          if (galleryEl.contains(cardComponents.flipContainer)) {
            galleryEl.removeChild(cardComponents.flipContainer);
          }
        }, 800);
      }, 1200);
      // 自动滚动到卡片顶部
      setTimeout(function() {
        var resultsSection = el('resultsSection');
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 2500);
    }, 2000);
  }
  // 按钮事件
  clearBtn.onclick = function(){ 
    galleryEl.innerHTML=''; 
    imgs = [];
    thumbsEl.innerHTML = '';
    updateFileCount();
    status('准备抽卡');
    // 隐藏结果区域和下载按钮
    var resultsSection = el('resultsSection');
    resultsSection.style.display = 'none';
    var downloadBtn = el('download');
    downloadBtn.style.display = 'none';
    showEmptyState();
  };
  goBtn.onclick = async function(){
    try{
      var prompt = (promptEl.value||'').trim();
      if(!prompt){ toast('请先输入提示词', true); return }
      // 清除之前的结果并隐藏下载按钮
      galleryEl.innerHTML = '';
      var downloadBtn = el('download');
      downloadBtn.style.display = 'none';
      status('抽卡中…');
      var cardComponents = showCardBack();
      var key = '';
      if (useMineEl.checked) {
        key = (userKeyEl.value||'').trim();
        if(!key){ 
          toast('已勾选"使用我的Key"，但没有填写。', true); 
          galleryEl.removeChild(cardComponents.flipContainer);
          return 
        }
      } else {
        status('解密内置Key…');
        key = await pickKey();
      }
      var model = modelEl.value.trim();
      var endpoint = endpointEl.value.trim();
      var content = [{type:'text', text: prompt}];
      for(var i=0;i<imgs.length;i++){ 
        content.push({type:'image_url', image_url:{url: imgs[i].dataURL}}) 
      }
      var body = { 
        model: model, 
        messages: [{ role: 'user', content: content }],
        max_tokens: 1024
      };
      status('请求中…');
      var res = await fetch(endpoint, {
        method:'POST',
        headers:{
          'Authorization': 'Bearer ' + key,
          'HTTP-Referer': location.origin,
          'X-Title': 'nano banana H5',
          'Content-Type':'application/json'
        },
        body: JSON.stringify(body)
      });
      var text = await res.text();
      var json = null;
      try{ json = JSON.parse(text) } catch(e){ throw new Error('返回非JSON：' + text.slice(0,300)) }
      if (!res.ok) throw new Error((json && json.error && json.error.message) || JSON.stringify(json));
      var msg = (json && json.choices && json.choices[0] && json.choices[0].message) || {};
      var description = (msg.content || '').trim();
      var images = (msg && msg.images && Array.isArray(msg.images)) ? msg.images.slice() : [];
      if (images.length === 0) {
        var c = description;
        var datas = c.match(/data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=\-_]+/g) || [];
        for (var d=0; d<datas.length; d++){ images.push({type:'image_url', image_url:{url: datas[d]}}) }
      }
      if (images.length === 0) {
        toast('抽卡失败，没有获得卡片', true);
        status('抽卡失败');
        galleryEl.removeChild(cardComponents.flipContainer);
        return;
      }
      images.forEach(function(im, i){
        var url = (im && im.image_url && im.image_url.url) || '';
        if(!url) return;
        if (i === 0) {
          showResult(url, cardComponents, description);
        } else {
          showResult(url, null, description);
        }
      });
      status('抽卡完成');
      toast('恭喜获得 ' + images.length + ' 张卡片！');
    } catch(e){
      status('抽卡失败');
      toast('抽卡失败: ' + e.message, true);
      if(typeof cardComponents !== 'undefined' && cardComponents && galleryEl.contains(cardComponents.flipContainer)) {
        galleryEl.removeChild(cardComponents.flipContainer);
      }
    }
  };
  // 文件处理
  var fileCountEl = el('fileCount');
  fileEl.onchange = function(e){ handleFiles(e.target.files); };
  function handleFiles(files){
    for(var i=0; i<files.length && imgs.length<8; i++){
      var file = files[i];
      if(!file.type.startsWith('image/')) continue;
      var reader = new FileReader();
      reader.onload = function(e){
        imgs.push({dataURL: e.target.result, file: file});
        updateThumbs();
        updateFileCount();
      };
      reader.readAsDataURL(file);
    }
  }
  function updateThumbs(){
    thumbsEl.innerHTML = '';
    imgs.forEach((img, i) => {
      var div = document.createElement('div');
      div.className = 'thumb';
      var imgEl = document.createElement('img');
      imgEl.src = img.dataURL;
      var x = document.createElement('div');
      x.className = 'x';
      x.textContent = '×';
      x.onclick = () => { 
        imgs.splice(i, 1); 
        updateThumbs(); 
        updateFileCount();
      };
      div.appendChild(imgEl);
      div.appendChild(x);
      thumbsEl.appendChild(div);
    });
  }
  function updateFileCount() {
    fileCountEl.textContent = imgs.length > 0 ? imgs.length + '/8' : '';
  }
  // 拖拽到 textarea
  promptEl.ondragover = function(e){ 
    e.preventDefault(); 
    promptEl.classList.add('drag-over');
  };
  promptEl.ondragleave = function(e){ 
    promptEl.classList.remove('drag-over');
  };
  promptEl.ondrop = function(e){ 
    e.preventDefault(); 
    promptEl.classList.remove('drag-over');
    handleFiles(e.dataTransfer.files); 
  };
  saveKeyBtn.onclick = function(){
    var key = userKeyEl.value.trim();
    var model = modelEl.value.trim();
    var endpoint = endpointEl.value.trim();
    if(key){ localStorage.setItem("userKey", key); }
    if(model){ localStorage.setItem("userModel", model); }
    if(endpoint){ localStorage.setItem("userEndpoint", endpoint); }
    toast("设置已保存");
  };
  var savedKey = localStorage.getItem("userKey");
  var savedModel = localStorage.getItem("userModel");
  var savedEndpoint = localStorage.getItem("userEndpoint");
  if(savedKey){ userKeyEl.value = savedKey; }
  if(savedModel){ modelEl.value = savedModel; }
  if(savedEndpoint){ endpointEl.value = savedEndpoint; }
  // 初始化文件计数和空状态
  updateFileCount();
  showEmptyState();
  // ====== 工具函数 ======
  function base64UrlToBytes(s){ s=s.replace(/-/g,'+').replace(/_/g,'/'); while(s.length%4)s+='='; var bin=atob(s); var out=new Uint8Array(bin.length); for(var i=0;i<bin.length;i++) out[i]=bin.charCodeAt(i); return out }
  function strToBytes(s){ return new TextEncoder().encode(s) }
  async function sha256Bytes(bytes){ var b=await crypto.subtle.digest('SHA-256', bytes); return new Uint8Array(b) }
  async function sha1Hex(bytes){ var b=await crypto.subtle.digest('SHA-1', bytes); var arr=[].slice.call(new Uint8Array(b)); return arr.map(function(x){return x.toString(16).padStart(2,'0')}).join('') }
  function xorBytes(a, mask){ var out=new Uint8Array(a.length); for(var i=0;i<a.length;i++) out[i]=a[i]^mask[i%mask.length]; return out }
})();
</script>
</body>
</html>
`;

export const htmlContent = `
<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>🍌 nano banana</title>
  <style>
    :root {
      --primary: #ffe135;
      --accent: #ffb700;
      --bg: #fafafa;
      --card-bg: #ffffff;
      --text: #2d3436;
      --text-secondary: #636e72;
      --border: #dfe6e9;
      --err: #ff7675;
    }
    body { font-family: -apple-system, system-ui, sans-serif; background: var(--bg); color: var(--text); margin: 0; padding: 20px; line-height: 1.5; }
    header { text-align: center; margin-bottom: 30px; }
    .card { background: var(--card-bg); border-radius: 16px; padding: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border: 1px solid var(--border); max-width: 600px; margin: 0 auto 20px; }
    label { display: block; font-weight: 600; margin-bottom: 8px; font-size: 14px; }
    textarea { width: 100%; height: 120px; border: 1px solid var(--border); border-radius: 12px; padding: 12px; box-sizing: border-box; resize: none; font-size: 16px; transition: border 0.2s; }
    textarea:focus { outline: none; border-color: var(--accent); }
    .btn { background: var(--primary); border: none; padding: 12px 24px; border-radius: 12px; font-weight: 600; cursor: pointer; width: 100%; font-size: 16px; transition: 0.2s; position: relative; overflow: hidden; }
    .btn:hover { background: var(--accent); }
    .btn:disabled { opacity: 0.6; cursor: not-allowed; }
    .btn.secondary { background: #eee; width: auto; font-size: 13px; padding: 6px 12px; height: 36px; display: flex; align-items: center; text-decoration: none; color: inherit; }
    
    .thumbs { display: flex; flex-wrap: wrap; gap: 8px; margin: 10px 0; }
    .thumb-item { position: relative; width: 50px; height: 50px; }
    .thumb-item img { width: 100%; height: 100%; object-fit: cover; border-radius: 6px; }
    .thumb-del { position: absolute; top: -5px; right: -5px; background: var(--err); color: white; border: none; border-radius: 50%; width: 18px; height: 18px; font-size: 12px; cursor: pointer; }
    
    .progress-bar { position: absolute; bottom: 0; left: 0; height: 4px; background: rgba(0,0,0,0.1); transition: width 0.3s; }
    
    #gallery img { width: 100%; border-radius: 12px; display: block; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    .card-container { perspective: 1000px; min-height: 400px; position: relative; margin-top: 10px; }
    .card-inner { position: relative; width: 100%; transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); transform-style: preserve-3d; }
    .card-flipped { transform: rotateY(180deg); }
    .card-front, .card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 12px; overflow: hidden; }
    .card-back { transform: rotateY(180deg); position: relative; z-index: 2; }
    .placeholder-card { height: 400px; background: linear-gradient(135deg, #ffe135 0%, #ffb700 100%); display: flex; align-items: center; justify-content: center; font-size: 80px; color: white; border: 4px solid white; box-sizing: border-box; }
  </style>
</head>
<body>
  <header><h1>🍌 nano banana</h1></header>
  <main>
    <!-- 卡片展示区 -->
    <section id="resultsSection" style="display: none;">
      <div class="card">
        <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
           <button class="btn secondary" id="clear">✨ 重新祈愿</button>
           <a id="download" class="btn secondary" style="display:none" download="banana-card.png">⬇️ 保存卡片</a>
        </div>
        <div class="card-container">
          <div id="flip-inner" class="card-inner">
            <div class="card-front">
              <div class="placeholder-card">❓</div>
            </div>
            <div class="card-back" id="gallery"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 输入区 -->
    <section>
      <div class="card">
        <label>🎯 抽卡许愿</label>
        <textarea id="prompt" placeholder="描述你想要抽到的卡片...&#10;例如：赛博朋克风格的香蕉猫，电影光影，8k分辨率"></textarea>
        <div id="thumbs" class="thumbs"></div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
          <label style="cursor: pointer; color: var(--accent); margin: 0; font-size: 13px;">
             📎 添加参考图 <input id="file" type="file" accept="image/*" multiple hidden>
          </label>
          <span id="fileCount" style="font-size: 12px; color: var(--text-secondary);"></span>
        </div>
        <button class="btn" id="submit" style="margin-top: 15px;">
          <span id="status">开始抽卡</span>
          <div id="progress" class="progress-bar" style="width: 0%;"></div>
        </button>
      </div>
    </section>
  </main>

<script>
;(function() {
  const el = id => document.getElementById(id);
  const imgs = [];
  let currentImageUrl = null;

  const toast = (msg, isErr) => {
    el('status').textContent = msg;
    el('status').style.color = isErr ? 'var(--err)' : '';
  };

  // 图片预览逻辑
  el('file').onchange = e => {
    Array.from(e.target.files).forEach(file => {
      if (imgs.length >= 8) return;
      const reader = new FileReader();
      reader.onload = r => {
        imgs.push(r.target.result);
        renderThumbs();
      };
      reader.readAsDataURL(file);
    });
  };

  function renderThumbs() {
    el('thumbs').innerHTML = imgs.map((src, i) => \`
      <div class="thumb-item">
        <img src="\${src}">
        <button class="thumb-del" onclick="window.delImg(\${i})">×</button>
      </div>
    \`).join('');
    el('fileCount').textContent = imgs.length ? \`\${imgs.length}/8\` : '';
  }
  window.delImg = i => { imgs.splice(i, 1); renderThumbs(); };

  // 提交生成请求
  el('submit').onclick = async () => {
    const prompt = el('prompt').value.trim();
    if (!prompt) return toast('请写下你的愿望...', true);
    
    // UI 状态初始化
    el('submit').disabled = true;
    el('resultsSection').style.display = 'block';
    el('flip-inner').classList.remove('card-flipped');
    el('download').style.display = 'none';
    toast('正在祈愿...');
    
    let progress = 0;
    const timer = setInterval(() => {
      progress = Math.min(progress + 2, 98);
      el('progress').style.width = progress + '%';
    }, 150);

    try {
      // 调用你的 Hono 后端 API
      const response = await fetch('/api/v1/image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          prompt: prompt,
          // 如果后端将来需要支持多图，可以在这里传 imgs
        })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.details || '召唤失败');
      }

      // 处理二进制流
      const blob = await response.blob();
      if (currentImageUrl) URL.revokeObjectURL(currentImageUrl); // 释放内存
      currentImageUrl = URL.createObjectURL(blob);

      // 加载图片并展示
      const img = new Image();
      img.src = currentImageUrl;
      img.onload = () => {
        el('gallery').innerHTML = '';
        el('gallery').appendChild(img);
        el('download').href = currentImageUrl;
        el('download').style.display = 'flex';
        
        clearInterval(timer);
        el('progress').style.width = '100%';
        el('flip-inner').classList.add('card-flipped');
        toast('抽卡成功！');
      };

    } catch (err) {
      clearInterval(timer);
      toast(err.message, true);
      el('progress').style.width = '0%';
    } finally {
      el('submit').disabled = false;
    }
  };

  el('clear').onclick = () => {
    el('resultsSection').style.display = 'none';
    el('flip-inner').classList.remove('card-flipped');
    el('gallery').innerHTML = '';
    el('prompt').value = '';
    toast('准备抽卡');
  };
})();
</script>
</body>
</html>
`;
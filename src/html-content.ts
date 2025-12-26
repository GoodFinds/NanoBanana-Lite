export const htmlContent = `
<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>🍌 nano banana</title>
  <link rel="stylesheet" href="/styles.css">
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
        <button class="btn primary" id="submit" style="margin-top: 16px; position: relative; overflow: hidden;">
          <span id="status">准备抽卡</span>
          <div id="progress" class="progress-bar" style="width: 0%;"></div>
        </button>
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
              <input id="endpoint" type="url" value="/api/v1/image" placeholder="API端点">
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
;(function() {
  function initDragAndDrop() {
    var promptEl = el('prompt');
    var dragOverlay = el('dragOverlay');
    
    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      document.addEventListener(eventName, preventDefaults, false);
      document.body.addEventListener(eventName, preventDefaults, false);
    });
    
    ['dragenter', 'dragover'].forEach(eventName => {
      document.addEventListener(eventName, highlight, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
      document.addEventListener(eventName, unhighlight, false);
    });
    
    document.addEventListener('drop', handleDrop, false);
    
    function highlight() {
      dragOverlay.style.display = 'flex';
    }
    
    function unhighlight() {
      dragOverlay.style.display = 'none';
    }
    
    function handleDrop(e) {
      var dt = e.dataTransfer;
      var files = dt.files;
      handleFiles(files);
    }
  }
  
  initDragAndDrop();
  
  // ====== DOM 元素获取 ======
  function el(id){ return document.getElementById(id) }
  var submitBtn = el('submit');
  var promptEl = el('prompt');
  var statusEl = el('status');
  var progressEl = el('progress');
  var galleryEl = el('gallery');
  var thumbsEl = el('thumbs');
  var fileEl = el('file');
  var fileCountEl = el('fileCount');
  var clearBtn = el('clear');
  var downloadBtn = el('download');
  var saveKeyBtn = el('saveKey');
  var userKeyEl = el('userKey');
  var useMineEl = el('useMine');
  var modelEl = el('model');
  var endpointEl = el('endpoint');
  var imgs = [];

  function toast(msg, bad){ 
    statusEl.textContent = msg; 
    statusEl.style.color = bad ? 'var(--err)' : ''; 
      setTimeout(function() {
        progressEl.style.width = '0%';
      }, 2000);
      submitBtn.disabled = false;    })
    .catch(function(error) {
      clearInterval(progressInterval);
      console.error('Error:', error);
      toast('生成失败，请重试', true);
      submitBtn.disabled = false;
      cardComponents.flipContainer.remove();
    });
  };

  clearBtn.onclick = function() {
    galleryEl.innerHTML = '';
    el('resultsSection').style.display = 'none';
    downloadBtn.style.display = 'none';
  };

  fileEl.onchange = function(e) { handleFiles(e.target.files); };

  function handleFiles(files) {
    if (files.length + imgs.length > 8) {
      toast('最多只能上传8张图片', true);
      return;
    }
    Array.from(files).forEach(function(file) {
      if (file.type.startsWith('image/')) {
        var reader = new FileReader();
        reader.onload = function(e) {
          imgs.push(e.target.result);
          updateThumbs();
          updateFileCount();
        };
        reader.readAsDataURL(file);
      }
    });
  }

  function updateThumbs() {
    thumbsEl.innerHTML = '';
    imgs.forEach(function(src, i) {
      var div = document.createElement('div');
      div.style.cssText = 'position: relative; display: inline-block; margin: 0 4px 4px 0;';
      var imgEl = document.createElement('img');
      imgEl.src = src;
      imgEl.style.cssText = 'width: 40px; height: 40px; object-fit: cover; border-radius: 4px; border: 1px solid var(--border);';
      var x = document.createElement('button');
      x.textContent = '×';
      x.style.cssText = 'position: absolute; top: -6px; right: -6px; width: 16px; height: 16px; border-radius: 50%; border: none; background: var(--error); color: white; font-size: 10px; cursor: pointer; display: flex; align-items: center; justify-content: center;';
      x.onclick = function() {
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

  updateFileCount();
  showEmptyState();
})();
</script>
</body>
</html>
`;

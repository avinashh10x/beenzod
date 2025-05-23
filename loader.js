function createLoader(options = {}) {
    const {
      type = 'circle',    // 'circle' | 'bar'
      color = '#3498db',  // default blue
      size = 40,          // in px
      time = null         // in milliseconds (auto remove time)
    } = options;
  
    // Remove old loader
    const oldLoader = document.getElementById('beenzod-loader');
    if (oldLoader) oldLoader.remove();
  
    const loader = document.createElement('div');
    loader.id = 'beenzod-loader';
  
    // Apply dynamic styles
    if (type === 'circle') {
      loader.style.width = `${size}px`;
      loader.style.height = `${size}px`;
      loader.style.border = `${size / 10}px solid ${color}33`;
      loader.style.borderTop = `${size / 10}px solid ${color}`;
      loader.style.borderRadius = '50%';
      loader.style.animation = 'beenzod-spin 1s linear infinite';
    } else if (type === 'bar') {
      loader.style.width = `${size * 2}px`;
      loader.style.height = `${size / 5}px`;
      loader.style.background = color;
      loader.style.animation = 'beenzod-loadbar 1s ease-in-out infinite';
    }
  
    loader.style.position = 'fixed';
    loader.style.top = '50%';
    loader.style.left = '50%';
    loader.style.transform = 'translate(-50%, -50%)';
    loader.style.zIndex = '9999';
  
    document.body.appendChild(loader);
  
    // Inject CSS animations
    if (!document.getElementById('beenzod-style')) {
      const style = document.createElement('style');
      style.id = 'beenzod-style';
      style.innerHTML = `
        @keyframes beenzod-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
  
        @keyframes beenzod-loadbar {
          0%, 100% { transform: scaleX(0.2); opacity: 0.2; }
          50% { transform: scaleX(1); opacity: 1; }
        }
      `;
      document.head.appendChild(style);
    }
  
    // If time is passed, auto remove
    if (time && typeof time === 'number') {
      setTimeout(() => {
        removeLoader();
      }, time);
    }
  }
  
  function removeLoader() {
    const loader = document.getElementById('beenzod-loader');
    if (loader) loader.remove();
  }
  
  module.exports = {
    createLoader,
    removeLoader
  };
  
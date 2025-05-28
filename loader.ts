type LoaderType = 'circle' | 'bar' | 'dots' | 'pulse' | 'ring';

type LoaderOptions = {
  type?: LoaderType;
  color?: string;
  size?: number;
  time?: number | null;
};

function createLoader(options: LoaderOptions = {}): void {
  const {
    type = 'circle',
    color = '#3498db',
    size = 40,
    time = null,
  } = options;

  const oldLoader = document.getElementById('beenzod-loader');
  if (oldLoader) oldLoader.remove();

  const loader = document.createElement('div');
  loader.id = 'beenzod-loader';

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
  } else if (type === 'dots') {
    loader.innerHTML = `
      <span class="beenzod-dot"></span>
      <span class="beenzod-dot"></span>
      <span class="beenzod-dot"></span>
    `;
    loader.className = 'beenzod-dots-wrapper';
  } else if (type === 'pulse') {
    loader.className = 'beenzod-pulse';
    loader.style.backgroundColor = color;
    loader.style.width = `${size}px`;
    loader.style.height = `${size}px`;
  } else if (type === 'ring') {
    loader.className = 'beenzod-ring';
    loader.style.border = `${size / 10}px solid ${color}33`;
    loader.style.borderTop = `${size / 10}px solid ${color}`;
    loader.style.borderRadius = '50%';
    loader.style.width = `${size}px`;
    loader.style.height = `${size}px`;
  }

  loader.style.position = 'fixed';
  loader.style.top = '50%';
  loader.style.left = '50%';
  loader.style.transform = 'translate(-50%, -50%)';
  loader.style.zIndex = '9999';

  document.body.appendChild(loader);

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

      .beenzod-dots-wrapper {
        display: flex;
        gap: 8px;
      }
      .beenzod-dot {
        width: 10px;
        height: 10px;
        background: ${color};
        border-radius: 50%;
        animation: beenzod-bounce 0.6s infinite alternate;
      }
      .beenzod-dot:nth-child(2) {
        animation-delay: 0.2s;
      }
      .beenzod-dot:nth-child(3) {
        animation-delay: 0.4s;
      }
      @keyframes beenzod-bounce {
        from { transform: translateY(0); opacity: 0.4; }
        to { transform: translateY(-10px); opacity: 1; }
      }

      .beenzod-pulse {
        border-radius: 50%;
        animation: beenzod-pulse 1.2s infinite ease-in-out;
      }
      @keyframes beenzod-pulse {
        0%, 100% { transform: scale(1); opacity: 0.7; }
        50% { transform: scale(1.2); opacity: 1; }
      }

      .beenzod-ring {
        animation: beenzod-spin 1s linear infinite;
      }
    `;
    document.head.appendChild(style);
  }

  if (typeof time === 'number') {
    setTimeout(() => {
      removeLoader();
    }, time);
  }
}

function removeLoader(): void {
  const loader = document.getElementById('beenzod-loader');
  if (loader) loader.remove();
}

export { createLoader, removeLoader };


import './index.scss';

export const displayTimer = callback =>
  setInterval(() => {
    document.body.innerHTML = `Now: ${new Date().toLocaleString()}`;
    callback();
  }, 1000);

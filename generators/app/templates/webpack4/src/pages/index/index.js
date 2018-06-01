import './index.scss';

const displayTimer = callback =>
  setInterval(() => {
    document.body.innerHTML = `Now: ${new Date().toLocaleString()}`;
    callback && callback();
  }, 1000);

displayTimer();

export { displayTimer };

import './about.scss';

const displayTimer = callback =>
  setInterval(() => {
    document.body.innerHTML = `Now: ${new Date().toLocaleString()}`;
    callback();
  }, 1000);

displayTimer();

export { displayTimer };

import './index.scss';

const displayTime = setInterval(() => {
  document.body.innerHTML = `Now: ${new Date().toLocaleString()}`
}, 1000)
import './index.scss'

(() => {
  setInterval(() => {
    document.body.innerHTML = `Now: ${new Date().toLocaleString()}`
  }, 1000)
})()
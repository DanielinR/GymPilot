
setDocHeight();
window.addEventListener('resize', setDocHeight)
window.addEventListener('orientationchange', setDocHeight)

function setDocHeight() {
document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);
};
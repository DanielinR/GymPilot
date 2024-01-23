
export function initScreenSize() {
    setScreenSize()
    window.addEventListener('resize', setScreenSize)
    window.addEventListener('orientationchange', setScreenSize)
}

function setScreenSize() {
document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);
};

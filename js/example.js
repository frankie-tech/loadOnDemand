const scriptOptions = {
    src: './js/addTextToTarget.js',
    onload: () => addTextToTarget(),
    onerror: () => window.alert("PANIC"),
}

window.addEventListener('load', () => loadOnDemand(scriptOptions));

const hover = document.getElementById('onhover');
const click = document.getElementById('onclick');

const hoverOptions = {
    src: './js/changeBackground.js'
};

const clickOptions = {
    src: './js/alertCompliment.js'
};

hover.addEventListener('mouseover', () => loadOnDemand(hoverOptions));

click.addEventListener('click', () => loadOnDemand(clickOptions));
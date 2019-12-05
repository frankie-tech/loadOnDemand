function addTextToTarget() {
    return document.getElementById('target').appendChild(document.createTextNode('The addTextToTarget.js script was loaded successfully'));
}

addTextToTarget();
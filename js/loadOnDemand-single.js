
/**
 * Loads scripts on demand by taking advantage of promises
 * @param {object} options 
 * @param {function} resolve 
 * @param {function} reject 
 */

function loadOnDemand(options, resolve, reject) {
    return new Promise(() => createScript(options))
        .then(resolve)
        .catch(reject);
}

/**
 * 
 * @param {object} attr 
 */
function createScript(attr) {
    const tag = document.createElement('script');

    Object.assign(
        tag,
        extend(attr)
    );

    return document.head.appendChild(tag);
}

function extend(attr) {
    const defaults = {
        src: '',
        onload: () => console.log('Success'),
        onerror: () => console.error('Review code: There has been an error'),
    }

    return Object.assign(defaults, attr);
}



loadOnDemand({ src: './js/addTextToTarget.js' }, () => console.log('Success'), () => console.error('There has been an error'));
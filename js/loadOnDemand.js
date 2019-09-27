/*
function loadOnDemand(options) {
    return new Promise(() => createScript(options))
        .then(resolve)
        .catch(reject);
}

function createScript(attr) {
    const tag = document.createElement('script');
    Object.assign(tag, attr);
    return document.head.appendChild(tag);
}

const defaults = {
    dev: true,
    script: '',
    link: '',
    get resolve() {
        console.log('Success');
    },
    get reject() {
        console.error('Review code: there has been an error');
    }
}

function load(options) {
    const pub = {};
    const priv = {};

    priv.createEl = (tag)=> document.createElement(tag);

}
*/

class Load {
    constructor() {

    }

    static el(tag) {
        return document.createElement(el);
    }

    static append(parent, el) {
        return parent.appendChild(el);
    }


}


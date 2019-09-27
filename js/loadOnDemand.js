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
        this.head = document.head;
        this.body = document.body;
    }
    /* shorthand methods */
    static elCreate(tag) {
        return (document.createElement(tag), {
            attrs: (attr = {}) => Object.assign(el, attr)
        });
    }

    static append(parent, el) {
        return parent.appendChild(el);
    }

    static attr(el, obj) {
        return Object.assign(el, obj);
    }

    static extend(defaults, obj) {
        for (const i in obj) {
            if (obj.hasOwnProperty(i)) {
                defaults[i] = obj[i]
            }
        }
        return defaults;
    }

    /* Designed to build a script or link tag */
    buildEl(tag, attributes = {}) {
        return this.extend(this.elCreate(tag), attributes);
    }

    /*
    * Adds eventListener to a target
    * goal is to give a callback that will
    * then load the script after a specific
    * event is fired
    */
    static addEvent(cb, target = document, event = 'click') {
        return target.addEventListener(event, cb);
    }

    didThatJustWork() {
        this.buildEl('script', {});
    }
}

const loadthis = new Load();

/* logs this.elCreate is not a function */
loadthis.didThatJustWork();

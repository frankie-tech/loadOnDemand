class Load {
    constructor(el, config) {
        this.head = document.head;
        this.body = document.body;
        if (config !== undefined) {
            this.el = el;
            this.config = config;
            this.target = config.target;
            this.event = config.event !== undefined ? config.event : false;;
        }
        this.domEl = this.buildEl(this.el, this.config);
        this.append(document.querySelector('head'), this.el, this.config);
    }
    /* shorthand methods */
    elCreate(tag) {
        return document.createElement(tag);
    }

    append(parent, el, config) {
        const domEl = this.buildEl(el, config);
        if (this.event) {
            const { func, event, options = {} } = this.event;
            if (func !== undefined) {
                this.addEvent(func, domEl, event, options)
            }
        }
        return parent.appendChild(domEl);
    }

    extend(defaults, obj) {
        for (const i in obj) {
            if (obj.hasOwnProperty(i)) {
                defaults[i] = obj[i]
            }
        }
        return defaults;
    }

    /* Designed to build a script or link tag */
    buildEl(el, config) {
        return this.extend(this.elCreate(el), config);
    }

    /*
    * Adds eventListener to a target
    * goal is to give a callback that will
    * then load the script after a specific
    * event is fired
    */
    addEvent(cb, target = document.currentScript, event = 'load', options = {}) {
        return target.addEventListener(event, cb, options);
    }
}

const load = new Load('script', { src: './js/addTextToTarget.js', id: 'itWorked', target: 'head', event: { event: 'load', func: log } });
function log() {
    console.log('loaded');
}
/* logs this.elCreate is not a function */
load.addEvent(log, document.getElementById('onhover'), 'click');
//load.addEvent(() => console.log('loaded'), document.querySelector('#onhover'), 'hover');
//document.head.appendChild(script);


//const loadEl = new Load({ src: './js/changeBackground.js', id: 'backgroundChanged', target: 'body' });
//loadEl.addEvent(() => console.log('loaded'), this.el, 'hover');
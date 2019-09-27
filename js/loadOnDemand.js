function loadScriptOnDemand(attributes, resolve, reject) {
    return new Promise(function (resolve, reject) {
        var scriptTag = document.createElement('script');
        Object.assign(scriptTag, attributes);
        document.head.appendChild(scriptTag);
    })
        .then(resolve)
        .catch(reject);
}
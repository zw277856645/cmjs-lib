window.$docsify = window.$docsify || {};
window.$docsify.markdown = window.$docsify.markdown || {};
window.$docsify.markdown.renderer = window.$docsify.markdown.renderer || {};

window.$docsify.markdown.renderer.code = (function (codeFn) {
    let id = 0;

    return function (code, lang) {
        if (/angular/i.test(lang)) {
            if (!('StackBlitzSDK' in window)) {
                throw Error('Please introduce the stackblitz SDK script');
            }

            id++;

            let idStr = `demo-box-angular-${id}`;

            StackBlitzSDK.embedProject(
                idStr,
                {
                    files: {
                        'main.ts': code,
                        'index.html': html
                    },
                    template: 'angular-cli',
                    dependencies: {
                        moment: '*'
                    }
                },
                {
                    height: 320
                }
            );

            return `<div id="${idStr}"></div>`
        } else {
            if (codeFn) {
                return codeFn.apply(this, arguments);
            } else {
                return this.origin.code.apply(this, arguments);
            }
        }
    };
})(window.$docsify.markdown.renderer.code);

// https://stackblitz.com/docs
// https://github.com/njleonzhang/docsify-demo-box-vue/blob/master/src/plugin/index.js

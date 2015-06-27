import _ from 'lodash';

export default function moduleHelper(moduleName, { fn, data: { module } }) {
    var context = this;

    var moduleInstance = _.find(module._modules, instance => _.eq(instance.type, moduleName));

    if (!moduleInstance) {
        throw new TypeError(`Module ${moduleName} are not child`);
    }

    var html = moduleInstance.render();

    if (fn) {
        html = fn(html);
    }

    return html;
}

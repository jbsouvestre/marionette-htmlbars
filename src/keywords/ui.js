import $ from 'jquery';

export default {
    render (node, env, scope, params, hash) {
        let view = env.view;
        let uiKey = params[0];
        let ui = view.ui || (view.ui = {});

        ui[uiKey] = $(node.element);
    }
};
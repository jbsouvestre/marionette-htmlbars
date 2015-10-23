import { bind } from 'underscore';

function getHandlerMethod(handlerName, context){
    return context[handlerName];
}

export default {
    render (node, env, scope, params, hash){
        let view = env.view;
        let eventName = params[0];
        let handlerName = params[1];

        let method = getHandlerMethod(handlerName, view);

        view.delegate(eventName, node.element, bind(method, view));
    }
};
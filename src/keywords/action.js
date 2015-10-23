import { bind } from 'underscore';
import $ from 'jquery';

const DELEGATE_NS = '.delegateEvents';

function getHandlerMethod(handlerName, context){
    return context[handlerName];
}

export default {
    render (node, env, scope, params, hash){
        let view = env.view;
        let eventName = params[0];
        let handlerName = params[1];

        let method = getHandlerMethod(handlerName, view);
        let cid = view.cid;

        $(node.element).on(`${eventName}${DELEGATE_NS}${cid}`, bind(method, view));
    }
};
import HTMLBars from '../node_modules/htmlbarsify/node_modules/htmlbars/dist/cjs/htmlbars.js';
import assign from 'object-assign';
import ENV from './env';

const HTMLBarsNodePrivate = Symbol('__HTMLBarsNode');

function render(template, data, context){
    let node = context[HTMLBarsNodePrivate];

    let env = assign({view: context}, ENV);
    
    if(node) {
        node.rerender(env, data);
        return false;
    } else {
        let tpl = HTMLBars.compile(template);
        
        tpl.meta = context;

        node = tpl.render(data, env);
        context[HTMLBarsNodePrivate] = node;        
        return node.fragment;
    }
}

export default render;
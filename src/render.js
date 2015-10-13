import HTMLBars from '../node_modules/htmlbarsify/node_modules/htmlbars/dist/cjs/htmlbars.js';

import ENV from './env';

const HTMLBarsNodePrivate = Symbol('__HTMLBarsNode');

function render(template, data, context){
    let node = context[HTMLBarsNodePrivate];

    if(node) {
        node.rerender(ENV, data);
        return false;
    } else {
        let tpl = HTMLBars.compile(template);
        
        tpl.meta = context;

        node = tpl.render(data, ENV);
        context[HTMLBarsNodePrivate] = node;        
        return node.fragment;
    }
}

export default render;
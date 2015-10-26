import { compile } from '../node_modules/htmlbars/dist/cjs/htmlbars';
import assign from 'object-assign';
import ENV from './env';


const HTMLBarsNodePrivate = '__HTMLBarsNode';

function render(template, data, context){
    let node = context[HTMLBarsNodePrivate];

    let env = assign({view: context}, ENV);
    
    if(node) {
        node.rerender(env, data);
        return false;
    } else {
        let tpl = compile(template);
        node = tpl.render(data, env);
        context[HTMLBarsNodePrivate] = node;        
        return node.fragment;
    }
}

export default render;
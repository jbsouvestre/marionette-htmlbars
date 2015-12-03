import { compile } from '../node_modules/htmlbars/dist/cjs/htmlbars';
import assign from 'object-assign';
import { getNode, setNode } from './utils/get-set-node';
import ENV from './env';

function render(template, data, context){

    let env = assign({view: context}, ENV);
    
    if(context.isRendered){
        getNode(context).rerender(env, data);
    } else {
        let compiled = compile(template);
        let node = compiled.render(data, env);

        setNode(context, node);
        
        return node.fragment;
    }
}

export default render;
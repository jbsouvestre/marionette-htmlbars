import { keyword } from '../../node_modules/htmlbarsify/node_modules/htmlbars/dist/cjs/htmlbars-runtime/hooks';

function closureAction(...args){
    args.forEach((el, i) => console.log(el, i));
}

export default function(morph, env, scope, params, hash, template, inverse, visitor){
    return closureAction(morph, env, scope, params, hash, template, inverse, visitor);
}
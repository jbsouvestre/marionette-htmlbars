import shouldDisplay from '../utils/should-display';

function ifHelper(params, hash, options){
    return ifUnless(params, hash, options, shouldDisplay(params[0]));
}

function unlessHelper(params, hash, options){
    return ifUnless(params, hash, options, !shouldDisplay(params[0]));
}


function ifUnless(params, hash, options, truthy){
    if(truthy){
        if(options.template.yield){
            options.template.yield();
        } else {
            return params[1];
        }
    } else {
        if(options.inverse.yield){
            options.inverse.yield();
        } else {
            return params[2];
        }
    }
}

export {
    ifHelper,
    unlessHelper
};
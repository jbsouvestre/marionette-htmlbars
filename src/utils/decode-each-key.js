import { uniqueId, isString, isNumber } from 'underscore';
import get from '../utils/get';

function identity(item){
    let key;

    if( isString(item) || isNumber(item) ){
        key = item;
    } else {
        key = uniqueId();
    }

    return key;
}

export default function decodeEachKey(item, keyPath, index) {
    var key;
    switch(keyPath) {
        case '@index': 
            key = index;
            break;
        case '@identity': 
            key = identity(item);
            break;
        default: 
            if(keyPath){
                key = get(item, keyPath);
            } else {
                key = identity(item);
            }

            break;
    }
    if(typeof key === 'number'){
        key = ''+key;
    }
    return key;
}
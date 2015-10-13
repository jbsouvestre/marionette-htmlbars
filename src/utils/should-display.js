import { isArray, isBoolean } from 'underscore';

export default function shouldDisplay(predicate){

    if( isBoolean(predicate) ) { 
        return predicate;
    }

    if( isArray(predicate) ){
        return predicate.length !== 0;
    } else {
        return !!predicate;
    }
}
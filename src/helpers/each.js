import _ from 'underscore';
import decodeEachKey from '../utils/decode-each-key';
import shouldDisplay from '../utils/should-display';

export default function eachHelper(params, hash, blocks){
    var list = params[0];
    var keypath = hash.key;

    if(shouldDisplay(list)){
        _.forEach(list, (item, i) => {
            var key = decodeEachKey(item, keypath, i);
            blocks.template.yieldItem(key, [item, i]);
        });
    } else if(blocks.inverse.yield) {
        blocks.inverse.yield();
    }
}
import shouldDisplay from '../utils/should-display';

export default function eachInHealper([ object ], hash, blocks) {
    let objKeys, prop, i;
    objKeys = object ? Object.keys(object) : [];

    if(shouldDisplay(objKeys)) {
        for(i = 0; i < objKeys.length; i++){
            prop = objKeys[i];
            blocks.template.yieldItem(prop, [prop, object[prop]]);
        }        
    } else if (blocks.inverse.yield) {
        blocks.inverse.yield();
    }
}
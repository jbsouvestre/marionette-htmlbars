import eachHelper from './each';
import { ifHelper, unlessHelper } from './if-unless';
import logHelper from './log';
import eachInHelper from './each-in';

let keywords = {
    if: ifHelper,
    unless: unlessHelper,
    each: eachHelper,
    log: logHelper,
    'each-in': eachInHelper
};

export function registerKeyworkd(name, keyword) {
    keywords[name] = keyword;
}

export default keywords;
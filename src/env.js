import { extend } from 'jquery';
import DOMHelper from '../node_modules/htmlbarsify/node_modules/htmlbars/dist/cjs/dom-helper.js';
import hooks from '../node_modules/htmlbarsify/node_modules/htmlbars/dist/cjs/htmlbars-runtime/hooks.js';
import keywords from './keywords';

import helpers from './helpers/helpers';

var marionetteHooks = extend({}, hooks);

extend(marionetteHooks.keywords, keywords );
//marionetteHooks.keywords = keywords;

console.log(marionetteHooks);

export default {
    dom: new DOMHelper.default(),

    hooks: marionetteHooks,

    helpers
};
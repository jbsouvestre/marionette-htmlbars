import { extend } from 'jquery';
import DOMHelper from '../node_modules/htmlbars/dist/cjs/dom-helper';
import hooks from '../node_modules/htmlbars/dist/cjs/htmlbars-runtime/hooks';
import keywords from './keywords';

import helpers from './helpers/helpers';

var marionetteHooks = extend({}, hooks);

extend(marionetteHooks.keywords, keywords );

export default {
    dom: new DOMHelper(),

    hooks: marionetteHooks,

    helpers
};
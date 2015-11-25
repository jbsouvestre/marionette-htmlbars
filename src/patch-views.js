import extend from 'underscore';

import { ItemView } from 'backbone.marionette';

import { ItemViewProtoProps } from './views/views';

export default function patchViews () {
    extend(ItemView.prototype, ItemViewProtoProps);
}
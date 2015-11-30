// Selectively import patched view, implementing marionette's api
//import { ItemView } from 'marionette-htmlbars';

// Pathes all Marionette Views
// ```require('marionette-htmlbars')();```

import { Renderer } from 'backbone.marionette';

import render from './render';
import { ItemView, LayoutView, CollectionView } from './views/views';
import patchViewsRenderers from './patch-views';

Renderer.render = render;

export default patchViewsRenderers;
export {
	ItemView, LayoutView, CollectionView
};
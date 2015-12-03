import assign from 'object-assign';
import Marionette from 'backbone.marionette';

import HTMLBarsViews from './views/views';

export default function patchViews () {
    Object.keys(HTMLBarsViews).forEach( 
        viewKey => assign(Marionette[viewKey].prototype, HTMLBarsViews[viewKey].prototype)
    );
}
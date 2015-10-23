import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';
import Marionette, { Application } from 'backbone.marionette';
import AppTemplate from 'raw!./templates/app.hbs';

import { ItemView, ItemViewCollection,  LayoutView, ActionView } from './demo/demo';

let App = new Application();

let Layout = Marionette.LayoutView.extend({
    el: '#app',
    template: AppTemplate,
    regions: {
        itemView:                   '#item-view',
        itemViewCollection:         '#item-view-collection',
        layoutView:                 '#layout-view',
        actionView:                 '#action-view'
    },
    onRender() {
        this.itemView.show(new ItemView());
        this.itemViewCollection.show( new ItemViewCollection() );
        this.layoutView.show( new LayoutView() );
        this.actionView.show( new ActionView() );
    }
});

let layout = new Layout();

App.on('start', () => {
    layout.render();
});

$(()=> {
    App.start();
});

// @DEBUG
window.Marionette = Marionette;
window.$ = $;
window.Backbone = Backbone;
window._ = _;

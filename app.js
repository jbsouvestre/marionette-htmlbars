import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';
import Marionette, { Application, Renderer } from 'backbone.marionette';

import render from './src/render';
import './src/compat';

import { ItemView, ItemViewCollection } from './demo/demo';

Renderer.render = render;


let App = new Application({
    regions: {
        itemView:                   '#item-view',
        itemViewCollection:         '#item-view-collection'
    }
});

App.on('start', () => {
    App.itemView.show(new ItemView());
    App.itemViewCollection.show( new ItemViewCollection() );
});


$(()=> {
    App.start();
});

// @DEBUG
window.Marionette = Marionette;
window.$ = $;
window.Backbone = Backbone;
window._ = _;

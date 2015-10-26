import { LayoutView, Renderer } from 'backbone.marionette';
import render from './render';

Renderer.render = render;

export default LayoutView.extend({
    attachElContent(node) {
        if(node) {
            this.$el.html(node);
            return this;
        }
        return false;
    }
});
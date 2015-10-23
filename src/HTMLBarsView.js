import Marionette, { LayoutView, Renderer } from 'backbone.marionette';
import render from './render';

Renderer.render = render;

const HTMLBarsView = LayoutView.extend({
	attachElContent(node) {
		if(node){
			this.$el.html(node);
			return this;
		}
		return false;
	}
});

export default HTMLBarsView;

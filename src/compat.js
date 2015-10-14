import { extend } from 'underscore';
import { ItemView } from 'backbone.marionette';

extend(ItemView.prototype, {
    attachElContent(node) {
        if(node){
            this.$el.html(node);
            return this;
        } else {
            return false;
        }
    }
});

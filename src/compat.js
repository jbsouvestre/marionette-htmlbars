import { ItemView } from 'backbone.marionette';

ItemView.prototype.attachElContent = function(node){
    if(node){
        this.$el.html(node);
        return this;
    } else {
        return false;
    }
};
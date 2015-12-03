export default {
    attachElContent(node) {
        // is the view is already rendered
        if(this.isRendered){
            return;
        }
        this.$el.html(node);
    }
};
export default {
    attachElContent(node) {
        if(node) {
            this.$el.html(node);
            return this;
        }
        return false;
    }
};
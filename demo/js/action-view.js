import { ItemView } from 'marionette-htmlbars';
import ActionViewTemplate from 'raw!../templates/action-view.hbs';

export default ItemView.extend({
    template: ActionViewTemplate,
    message: 'Hello world',
    saySomething() {
        alert(this.message);
    },
    setProgress() {
        let random = Math.ceil( Math.random() * 100 );
        this.ui.progressBar.attr('style', `width: ${random}%`);
    }
});
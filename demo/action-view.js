import HTMLBarsView from '../src/HTMLBarsView';
import ActionViewTemplate from 'raw!../templates/action-view.hbs';

export default HTMLBarsView.extend({
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
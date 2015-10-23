import HTMLBarsView from '../src/HTMLBarsView';
import ActionViewTemplate from 'raw!../templates/action-view.hbs';

export default HTMLBarsView.extend({
    template: ActionViewTemplate,
    message: 'Hello world',
    saySomething() {
        alert(this.message);
    }
});
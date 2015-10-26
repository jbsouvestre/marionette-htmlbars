import { Model } from 'backbone';
import HTMLBarsView from 'htmlbars-view';

let time = 0;

let model = new Model({ time: time });

setInterval(updateTime, 1000);

function updateTime(){
    model.set('time', time++);
}

export default HTMLBarsView.extend({
    model,
    template: require('raw!../templates/item-view.hbs'),
    modelEvents: {
        change: 'render'
    }
});
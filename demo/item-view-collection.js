import { uniqueId } from 'underscore';
import { Collection } from 'backbone';
import { ItemView } from 'backbone.marionette';

let models = [
    {name: 'Write code'},
    {name: 'Remove code'},
    {name: 'rm -rf /*'}
];

let collection = new Collection(
    models
);

export default ItemView.extend({
    collection,
    collectionEvents: {
        'add': 'render',
        'remove': 'render'
    },
    events: {
        'click .add': 'onClickAdd',
        'click .remove': 'onClickRemove'
    },
    onClickAdd() {
        this.collection.add({name: 'Task ' + uniqueId()});
    },
    onClickRemove() {
        this.collection.remove( this.collection.first() );
    },
    template: require('raw!../templates/item-view-collection.hbs')
});
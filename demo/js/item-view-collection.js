import { uniqueId } from 'underscore';
import { Collection } from 'backbone';
import { ItemView } from 'marionette-htmlbars';

let models = [
    {name: 'Write code'},
    {name: 'Lorem Ipsum'},
    {name: 'Remove code'},
    {name: 'rm -rf /*'}
];

let collection = new Collection(
    models
);

export default ItemView.extend({
    collection,
    initialize() {
        setInterval(this.shuffleCollection.bind(this), 1000);
    },
    collectionEvents: {
        'add': 'render',
        'remove': 'render',
        'sort': 'render'
    },
    events: {
        'click .add': 'onClickAdd',
        'click .remove': 'onClickRemove',
        'click .reorder': 'onClickReorder'
    },
    onClickAdd() {
        this.collection.add({name: 'Task ' + uniqueId()});
    },
    onClickRemove() {
        this.collection.remove( this.collection.first() );
    },
    onClickReorder() {
        this.shuffleCollection();
    },
    shuffleCollection() {
        this.collection.reset( this.collection.shuffle() , { silent: true });
        this.collection.trigger('sort');
    },
    template: require('raw!../templates/item-view-collection.hbs')
});
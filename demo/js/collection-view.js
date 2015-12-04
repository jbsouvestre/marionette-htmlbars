import { times, uniqueId } from 'underscore';
import { CollectionView, ItemView } from 'marionette-htmlbars';
import { Collection } from 'backbone';

import CollectionViewItemTemplate from 'raw!../templates/collection-view-item.hbs';


let items = [];

times(15,  i => {
    items.push({
        id: uniqueId(),
        value: Math.random() * 100 * i 
    });
});

let collection = new Collection(items);

let ChildView = ItemView.extend({
    template: CollectionViewItemTemplate
});

export default CollectionView.extend({
    initialize() {
        setInterval(this.pop.bind(this), 1000);
    },
    childView: ChildView,
    collection: collection,
    pop() {
        this.collection.unshift( this.collection.pop() );
    }
});
import { CollectionView, ItemView } from 'marionette-htmlbars';
import { Collection } from 'backbone';

import CollectionViewItemTemplate from 'raw!../templates/collection-view-item.hbs';

let books = new Collection([
    {title: 'Le compte de Monte-Cristo', author: 'Alexandre Dumas'},
    {title: 'To kill a mockingbird', author: 'Harper Lee'}
]);


let BookView = ItemView.extend({
    template: CollectionViewItemTemplate
});

export default CollectionView.extend({
    childView: BookView,
    collection: books
});
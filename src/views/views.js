import {
    ItemView as MnItemView,
    LayoutView as MnLayoutView,
    CollectionView as MnCollectionView
} from 'backbone.marionette';

import ItemView from './item-view';
import LayoutView from './layout-view';
import CollectionView from './collection-view';

export default {
    ItemView: MnItemView.extend(ItemView),
    CollectionView: MnCollectionView.extend(CollectionView),
    LayoutView: MnLayoutView.extend(LayoutView)

};
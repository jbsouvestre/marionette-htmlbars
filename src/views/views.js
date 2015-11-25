import {
    ItemView as MnItemView,
    LayoutView as MnLayoutView
} from 'backbone.marionette';

import ItemView from './item-view';
import LayoutView from './layout-view';

console.log(ItemView);

export default { 
    ItemView: MnItemView.extend(ItemView) ,
    LayoutView: MnLayoutView.extend(LayoutView) 
};
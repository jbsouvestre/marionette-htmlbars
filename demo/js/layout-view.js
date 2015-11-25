import { LayoutView, ItemView } from 'marionette-htmlbars';

import LayoutViewTemplate from 'raw!../templates/layout-view.hbs';
import LayoutViewChildViewTemplate from 'raw!../templates/layout-view-child-view.hbs';

let SubRegionOne = ItemView.extend({
    template: LayoutViewChildViewTemplate,
    className: 'well'
});

const REGION_NAME = 'childRegion';

export default LayoutView.extend({
    template: LayoutViewTemplate,
    onRender() {
        if(this.getRegion(REGION_NAME)){
            this.showChildView(REGION_NAME, new SubRegionOne());
        }
    }
});
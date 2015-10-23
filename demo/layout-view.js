import HTMLBarsView from '../src/HTMLBarsView';

import LayoutViewTemplate from 'raw!../templates/layout-view.hbs';
import LayoutViewChildViewTemplate from 'raw!../templates/layout-view-child-view.hbs';

let SubRegionOne = HTMLBarsView.extend({
    template: LayoutViewChildViewTemplate
});

const REGION_NAME = 'childRegion';

export default HTMLBarsView.extend({
    template: LayoutViewTemplate,
    onRender() {
        this.showChildView(REGION_NAME, new SubRegionOne());
    }
});
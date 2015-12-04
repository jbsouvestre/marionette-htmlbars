import { getNode } from '../utils/get-set-node';

export default {
    // borrowed from the marionette codebase
    _insertBefore(childView, index) {
        var currentView;
        var findPosition = this.getOption('sort') && (index < this.children.length - 1);
        if (findPosition) {
          // Find the view after this one
            currentView = this.children.find(function(view) {
                return view._index === index + 1;
            });
        }

        if (currentView) {
            let childNode = getNode( childView );
            let parentElement = this.$el.get(0);

            console.info('insertAdjacentHTML', childNode.fragment);

            //parentNode.insertAdjacentHTML('beforebegin', childNode.fragment);
            parentElement.insertBefore(childNode.fragment, parentElement.firstChild);
            console.log(childNode);
            debugger;
            return true;
        }

        return false;
    },
    _insertAfter(childView) {
        let childNode = getNode( childView );
        let parentNode = getNode( this );

        parentNode.fragment.appendchild( childNode.fragment );
    }
};
function getNode(view) {
    if( view.node ){
        return view.node;
    }

    if( view.$el ){
        return view.$el.get(0);
    }
}


function setNode(view, node){
    view.node = node;
}

export {
    getNode, setNode
};
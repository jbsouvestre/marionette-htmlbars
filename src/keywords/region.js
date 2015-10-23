import $ from 'jquery';
/**
 *
 * <section id="myRegion" {{region}}></div>
 */

function getRegionName(hash){
    return hash.name;
}

export default {
    willRender(){
    },
    setupState(state, env, scope, params, hash){
    },
    render (node, env, scope, params, hash) {
        let view = env.view; 

        let regionName = getRegionName(hash);

        view.addRegion(regionName, { 
            selector: $(node.element)
        });
    }
}
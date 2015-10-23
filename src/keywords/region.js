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
        console.info('--------RENDER-------');
            
        let view = env.view; 

        let regionName = getRegionName(hash);

        view.addRegion(regionName, { 
            selector: $(node.element)
        });

        console.log({node, env, scope, params, hash});
        console.info('--------END RENDER-------');
    }
}
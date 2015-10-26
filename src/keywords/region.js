import $ from 'jquery';
/**
 *
 * <section id="myRegion" {{region}}></div>
 */

function getRegionName(hash){
    return hash.name;
}

console.log('REGION');

export default {
    render (node, env, scope, params, hash) {
        console.info('[RENDER]', arguments);
        let view = env.view; 

        let regionName = getRegionName(hash);

        view.addRegion(regionName, { 
            selector: $(node.element)
        });
    }
};
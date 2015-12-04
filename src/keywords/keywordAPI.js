/**
 * This is the barebones of the HTMLBars keyword API
 * Just here for future reference
 * This is pulles from the LIFECYCLE.md file located in htmlbars repository
 * https://github.com/tildeio/htmlbars/blob/master/LIFECYCLE.md
 * 
 * For any given render, a keywork can end up in of of these states
 *
 * * intial
 * * stable
 * * unstable
 * * prune
 * * paused
 */
export default {
    willRender(node, env){
        // This function is always invoked before any other hooks,
        // giving the keyword an opportunity to coordinate with
        // the external environment regardless of whether this is
        // the first or subsequent render, and regardless of
        // stability.
    },

    setupState(state, env, scope, params, hash) {
        // This function is invoked before `isStable` so that it can update any
        // internal state based on external changes.
    },

    isEmpty(state, env, scope, params, hash) {
        // If `isStable` returns false, or this is the first render,
        // this function can return true to indicate that the morph
        // should be empty (and `render` should not be called).
    },

    isPaused(state, env, scope, params, hash){
        // This function is invoked on renders after the first render; if
        // it returns true, the entire subtree is assumed valid, and dirty
        // checking does not continue. This is useful during animations,
        // and in some cases, as a performance optimization.
    },

    isStable(lastState, nextState){
        // This function is invoked after the first render; it checks to see
        // whether the node is "stable". If the node is unstable, its
        // existing content will be removed and the `render` function is
        // called again to produce new values.
    },

    rerender(morph, env, scope, params, hash, template, inverse, visitor){
        // This function is invoked if the `isStable` check returns true.
        // Occasionally, you may have a bit of work to do when a node is
        // stable even though you aren't tearing it down.
    },

    render: function(node, env, scope, params, hash, template, inverse, visitor) {
        // This function is invoked on the first render, and any time the
        // isStable function returns false.
    }
};
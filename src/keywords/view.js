/**
 *
 * The `{{view}}` helper allows add immutable childViews to a layoutview 
 *
 * ## Syntax
 *
 * ```html
 *     {{view "item-list"}}
 * ```
 *
 * ```
 *     MyLayoutView = HTMLBarsView.extend({
 *         childViews: {
 *             itemList: MyItemListConstructor
 *         }
 *     })
 * ```
 */
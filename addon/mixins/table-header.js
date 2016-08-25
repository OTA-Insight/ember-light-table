import Ember from 'ember';
import callAction from 'ember-light-table/utils/call-action';

const {
  computed
} = Ember;

/**
 * @module Light Table
 */

/**
 * @class TableHeaderMixin
 * @extends Ember.Mixin
 * @private
 */

export default Ember.Mixin.create({
  /**
   * @property table
   * @type {Table}
   * @private
   */
  table: null,

  /**
   * @property sharedOptions
   * @type {Object}
   * @private
   */
  sharedOptions: null,

  /**
   * @property tableActions
   * @type {Object}
   */
  tableActions: null,

  /**
   * @property fixed
   * @type {Boolean}
   * @default false
   */
  fixed: false,

  /**
   * @property sortOnClick
   * @type {Boolean}
   * @default false
   */
  sortOnClick: false,

  /**
   * @property multiColumnSort
   * @type {Boolean}
   * @default false
   */
  //multiColumnSort: false,

  /**
   * @property iconAscending
   * @type {String}
   * @default ''
   */
  //iconAscending: '',

  /**
   * @property iconDescending
   * @type {String}
   * @default ''
   */
  //iconDescending: '',

  /**
   * ID of main table component. Used to generate divs for ember-wormhole
   * @type {String}
   */
  tableId: null,

  columnGroups: computed.readOnly('table.visibleColumnGroups'),

  actions: {
    /**
     * onColumnClick action. Handles column sorting.
     *
     * @event onColumnClick
     * @param  {Column}   column The column that was clicked
     * @param  {Event}   event   The click event
     */
    onColumnClick(column) {
      callAction(this, 'onColumnClick', ...arguments);
    },

    /**
     * onColumnDoubleClick action.
     *
     * @event onColumnDoubleClick
     * @param  {Column}   column The column that was clicked
     * @param  {Event}   event   The click event
     */
    onColumnDoubleClick(/* column */) {
      callAction(this, 'onColumnDoubleClick', ...arguments);
    },

    /**
     * onColumnResized action.
     *
     * @method onColumnResized
     * @param  {Column}   column The column that was resized
     * @param  {String}   width  The final width of the column
     */
    onColumnResized(/* column, width */) {
      callAction(this, 'onColumnResized', ...arguments);
    }
  }
});

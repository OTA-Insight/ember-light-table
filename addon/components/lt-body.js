import Ember from 'ember';
import layout from 'ember-light-table/templates/components/lt-body';
import callAction from 'ember-light-table/utils/call-action';

const {
  Component,
  computed,
  run
} = Ember;

/**
 * @module Light Table
 */

/**
 * ```hbs
 * {{#light-table table as |t|}}
 *   {{#t.body multiSelect=true onRowClick=(action 'rowClicked')}}
 *     {{#body.expanded-row as |row|}}
 *       Hello <b>{{row.firstName}}</b>
 *     {{/body.expanded-row}}
 *
 *     {{#if isLoading}}
 *       {{#body.loader}}
 *         Loading...
 *       {{/body.loader}}
 *     {{/if}}
 *
 *     {{#if table.isEmpty}}
 *       {{#body.no-data}}
 *         No users found.
 *       {{/body.no-data}}
 *     {{/if}}
 *   {{/t.body}}
 * {{/light-table}}
 * ```
 *
 * @class t.body
 */

export default Component.extend({
  layout,
  classNames: ['lt-body-wrap'],
  classNameBindings: ['canSelect', 'multiSelect', 'canExpand'],

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
   * Allows a user to select a row on click. All this will do is apply the necessary
   * CSS classes and add the row to `table.selectedRows`. If `multiSelect` is disabled
   * only one row will be selected at a time.
   *
   * @property canSelect
   * @type {Boolean}
   * @default true
   */
  canSelect: true,

  /**
   * Allows for expanding row. This will create a new row under the row that was
   * clicked with the template provided by `body.expanded-row`.
   *
   * ```hbs
   * {{#body.expanded-row as |row|}}
   *  This is the content of the expanded row for {{row.firstName}}
   * {{/body.expanded-row}}
   * ```
   *
   * @property canExpand
   * @type {Boolean}
   * @default false
   */
  canExpand: false,

  /**
   * Allows a user to select multiple rows with the `ctrl`, `cmd`, and `shift` keys.
   * These rows can be easily accessed via `table.get('selectedRows')`
   *
   * @property multiSelect
   * @type {Boolean}
   * @default false
   */
  multiSelect: false,

  /**
   * Hide scrollbar when not scrolling
   *
   * @property autoHideScrollbar
   * @type {Boolean}
   * @default true
   */
  autoHideScrollbar: true,

  /**
   * Allows multiple rows to be expanded at once
   *
   * @property multiRowExpansion
   * @type {Boolean}
   * @default true
   */
  multiRowExpansion: true,

  /**
   * Expand a row on click
   *
   * @property expandOnClick
   * @type {Boolean}
   * @default true
   */
  expandOnClick: true,

  /**
   * If true, the body block will yield columns and rows, allowing you
   * to define your own table body
   *
   * @property overwrite
   * @type {Boolean}
   * @default false
   */
  overwrite: false,

  /**
   * ID of main table component. Used to generate divs for ember-wormhole
   *
   * @property tableId
   * @type {String}
   * @private
   */
  tableId: null,

  /**
   * @property scrollBuffer
   * @type {Number}
   * @default 500
   */
  scrollBuffer: 500,

  /**
   * @property useVirtualScrollbar
   * @type {Boolean}
   * @default false
   * @private
   */
  useVirtualScrollbar: false,

  rows: computed.readOnly('table.visibleRows'),
  columns: computed.readOnly('table.visibleColumns'),
  colspan: computed.readOnly('columns.length'),

  actions: {
    /**
     * onRowClick action.
     * @event onRowClick
     * @param  {Row}   row The row that was clicked
     * @param  {Event}   event   The click event
     */
    onRowClick(row, e) {
      callAction(this, 'onRowClick', ...arguments);
    },

    /**
     * onRowDoubleClick action.
     * @event onRowDoubleClick
     * @param  {Row}   row The row that was clicked
     * @param  {Event}   event   The click event
     */
    onRowDoubleClick(/* row */) {
      callAction(this, 'onRowDoubleClick', ...arguments);
    }
  }
});

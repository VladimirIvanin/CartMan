/* global $ */

var getDataAttrName = require('./help').getDataAttrName;
var system = require('../variables').system;

function deleteItems(options, cart) {
  var item_delete = getDataAttrName(system.selectors.item_delete);
  var item = getDataAttrName(system.selectors.item);

  if (!$(item_delete).length) {
    return false;
  }

  var $button = cart.action.button;
  var $cartItem = $button.parents(item + ':first');

  $cartItem.addClass(system.classes.removed);

  if (options.hideCartItems) {
    $cartItem
      .slideUp(300, function () {
        $(this).remove();
      });
  }

}

module.exports = deleteItems;

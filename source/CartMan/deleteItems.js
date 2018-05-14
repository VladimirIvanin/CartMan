/* global $ */

var getDataAttrName = require('./help').getDataAttrName;
var system = require('../variables').system;

function deleteItems(options, cart) {
  var item_delete = getDataAttrName(system.selectors.item_delete);
  var item = getDataAttrName(system.selectors.item);

  if (!$(item_delete).length) {
    return false;
  }

  var ignoreItems = [];
  $.each(Cart.order.order_lines, function(index, el) {
    ignoreItems.push(getDataAttrName(system.selectors.item, el.id))
  });

  var $cartItem = $(item).not(ignoreItems.join(','));

  $cartItem.addClass(system.classes.removed);

  if (options.hideCartItems) {
    $cartItem
      .slideUp(300, function () {
        $(this).remove();
      });
  }

}

module.exports = deleteItems;

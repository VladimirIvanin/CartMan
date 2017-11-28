/* global $ */

var getDataAttrName = require('./help').getDataAttrName;
var system = require('../variables').system;

/**
 * Обновление блока с купоном
 * @param  {Boolean} cart_is_init корзина обновлена, можно обновлять блок скидок
 */
function updateDiscounts(cart_is_init) {
  var discounts = getDataAttrName(system.selectors.discounts);
  var isUpdate = $(discounts).length && cart_is_init;

  if (!isUpdate) {
    return false;
  }

  $.ajax({
    url: '/cart_items',
    dataType: 'html',
  })
  .done(function(_dom) {
    var _discounts = $(_dom).find(discounts).html();
    $(discounts).html(_discounts);
  })
};

module.exports = updateDiscounts;

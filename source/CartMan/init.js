/* global $, EventBus */

var updateClasses = require('./updateClasses');
var updateDiscounts = require('./discounts');
var deleteItems = require('./deleteItems');
var updateData = require('./updateData');

function init() {
  var self = this;
  var options = self.options;

  EventBus.subscribe('delete_items:insales:cart', function (cart) {

    // Скрыть item
    deleteItems(options, cart);

    // колбек
    options.deleteItems(cart);

  });

  EventBus.subscribe('update_items:insales:cart', function (cart) {

    // Обновление цен и счетчиков
    updateData(options, cart);

    // Обновление блока с купоном
    updateDiscounts(self.state.cart_is_init);

    updateClasses(cart);

    options.updateItems(cart);

    self.state.cart_is_init = true;
  });
}

module.exports = init;

/* global $, EventBus */

var defaults = require('../variables').defaults;
var init = require('./init');

var CartMan = function (options) {
  var self = this;
  self.state = {
    cart_is_init: false
  }

  self.options = $.extend(true, {}, defaults, options);

  self.init = init;

  if (!EventBus) {
    console.warn('Не подключен common.js');
  }else{
    self.init();
  }
};

CartMan.getInstance = function (options) {
  if (this.instance == null) {
    this.instance = new CartMan(options);
  }else{
    console.warn('CartMan уже объявлен, оставьте один "new CartMan"');
  }
  return this.instance;
}

module.exports = function (options) {
  return CartMan.getInstance(options);
};

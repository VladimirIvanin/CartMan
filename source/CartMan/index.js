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

  return self;
};

module.exports = CartMan;

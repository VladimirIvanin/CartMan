/* global $, Shop */

var getDataAttrName = require('./help').getDataAttrName;
var system = require('../variables').system;

function updateClasses(cart) {
  $.each(system.selectors, function(index, el) {
    var $el = $(getDataAttrName(el));

    if (cart.order_lines.length == 0) {
      $el.addClass(system.classes.empty);
    }else{
      $el.removeClass(system.classes.empty);
    }
  });
}

module.exports = updateClasses;

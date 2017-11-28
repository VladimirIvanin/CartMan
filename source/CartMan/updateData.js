/* global $, Shop */

var getDataAttrName = require('./help').getDataAttrName;
var declinationText = require('./help').declinationText;
var getTemplate = require('./help').getTemplate;
var system = require('../variables').system;

function updateData(options, cart) {

  updateCounts(options, cart);

  updateItemTotal(cart.order_lines);

  updateTotalPrice(cart.total_price, cart.items_price);

}

// Обновление счетчиков
function updateCounts(options, cart) {
  var $items_count = $(getDataAttrName(system.selectors.items_count));
  var $positions_count = $(getDataAttrName(system.selectors.positions_count));
  var $items_count_words = $(getDataAttrName(system.selectors.items_count_words));
  var $positions_count_words = $(getDataAttrName(system.selectors.positions_count_words));

  // текст с кол-вом товаров
  var _items_words = (cart.order_lines.length == 0) ? options.counterItemsTextEmpty : options.counterItemsText;
  var _counterTemplate = (cart.order_lines.length == 0) ? options.counterTemplateEmpty : options.counterTemplate;
  var items_count_text = getTemplate(_items_words,
    [{
      reg: /%c%/g,
      data: cart.items_count
    },
    {
      reg: /%w%/g,
      data: declinationText(cart.items_count, options.declination)
    }]
  );

  var counterTemplateText = getTemplate(_counterTemplate,
    [{
      reg: /%c%/g,
      data: cart.items_count
    }]
  );

  $items_count.html(counterTemplateText);
  $items_count_words.html(items_count_text);

  // текст с кол-вом позиций
  var _positions_words = (cart.order_lines.length == 0) ? options.counterPositionTextEmpty : options.counterPositionText;
  var _positionsTemplate = (cart.order_lines.length == 0) ? options.positionsTemplateEmpty : options.positionsTemplate;
  var positions_count_text = getTemplate(_positions_words,
    [{
      reg: /%c%/g,
      data: cart.positions_count
    },
    {
      reg: /%w%/g,
      data: declinationText(cart.positions_count, options.declination)
    }]
  );
  var positionsTemplateText = getTemplate(_positionsTemplate,
    [{
      reg: /%c%/g,
      data: cart.positions_count
    }]
  );

  $positions_count.html(positionsTemplateText);
  $positions_count_words.html(positions_count_text);

}

// Обновление итоговой суммы
function updateTotalPrice(_totalPrice, _items_price) {
  var $total_price = $(getDataAttrName(system.selectors.total_price));
  var $items_price = $(getDataAttrName(system.selectors.items_price));

  $total_price.html( Shop.money.format( _totalPrice ) );
  $items_price.html( Shop.money.format( _items_price ) );
}

// Обновление цен у позиций корзины
function updateItemTotal(order_lines) {
  var itemClass = system.item_class;
  _.forEach(order_lines, function (item) {
    var $item = $('[data-item-id="'+item.variant_id+'"]');
    $item.each(function(index, el) {
      $(el).find(getDataAttrName(system.selectors.item_total_price)).html( Shop.money.format( item.total_price ) );
      $(el).find(getDataAttrName(system.selectors.item_count)).html( item.quantity );

      if (item.quantity == 1) {
        $(el).addClass(itemClass.one);
        $(el).removeClass(itemClass.moreOne).removeClass(itemClass.moreNine);
      } else if (item.quantity > 1 && item.quantity < 10) {
        $(el).addClass(itemClass.moreOne);
        $(el).removeClass(itemClass.one).removeClass(itemClass.moreNine);
      } else {
        $(el).addClass(itemClass.moreNine);
        $(el).removeClass(itemClass.one).removeClass(itemClass.moreOne);
      }
    });
  });
}

module.exports = updateData;

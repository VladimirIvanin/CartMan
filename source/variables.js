var defaults = {
  declination: ['товар', 'товара', 'товаров'],
  hideCartItems: true,
  counterTemplate: '(%c%)', // regexp %c% (%c% - counter)
  counterTemplateEmpty: null, // regexp %c%
  positionsTemplate: '(%c%)', // regexp %c% (%c% - counter)
  positionsTemplateEmpty: null, // regexp %c%
  counterItemsText: 'В вашей корзине %c%&nbsp;%w%', // regexp %c%,%w% (%c% - counter, %w% - word)
  counterItemsTextEmpty: 'В вашей корзине %c%&nbsp;%w%', // regexp %c%,%w% (%c% - counter, %w% - word)
  counterPositionText: 'В вашей корзине %c%&nbsp;%w%', // regexp %c%,%w% (%c% - counter, %w% - word)
  counterPositionTextEmpty: 'В вашей корзине %c%&nbsp;%w%', // regexp %c%,%w% (%c% - counter, %w% - word)
  updateItems: function () {},
  deleteItems: function () {}
};

var system = {
  selectors: {
    quantity: 'cartman-quantity',
    item: 'item-id',
    item_delete: 'item-delete',
    item_total_price: 'cartman-item-total-price',
    item_count: 'cartman-item-count',
    items_price: 'cartman-items-price',
    total_price: 'cartman-total-price',
    items_count: 'cartman-items-count',
    positions_count: 'cartman-positions-count',
    items_count_words: 'cartman-items-text',
    positions_count_words: 'cartman-positions-text',
    discounts: 'cartman-discounts'
  },
  classes: {
    init: 'is-cart-init',
    removed: 'is-removed',
    empty: 'is-cart-empty'
  },
  item_class: {
    one: 'is-one',
    moreOne: 'more-than-one',
    moreNine: 'more-than-nine'
  }
};

module.exports = {
  'defaults': defaults,
  'system': system
}

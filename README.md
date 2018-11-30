# CartMan

## init

```js
var mainCart = new CartMan({
  declination: ['товар', 'товара', 'товаров'],
  hideCartItems: true,
  counterTemplate: '(%c%)', // Шаблон счетчика. regexp %c% (%c% - counter)
  counterTemplateEmpty: null, // regexp %c%
  positionsTemplate: '(%c%)', // regexp %c% (%c% - counter)
  positionsTemplateEmpty: null, // regexp %c%
  counterItemsText: 'В вашей корзине %c%&nbsp;%w%', // regexp %c%,%w% (%c% - counter, %w% - word)
  counterItemsTextEmpty: 'В вашей корзине %c%&nbsp;%w%', // regexp %c%,%w% (%c% - counter, %w% - word)
  counterPositionText: 'В вашей корзине %c%&nbsp;%w%', // regexp %c%,%w% (%c% - counter, %w% - word)
  counterPositionTextEmpty: 'В вашей корзине %c%&nbsp;%w%', // regexp %c%,%w% (%c% - counter, %w% - word)
  updateItems: function (cart) {
    console.log('Корзина: ', cart);
  },
  deleteItems: function (cart) {
    console.log('Корзина: ', cart);
  }
});
```

## Селекторы

`data-cartman-items-count` - счетчик кол-ва товаров

`data-cartman-items-price` - Сумма с учетом скидки без учета доставки

`data-cartman-total-price` - Сумма с учетом скидки и с учетом доставки

`data-cartman-item-total-price` - сумма позиции товара (Обязательно должно быть внутри data-item-id)

`data-cartman-item-count` - счетчик позиции

`data-cartman-items-text` - текстовый блок счетчика кол-ва товаров

`data-cartman-positions-count` - счетчик кол-ва позиций

`data-cartman-positions-text` - текстовый блок счетчика кол-ва позиций

`data-cartman-discounts` - список скидок

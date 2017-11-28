# CartMan

## init

```js
var mainCart = new CartMan({
  updateItems: function (cart) {
    console.log('Корзина: ', cart);
  }
});
```

## Настройки

```js
{
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
}
```

## Селекторы

`data-item-total-price` - общая сумма товаров позиции

`data-item-count` - счетчик позиции

`data-items-price` - Сумма с учетом скидки без учета доставки

`data-total-price` - Сумма с учетом скидки и с учетом доставки

`data-items-count` - счетчик кол-ва товаров

`data-items-text` - текстовый блок счетчика кол-ва товаров

`data-positions-count` - счетчик кол-ва позиций

`data-positions-text` - текстовый блок счетчика кол-ва позиций

`data-discounts` - список скидок

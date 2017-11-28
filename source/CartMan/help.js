/* global $ */

// Получить селектор data атрибута
function getDataAttrName(name, value) {
  var resultName = (value) ? name + '="'+value+'"' : name;

  return '[data-' + resultName + ']';
}

// Склонение слова товар
var declinationText = function (day, titles) {
  var _titles = ['товар', 'товара', 'товаров'];
  if (titles) {
    _titles = titles;
  }
  var cases = [2, 0, 1, 1, 1, 2];
  return _titles[ (day % 100 > 4 && day % 100 < 20) ? 2 : cases[(day % 10 < 5) ? day % 10 : 5]];
};

// замена символов
/**
  getTemplate('В вашей корзине %c% %w%', [{
      reg: /%c%/g,
      data: 2
    },
    {
      reg: /%w%/g,
      data: 'товара'
    }])
 */
function getTemplate(template, data) {
  if (!template || typeof template != 'string') {
    template = '';
  }

  $.each(data, function(index, el) {
    template = template.replace(el.reg, el.data);
  });

  return template;
}

module.exports = {
  getDataAttrName: getDataAttrName,
  getTemplate: getTemplate,
  declinationText: declinationText
};

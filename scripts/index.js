'use strict';
/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems(items => {
    items.forEach(item => store.addItem(item));
    shoppingList.render();
  });
});

store.items.push(Item.create('apples'));

// api.getItems(items => {
//   const item = items[0];

//   api.updateItem(item.id, { name: 'foobar' }, () => {
//     console.log('updated!');
//   });
// });

// const item = store.items[0];
// console.log('current name: ' + item.name);
// store.findAndUpdate(item.id, { name: 'foobar' });
// console.log('new name: ' + item.name);

// api.createItem('pears', (newItem) => {
//   api.getItems((items) => {
//     console.log(items);
//   });
// });

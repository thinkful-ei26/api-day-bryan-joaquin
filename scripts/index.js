/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
});

store.items.push(Item.create('apples'));

api.getItems((items) => {
  const item = items[0];

  api.updateItem(item.id, { name: 'foobar' }, () => {
    console.log('updated!');
  });
});

// api.createItem('pears', (newItem) => {
//   api.getItems((items) => {
//     console.log(items);
//   });
// });

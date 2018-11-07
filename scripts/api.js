/*eslint-env jquery*/
// eslint-disable-next-line no-unused-vars
'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/joaquin';

  const getItems = function(callback) {
    $.getJSON(BASE_URL + '/items', callback);
    const item = store.items[0];
    
    // console.log('current name: ' + item.name);
    // store.findAndUpdate(item.id, { name: 'foobar' });
    // console.log('new name: ' + item.name);
  };

  const createItem = function(name, callback) {
    const newItem = JSON.stringify({
      name
    });

    const settings = {
      url: BASE_URL + '/items/',
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback
    };

    $.ajax(settings);
  };

  const updateItem = function(id, updateData, callback) {
    const updateSettings = {
      url: BASE_URL + '/items/' + id,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback
    };
    $.ajax(updateSettings);
  };

  return {
    getItems,
    createItem,
    updateItem
  };
})();

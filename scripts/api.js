/*eslint-env jquery*/
// eslint-disable-next-line no-unused-vars
'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/joaquin';
  const getItems = function(callback) {
    // $.getJSON(BASE_URL + '/items', callback);
    // callback('api module works');
  };

  const createItem = function(name, callback) {
    const newItem = {
      name
    };

    const stringNewItem = JSON.stringify(newItem);

    $.ajax({
      url: { BASE_URL } / items,
      method: 'POST',
      contentType:'application/json',
      data: 'stringNewItem',
      success: (response) =>{
        callback(response);
        console.log('this is the .ajax call');
      }
    });
  };
  return {
    getItems,
    createItem
  };
})();

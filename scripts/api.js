// eslint-disable-next-line no-unused-vars
'use strict';

const api = function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/joaquin';
  const getItems = function(callback) {
    callback('api module works');
  };
  return {
    getItems
  }

}();
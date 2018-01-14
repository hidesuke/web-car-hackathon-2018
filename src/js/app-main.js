const $ = require('jquery');
const sample = require('./plugins/sample');

$('#action-button').on('click', (e) => {
  const input = {};
  $('#output').append(`<p>${sample.action().text}</p>`);
});
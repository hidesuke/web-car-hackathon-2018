const $ = require('jquery');
const sample = require('./plugins/sample');

$('#action-button').on('click', (e) => {
  const input = {};
  sample.action()
    .then(res => {
      $('#output').append(`<p>${res.text}</p>`);
    });
});
const $ = require('jquery');

const plugins = [require('./plugins/sample')];

const dispatch = (input) => {
  Promise.all(plugins.map(x => x.action(input)))
    .then(aggregate)
    .then(render);
};

const aggregate = (candidates) => {
  return candidates[0]
};

const render = (output) => {
  $('#output').append(`<p>${output.text}</p>`);
};

$('#action-button').on('click', (e) => {
  const input = {};
  dispatch(input);
});
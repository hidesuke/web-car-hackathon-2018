const $ = require('jquery');

const config = require('../config');
const plugins = [require('./plugins/sample')];

const emotion = {};

$(() => {
  const vias = new VISClient(config.vehicle);
  vias.connect()
    .then(() => {
      console.log('connected');
      return vias.get('Signal');
    })
    .then(signal => {
      console.log(signal);
      dispatch(signal);
    })
    .catch(err => {
      console.log(err);
    });
});

const dispatch = (input) => {
  Promise.all(plugins.map(x => x.action(input)))
    .then(aggregate)
    .then(render);
};

const calcTotalWeight = (candidates) => {
  return candidates
    .map(c => parseFloat(c.weight))
    .sort()
    .reduce((accumulator, curr, idx, arr) => { return accumulator + curr.weight });
};

const resolveCandidate = (candidates, random) => {
  let cummulative = 0.0;
  for (const c of candidates) {
    const weight = parseFloat(c.weight);
    if (weight > 0.0) {
      cummulative += weight;
      if (cummulative >= random) return c;
    }
  }
  return candidates[candidates.length - 1];
}

const aggregate = (candidates) => {
  // 重み付き乱択アルゴリズムで返答を決定する
  const total = calcTotalWeight(candidates);
  const random = Math.random() * total;
  return resolveCandidate(candidates, random);
};

// Animate Character using createjs
const onAction = (value) => {
  exportRoot.chara.gotoAndPlay(value);
};

const render = (output) => {
  const actions = ['normal', 'smile', 'angry', 'sad', 'surprise'];
  $('#output').append(`<p>${output.text}</p>`);
  onAction(actions[Math.floor(Math.random() * actions.length)]);
};

$('#action-button').on('click', (e) => {
  const input = {};
  dispatch(input);
});
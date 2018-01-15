const $ = require('jquery');

const plugins = [require('./plugins/sample')];

const dispatch = (input) => {
  Promise.all(plugins.map(x => x.action(input)))
    .then(aggregate)
    .then(render);
};

const calcTotalWeight = (candidates) => {
  return candidates
    .map(c => parseFloat(c.weight))
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

const render = (output) => {
  $('#output').append(`<p>${output.text}</p>`);
};

$('#action-button').on('click', (e) => {
  const input = {};
  dispatch(input);
});
const sample = {};

sample.action = (input) => {
  return fetch('http://zipcloud.ibsnet.co.jp/api/search?zipcode=2410821', {mode: 'cors'})
    .then(res => res.json())
    .then(json => {
      return JSON.stringify(json.results);
    })
    .then(str => {
      return { text: str };
    });
};

module.exports = sample;
const sample = {};

sample.action = (vias, callback) => {
  vias.subscribe(VEHICLE_SPEED, onSuccess(callback), onError);
};

const onSuccess = callback => {
  return speed => {
    // なんかしょり
    console.log(`speed from sample: ${speed}`)
    callback({ text: `時速 ${speed / 1000.0} キロ！ 良いスピードだ！` });
  }
};

const onError = err => {
  console.log(err);
}

module.exports = sample;
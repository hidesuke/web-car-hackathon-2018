const sample = {};

sample.action = (vias, callback) => {
  vias.subscribe('Signal.Drivetrain.Transmission.Speed', onSuccess(callback), onError);
};

const onSuccess = callback => {
  return speed => {
    // なんかしょり
    console.log(`speed from sample: ${speed}`)
    callback({ text: `${speed}か良いスピードだ！` });
  }
};

const onError = err => {
  console.log(err);
}

module.exports = sample;
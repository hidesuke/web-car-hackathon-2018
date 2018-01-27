const plugin = {};

plugin.semaphore = false;

plugin.action = (vias, callback) => {
  vias.subscribe(VEHICLE_SPEED, onSuccess(callback), onError);
};

const outputs = [
  {
    text: `突然ですが、クルマのモノマネをします。「ブルンブルンブルルン」。にてるでしょ？`,
    kuma: 'smile',
    speech: {
      text: `突然ですが、クルマのモノマネをします。「ブルンブルンブルルン」。にてるでしょ？`,
      volume: 1.0,
      speed: 0.7,
      pitch: 1.0,
      range: 2.0,
      joy: 1.0,
      sadness: 0.0,
      anger: 0.0
    }
  },
  {
    text: `赤信号で止まったつもりかもしれないけど……エンジントラブルだったりして？？`,
    kuma: 'sad2',
    speech: {
      text: `赤信号で止まったつもりかもしれないけど……エンジントラブルだったりして？？？`,
      volume: 1.0,
      speed: 0.7,
      pitch: 0.5,
      range: 2.0,
      joy: 0.0,
      sadness: 1.0,
      anger: 0.0
    }
  }
];

const onSuccess = cb => {
  return speed => {
    plugin.prevSpeed = Math.floor(speed / 1000.00);
    const currSpeed = Math.floor(speed / 1000.00);
    console.log(`prev; ${plugin.prevSpeed}, curr: ${currSpeed}`);
    if (currSpeed === 0 && !plugin.semaphore) {
      plugin.semaphore = true;
      cb(outputs[Math.floor(Math.random() * outputs.length)]);
    } else {
      plugin.semaphore = false;
    }
  };
};

const onError = err => {
  console.log(err);
}

module.exports = plugin;
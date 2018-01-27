const TAG = '[FuelLevelWatcher]';
const plugin = {};

const THRESHOLDS = [
  { value: 50, text: '燃料が半分になったよ', emotion: 'normal', sadness: 0.5 },
  { value: 25, text: '燃料が四分の一になったよ', emotion: 'sad1', sadness: 0.75 },
  { value: 15, text: '燃料が残り15パーセントになったよ', emotion: 'sad1', sadness: 0.85 },
  { value: 10, text: '燃料が残り10パーセントになったよ', emotion: 'sad2', sadness: 0.9 },
  { value: 5, text: '燃料が残り5パーセントになったよ', emotion: 'sad2', sadness: 0.95 },
];

// 給油と判断する最低限のFuel Level増加量
const MIN_REFUEL_GAP = 10;

// 把握している現在のFuel Level
let lastFuelLevel = -100;

plugin.action = (vias, callback) => {
  vias.subscribe(FUEL_LEVEL, onFuelLevelChanged(callback), onError);
};

const onFuelLevelChanged = callback => {
  return value => {
    console.log(`${TAG} onFuelLevelChanged: ${lastFuelLevel} -> ${value}`);
    value = +value
    if (value < lastFuelLevel) {
      let data;
      THRESHOLDS.forEach(th => {
        if (value <= th.value && lastFuelLevel > th.value) {
          data = th;
        }
      });
      if (data) {
        callback(createOutput(value, data));
      }
      lastFuelLevel = value;
    } else if (value >= lastFuelLevel + MIN_REFUEL_GAP) {
      lastFuelLevel = value;
    }
  }
};

const onError = err => {
  console.log(err);
};

const createOutput = (value, data) => {
  return {
    text: data.text,
    kuma: data.emotion,
    speech: {
      text: data.text,
      sadness: data.sadness
    }
  }
};

module.exports = plugin;
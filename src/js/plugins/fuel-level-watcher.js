const TAG = '[FuelLevelWatcher]';
const plugin = {};

const THRESHOLDS = [
  { value: 50, text: '燃料が半分になったよ' },
  { value: 25, text: '燃料が四分の一になったよ' },
  { value: 15, text: '燃料が残り15パーセントになったよ' },
  { value: 10, text: '燃料が残り10パーセントになったよ' },
  { value: 5, text: '燃料が残り5パーセントになったよ' },
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
      let text;
      THRESHOLDS.forEach(th => {
        if (value <= th.value && lastFuelLevel > th.value) {
          text = th.text;
        }
      })
      if (text) {
        callback({ text: text });
      }
      lastFuelLevel = value;
    } else if (value >= lastFuelLevel + MIN_REFUEL_GAP) {
      lastFuelLevel = value;
    }
  }
};

const onError = err => {
  console.log(err);
}

module.exports = plugin;
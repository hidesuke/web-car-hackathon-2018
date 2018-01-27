const TAG = '[InteriorTemperature]';
const plugin = {};

const LOW_THRESHOLD = 15;
const HIGH_THRESHOLD = 25;
const LOW_TEXT = 'くまさんは大丈夫だけど寒くない？';
const HIGH_TEXT = '暑くない？くまさんは暑さが苦手なんです';

// 単一のモードがこれ以上の時間つづいたらOutputする
const OUTPUT_INIT_DELAY = 10000; // milliseconds

// 一度Outputした後、再びOutputするまでの時間
const OUTPUT_INTERVAL = 30000; // milliseconds

const TemperatureMode = {
  LOW: 'low',
  NORMAL: 'normal',
  HIGH: 'high',

  of: value => {
    if (value <= LOW_THRESHOLD) {
      return TemperatureMode.LOW;
    }
    if (value >= HIGH_THRESHOLD) {
      return TemperatureMode.HIGH;
    }
    return TemperatureMode.NORMAL;
  }
};

let currentMode = TemperatureMode.NORMAL;
let nextOutputTime;

plugin.action = (vias, callback) => {
  vias.subscribe(MESH_TEMPERATURE, onTemperatureChanged(callback), onError);
};

const onTemperatureChanged = callback => {
  return value => {
    console.log(`${TAG} onTemperatureChanged: value=${value}`);
    const mode = TemperatureMode.of(value);
    const currentTime = new Date().getTime();
    console.log(`${TAG} onTemperatureChanged: mode=${mode}, currentTime=${currentTime}`);
    if (mode === currentMode && nextOutputTime) {
      if (currentTime >= nextOutputTime) {
        const text = getText(mode);
        if (text) {
          callback({ 'text': text });
          nextOutputTime = currentTime + OUTPUT_INTERVAL;
        }
      }
    } else {
      currentMode = mode;
      nextOutputTime = currentTime + OUTPUT_INIT_DELAY;
    }
  }
};

const onError = err => {
  console.log(err);
};

const getText = mode => {
  if (mode === TemperatureMode.LOW) {
    return LOW_TEXT;
  }
  if (mode === TemperatureMode.HIGH) {
    return HIGH_TEXT;
  }
  return null;
};

module.exports = plugin;
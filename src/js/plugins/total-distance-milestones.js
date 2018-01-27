const TAG = '[TotalDistanceMilestones]';
const plugin = {};

let currentDistance = 0;

plugin.action = (vias, callback) => {
  vias.subscribe(DISTANCE_TOTAL, onTotalDistanceChanged(callback), onError);
};

const onTotalDistanceChanged = callback => {
  return value => {
    value = value / 1000; // meters -> kilometers
    console.log(`${TAG} onTotalDistanceChanged: ${currentDistance} -> ${value}`);
    if (currentDistance !== value) {
      currentDistance = value
      const text = detectSingleCharacters(value) ||
        detectIncrementalCharacters(value) ||
        detectDecrementalCharacters(value)
      if (text) {
        callback({ 'text': text, kuma: 'smile', speech: { 'text': text, joy: 1.0 } });
      }
    }
  }
};

const onError = err => {
  console.log(err);
};

// ゾロ目判定
const detectSingleCharacters = value => {
  const str = value.toString()
  if (str.length < 3) {
    return null;
  }

  const firstChar = str.charAt(0);
  for (let i = 1; i < str.length; i++) {
    if (str.charAt(i) !== firstChar) {
      return null;
    }
  }

  console.log(`${TAG} detectSingleCharacters: DETECTED`);
  return `キリ番ゲーット！走行距離が <say-as interpret-as="telephone">${value}</say-as> キロメートルになりました！ `;
};

// 階段 (増加方向) 判定
const detectIncrementalCharacters = value => {
  const str = value.toString();
  if (str.length < 3 || str.length > 9) {
    return null;
  }

  let char = str.charAt(0);
  for (let i = 1; i < str.length; i++) {
    if (str.charAt(i) != (+char + 1)) {
      return null;
    }
    char = str.charAt(i)
  }

  console.log(`${TAG} detectIncrementalCharacters: DETECTED`);
  return `走行距離が <say-as interpret-as="telephone">${value}</say-as> キロメートルになりました！`;
};

// 階段 (減少方向) 判定
const detectDecrementalCharacters = value => {
  const str = value.toString()
  if (str.length < 3 || str.length > 9) {
    return null;
  }

  let char = str.charAt(0);
  for (let i = 1; i < str.length; i++) {
    if (str.charAt(i) != (+char - 1)) {
      return null;
    }
    char = str.charAt(i)
  }

  console.log(`${TAG} detectDecrementalCharacters: DETECTED`);
  return `走行距離が <say-as interpret-as="telephone">${value}</say-as> キロメートルになりました！`;
};

module.exports = plugin;
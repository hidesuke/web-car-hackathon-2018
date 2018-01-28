const TAG = '[ShrineFortune]';
const plugin = {};
const CONFIG = require('../../config');

const FORTUNES = [
  {
    emotion: 'smile',
    speech: { joy: 1.0 },
    text: '今日の運勢は、大吉です。やったね！',
    speechText: '今日の運勢は、大吉です。やったね！'
  },
  {
    emotion: 'love',
    speech: { joy: 1.0 },
    text: '今日の運勢は、超吉です。ウルトララッキー！',
    speechText: '今日の運勢は、ちょうきちです。ウルトララッキー！'
  },
  {
    emotion: 'normal',
    speech: {},
    text: '今日の運勢は、小吉です。ぱっとしないね。',
    speechText: '今日の運勢は、しょうきちです。ぱっとしないね'
  },
  {
    emotion: 'smile',
    speech: {},
    text: '今日の運勢は、吉です。実は中吉以上、大吉未満なの！',
    speechText: '今日の運勢は、きちです。実はちゅうきち以上、大吉未満なの！'
  },
  {
    emotion: 'normal',
    speech: {},
    text: '今日の運勢は、半吉です。半吉……だれ？',
    speechText: '今日の運勢は、はんきちです。はんきち……だれ?'
  },
  {
    emotion: 'sad1',
    speech: { sadness: 1.0 },
    text: '今日の運勢は、凶です。ドンマイ！',
    speechText: '今日の運勢は、凶です。ドンマイ！'
  }
];

// APIで地点検索をする最低限の時間間隔 (負荷をかけすぎないようにするため)
const MIN_QUERY_INTERVAL = 15000; // milliseconds

let lat;
let lng;
let searchOngoing = false
let lastShrineName;
let lastQueryTime;

plugin.action = (vias, callback) => {
  vias.subscribe(GPS_LATITUDE, onLatitudeChanged, onError);
  vias.subscribe(GPS_LONGITUDE, onLongitudeChanged(callback), onError);
};

const onLatitudeChanged = value => {
  lat = value;
}

const onLongitudeChanged = callback => {
  return value => {
    lng = value;
    processLatLng(lat, lng, callback);
  }
};

const onError = err => {
  console.log(err);
};

const processLatLng = (lat, lng, callback) => {
  console.log(`${TAG} processLatLng: lat=${lat}, lng=${lng}`);

  if (searchOngoing) {
    return;
  }

  const currentTime = new Date().getTime();
  if (lastQueryTime && currentTime < lastQueryTime + MIN_QUERY_INTERVAL) {
    return;
  }

  searchOngoing = true;
  lastQueryTime = currentTime;

  const path = '/api/intellisearch';
  const query = `genre=sightseeing&lq=loc:${lat}%2C${lng}&lq_buffer=1000&page=1&pagesize=1&format=json&conditions=${encodeURI('神社')}&userId=${CONFIG.mapFan.userId}`;
  console.log(`${TAG} processLatLng: query=${query}`);
  fetch(`${CONFIG.mapFan.url}${path}?${query}`)
    .then(res => res.json(), reason => { console.log(err); searchOngoing = false })
    .then(data => {
      console.log(`${TAG} processLatLng: ${data}`)
      if (data.spots.length > 0) {
        const spot = data.spots[0];
        console.log(`${TAG} processLatLng: shrine found: ${spot.name}`);
        if (!lastShrineName || lastShrineName !== spot.name) {
          lastShrineName = spot.name;
          const fortune = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
          const speech = fortune.speech;
          const text = `近くに${spot.name}があるので占いをします。${fortune.text}`;
          const speechText = `近くに${spot.name}があるので占いをします。${fortune.speechText}`;
          speech.text = speechText;
          callback({
            'text': text,
            'kuma': fortune.emotion,
            'speech': speech
          });
        }
      }
      searchOngoing = false;
    }, reason => { console.log(err); searchOngoing = false })

}

module.exports = plugin;
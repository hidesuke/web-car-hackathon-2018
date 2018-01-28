const plugin = {};

const config = require('../../config');

plugin.coor = {};
plugin.count = 0;
plugin.prevGasStand = null;
const THRESHOLD = 2;
const actions = ['smile', 'love', 'noram'];
const pattern = ['アブラ！　アブラ！', 'ガソリンの香りがする', '鼻孔をくすぶるガソリンの香り', 'はぁ、はぁ、アブラーー', '火の用心! ガソリン一発だいばくはふ']
const makers = {
  2: 'エッソ',
  3: 'エネオス',
  4: 'キグナス',
  6: 'コスモ石油',
  7: '昭和シェル',
  8: 'いでみつ',
  10: 'モービル',
  11: 'ソラト',
  12: 'ジェーエーエスエス',
  13: 'ゼネラル',
  14: 'カーエネックス',
  19: '三菱のガソリンスタンド',
  99: 'なんか知らんけどガソリンスタンド'
};

plugin.action = (vias, cb) => {
  vias.subscribe(GPS_LONGITUDE, onSuccessLng, onError);
  vias.subscribe(GPS_LATITUDE, onSuccessLat(cb), onError);
};

const onSuccessLng = lng => {
  plugin.coor.lng = lng;
}

const onSuccessLat = cb => {
  return lat => {
    plugin.coor.lat = lat;
    plugin.count += 1;
    if (plugin.count % THRESHOLD === 0) {
      const query = `?apid=${config.gogo.key}&limit=1&lat=${plugin.coor.lat}&lon=${plugin.coor.lng}`;
      fetch(`${config.gogo.url}${query}`)
        .then(res => res.json())
        .then(data => {
          console.log('[gas-stand-search]');
          console.log(data);
          if (data.Result.length === 0) return;
          const stand = data.Result[0];
          if (plugin.prevGasStand === stand.id) return true;
          plugin.prevGasStand = stand.id;
          const retText = `${makers[stand.Maker]}があるよ。${pattern[Math.floor(Math.random() * pattern.length)]}`
          cb({
            text: retText,
            kuma: actions[Math.floor(Math.random() * actions.length)],
            speech: {
              text: retText,
              volume: 1.0,
              speed: 1.0,
              pitch: 1.2,
              range: 2.0,
              joy: 1.0,
              sadness: 0.0,
              anger: 0.0
            }
          });
        });
    }
  };
}

const onError = err => {
  console.log(err);
}

module.exports = plugin;
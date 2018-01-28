const plugin = {};

const config = require('../../config');

plugin.coor = {};
plugin.count = 0;
plugin.prevRestaurant = null;
const THRESHOLD = 20;
const actions = ['smile', 'love', 'noram'];

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
      const query = `?keyid=${config.grnavi.key}&format=json&latitude=${plugin.coor.lat}&longitude=${plugin.coor.lng}&hit_per_page=1&range=2`;
      fetch(`${config.grnavi.url}${query}`)
        .then(res => res.json())
        .then(data => {
          console.log('[grnavi-search]');
          console.log(data);
          if (data.error) return true;
          const restaurant = data.rest;
          if (plugin.prevRestaurant === restaurant.id) return true;
          plugin.prevRestaurant = restaurant.id;
          const retText = `${restaurant.name}発見。美味しいらしいよ？ ${restaurant.category}なんだって。お腹すいたよね？`
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
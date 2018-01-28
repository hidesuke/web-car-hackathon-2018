const TAG = '[Denso]';
const denso = {};
const actions = ['normal', 'smile', 'angry1', 'angry2', 'sad1', 'sad2', 'surprise', 'idle', 'love'];

const DENSO_FREQUENCY = [
  {value: -1.0, text: 'ほんのささいな', emotion: 'surprise', level: 0.2}, 
  {value:  0.0, text: 'ちょっとした', emotion: 'surprise', level: 0.4}, 
  {value:  0.3, text: 'それなりの', emotion: 'surprise', level: 0.6}, 
  {value:  0.6, text: 'けっこう大変な', emotion: 'surprise', level: 0.8}, 
  {value:  1.0, text: 'すんごい', emotion: 'surprise', level: 1.0} 
];

const DENSO_DISTANCE = [
  { value:  2.0, text: '目の前で' },
  { value:  4.0, text: 'すぐそこで' }, 
  { value:  6.0, text: 'このあたりで' },
  // { value:  8.0, text: '燃料が四分の一になったよ' },
  // { value: 10.0, text: '燃料が半分になったよ' },
];



// すでに使用したidのリスト
var id_list = [];
var detail;

// 緯度経度情報
denso.values = {
    longitude: 0, 
    latitude: 0
};

// donso API から読み込んだヒヤリハットのリスト
let denso_json;

// 話を続けるためのフラグ
let count = 3;

denso.action = (vias, callback) => {
    // Denso APIからリストを読み込む
    fetch('https://drt-stg.obvious.jp/NearMisses/Hackathon/WebApi/Point')
    .then(res => {
      return res.text();
    })
    .then(text => {
      console.log(text);
      denso_json = eval(text);
    });

    // console.log(denso_json);
    vias.subscribe(GPS_LONGITUDE, onSuccess_longitude(callback), onError);
    vias.subscribe(GPS_LATITUDE,  onSuccess_latitude(callback), onError);
};

const onSuccess_longitude = callback => {
  return longitude => {
    // 経度情報の処理
    denso.values.longitude = longitude;
    //console.log(`longitude from sample: ${longitude}`)
    check(callback);
    //callback({ text: `${longitude / 1000.0} km/h}か良いスピードだ！` });
  }
};

const onSuccess_latitude = callback => {
    return latitude => {
      // 緯度情報の処理
      denso.values.latitude = latitude;
    //   console.log(`latitude from sample: ${latitude}`)
      // check(callback);
    }
  };
  
// 緯度・経度情報を使って，ヒヤリハットリストから近いものを選出
const check = callback => {
    // 二つの位置情報から直線距離を求める関数
    function getDistance(lat1, lng1, lat2, lng2) {

        function radians(deg){
           return deg * Math.PI / 180;
        }
 
        return 6378.14 * Math.acos(Math.cos(radians(lat1))* 
         Math.cos(radians(lat2))*
         Math.cos(radians(lng2)-radians(lng1))+
         Math.sin(radians(lat1))*
         Math.sin(radians(lat2)));
    }

    // 現在位置
    let geo = {
      lat: denso.values.latitude,
      lng: denso.values.longitude
    };
    
    let min = 10000000000.0;
    let id = -1;

    // ヒヤリハットリストから，最小距離のヒヤリハットを抽出
    for (const v of denso_json) {
      // console.log(v);
      let dist = getDistance(geo.lat, geo.lng, v.latitude, v.longitude);
      min = Math.min(dist, min);
      if(dist == min){
        id = v.id;
      }
    }
    // console.log(`${TAG} nearest ヒヤリハット ${id}`);

    let already_flg = false;
    id_list.forEach(lst => {
      // console.log(`${TAG} same ID: ${lst}`);
      if(id == lst){
        already_flg = true;
      }
    });
    console.log(`${TAG} id list: ${id_list}`);

    let distance;
    DENSO_DISTANCE.forEach(th => {
      // console.log(`${TAG} threshold: ${min} : ${th.value}`);

      if (min <= th.value && already_flg == false) {
        distance = th.value;

        console.log(`${TAG} distance: ${min} : ${distance}`);
        id_list.push(id);
        already_flg = true;
        // break;

        var dt;
        fetch(`https://drt-stg.obvious.jp/NearMisses/Hackathon/WebApi/Point/${id}`)
        .then(res => {
          // console.log(res);
          return res.text();
        })
        .then(text => {
          // console.log(text);
          let a = text.replace('result : ', 'result : [');
          a = a.replace(/}$/, ']}');
          // console.log(a);
          var val = eval(a);
          dt = JSON.parse(JSON.stringify(val[0].detail));

          console.log('hiyarihatto !!!');
          // dt = val[0].detail;
          // console.log(`${TAG} frequency: ${dt.frequency}`);
          // console.log(val);
          callback(createOutput(dt, th.text));

        });
      }
    });
};

const onError = err => {
  console.log(err);
};


const createOutput = (detail, distance) => {
  // console.log(detail);
  let freq_text;
  let freq_flg = false;
  let freq_emotion ;
  let freq_level;
  DENSO_FREQUENCY.forEach(freq => {
    // console.log(`--- ${freq.value} : ${detail.frequency}`);
    if( detail.frequency >= freq.value && freq_flg == false){
      freq_text = freq.text;
      // freq_flg = true;
      freq_emotion = freq.emotion;
      freq_level = freq.level;
      // console.log(`${freq_text} : ${freq_emotion} : ${freq_level}`);
    }
  });
  let txt = `${distance} で ${freq_text} 事故があったらしいっすよ．`;
  console.log(txt);
  return {
    text: txt,
    kuma: freq_emotion,
    speech: {
      text: txt,
      sadness: freq_level, 
      volume: 1.0,
      speed: 0.8,
      pitch: 1.0,
      range: 1.0,
      joy: 0.5,
      anger: 0.5
    }
  }
};

module.exports = denso;
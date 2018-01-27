const sample = {};

const actions = ['normal', 'smile', 'angry1', 'angry2', 'sad1', 'sad2', 'surprise', 'idle', 'love'];

sample.action = (vias, callback) => {
  vias.subscribe(VEHICLE_SPEED, onSuccess(callback), onError);
};

/**
 * kumaには「くまさん」にさせたい表情を指定する。指定が無い場合は idleが選択される
 * 返却するJSONの speech 配下には以下を指定可能。 text以外は省略可能。speechの外のtextは画面に描画する文字列
 * text: 話させる言葉
 * volume: 0.5 - 2.0 デフォルト1
 * speed: 0.5 - 4.0 デフォルト1
 * pitch: 声の高さ 0.5 - 2.0 デフォルト1
 * range: 抑揚 0.00 - 2.00 デフォルト1
 * joy: 喜びパラメタ 0.0 - 1.0 デフォルト0
 * sadness: 悲しみパラメタ 0.0 - 1.0 デフォルト0
 * anger: 怒りパラメタ 0.0 - 1.0 デフォルト0
 */

const onSuccess = callback => {
  return speed => {
    // なんかしょり
    callback({
      text: ` ${speed / 1000.0} km/h！ 良いスピードだ！`,
      kuma: actions[Math.floor(Math.random() * actions.length)],
      speech: {
        text: `時速 ${speed / 1000.0} キロ！ 良いスピードだ！`,
        volume: 1.0,
        speed: 0.8,
        pitch: 1.0,
        range: 1.0,
        joy: 0.5,
        sadness: 0.5,
        anger: 0.5
      }
    });
  }
};

const onError = err => {
  console.log(err);
}

module.exports = sample;
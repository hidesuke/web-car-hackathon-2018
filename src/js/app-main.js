const $ = require('jquery');

const config = require('../config');
const idleText = [
  '助手席ならまかせろ！',
  '風の向くまま気の向くまま。いいドライブだ',
  'パンツァーフォー',
  'くまさんチームは背後から回り込んで優勝を狙ってください！',
  'イベント発生まち',
  '髪が後退してるんじゃない。私が前進しているのだ',
  '自動運転と全自動洗濯機のカップリングについて考えてる',
  '次の角を左に曲がっても、人生のゴールはないぜ',
  '考えるんじゃない、感じるんだ',
  'ハードラックとダンス……しちゃわないようにね',
  'オレのRについて来れるか！？',
  'みょうなフィーリングだ…シフトすると加速がもたつく',
  '「くまさん」って名前だけど……熊とはかぎらないのぜ？',
  'インド人を右に！',
  'さぁさぁ、よってらっしゃいみてらっしゃい',
  '状況に応じてテキトーなことをしゃべるよ。',
  '♪〜〜',
  'webとクルマと大五郎',
  'くま。くまくまくまぁ',
  'パンダ……くまのプライドを忘れた動物。見習いたい。',
  'うりゃほい！　うりゃほい！　うりゃほい！　うりゃほい！'
];


// ↓↓ 作ったプラグインをココでrequireする ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// const sample = require('./plugins/sample');
const fuelLevelWatcher = require('./plugins/fuel-level-watcher')
const interiorTemperature = require('./plugins/interior-temperature');
const awakeness = require('./plugins/awakeness');
const stoppedVehicleDetector = require('./plugins/stopped-vehicle-detector');
const totalDistanceMilestones = require('./plugins/total-distance-milestones');
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

let isAudioPlayable = true;
const emotion = {};

$(() => {
  updateIdleText();
  const vias = new VISClient(config.vehicle);
  vias.connect(() => {
    console.log('connected');
    // ↓↓ pluginのactionをココで呼ぶ ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    // sample.action(vias, render);
    awakeness.action(vias, render);
    fuelLevelWatcher.action(vias, render);
    interiorTemperature.action(vias, render);
    stoppedVehicleDetector.action(vias, render);
    totalDistanceMilestones.action(vias, render);
    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

  });
});

const updateIdleText = () => {
  $('#fukidashi-text').html(idleText[Math.floor(Math.random() * idleText.length)]);
};

// Animate Character using createjs
const onAction = (value) => {
  exportRoot.chara.gotoAndPlay(value);
};

const render = (output) => {
  if (isAudioPlayable) {
    $('#fukidashi-text').html(output.text);
    const audio = $('#audio-itself').get(0);
    $(audio).attr("src", speechQueryBuilder(output.speech));
    audio.play();
    isAudioPlayable = false;
    onAction(output.kuma || 'idle');
  }
};

$('#audio-itself').on('ended', (e) => {
  $('#audio-itself').removeAttr('src');
  updateIdleText();
  onAction('idle');
  isAudioPlayable = true;
});

const speechQueryBuilder = (speech) => {
  let url = `${config.ai.url}`;
  let query = `username=${config.ai.user}&password=${config.ai.passwd}&input_type=ssml&speaker_name=taichi&text=${encodeURIComponent(speech.text)}`;
  query += speech.volume ? `&volume=${speech.volume}` : '';
  query += speech.speed ? `&speed=${speech.speed}` : '';
  query += speech.pitch ? `&pitch=${speech.pitch}` : '';
  query += speech.range ? `&range=${speech.range}` : '';
  const emotion = {};
  emotion.j = speech.joy || 0;
  emotion.s = speech.sadness || 0;
  emotion.a = speech.anger || 0;
  const emotionStr = JSON.stringify(emotion);
  query += `&style=${encodeURIComponent(emotionStr)}`;
  console.log(`[Speech] ${speech.text}`);
  return `${url}?${query}`;
};
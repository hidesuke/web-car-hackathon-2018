const $ = require('jquery');

const config = require('../config');

// ↓↓ 作ったプラグインをココでrequireする ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
const sample = require('./plugins/sample');
const fuelLevelWatcher = require('./plugins/fuel-level-watcher')

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

let isAudioPlayable = true;
const emotion = {};

$(() => {
  const vias = new VISClient(config.vehicle);
  vias.connect(() => {
    console.log('connected');
    // ↓↓ pluginのactionをココで呼ぶ ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    sample.action(vias, render);
    fuelLevelWatcher.action(vias, render);

    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

  });
});

// Animate Character using createjs
const onAction = (value) => {
  exportRoot.chara.gotoAndPlay(value);
};

const render = (output) => {
  const actions = ['normal', 'smile', 'angry1', 'angry2', 'sad1', 'sad2', 'surprise', 'idle', 'love'];
  $('#output').append(`<p>${output.text}</p>`);
  if (isAudioPlayable) {
    const audio = $('#audio-itself').get(0);
    $(audio).attr("src", speechQueryBuilder(output.text));
    audio.play();
    isAudioPlayable = false;
    onAction(actions[Math.floor(Math.random() * actions.length)]);
  }
};

$('#audio-itself').on('ended', (e) => {
  $('#audio-itself').removeAttr('src');
  isAudioPlayable = true;
});

const speechQueryBuilder = (text) => {
  let url = `${config.ai.url}`;
  let query = `username=${config.ai.user}&password=${config.ai.passwd}&input_type=text&speaker_name=taichi&text=${encodeURIComponent(text)}`;
  return `${url}?${query}`;
};
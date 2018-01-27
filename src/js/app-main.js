const $ = require('jquery');

const config = require('../config');

// ↓↓ 作ったプラグインをココでrequireする ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// const sample = require('./plugins/sample');
const fuelLevelWatcher = require('./plugins/fuel-level-watcher')
const interiorTemperature = require('./plugins/interior-temperature');
const awakeness = require('./plugins/awakeness');
const stoppedVehicleDetector = require('./plugins/stopped-vehicle-detector');
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

let isAudioPlayable = true;
const emotion = {};

$(() => {
  const vias = new VISClient(config.vehicle);
  vias.connect(() => {
    console.log('connected');
    // ↓↓ pluginのactionをココで呼ぶ ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    sample.action(vias, render);
    awakeness.action(vias, render);
    fuelLevelWatcher.action(vias, render);
    interiorTemperature.action(vias, render);
    stoppedVehicleDetector.action(vias, render);
    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

  });
});

// Animate Character using createjs
const onAction = (value) => {
  exportRoot.chara.gotoAndPlay(value);
};

const render = (output) => {
  $('#output').append(`<p>${output.text}</p>`);
  if (isAudioPlayable) {
    const audio = $('#audio-itself').get(0);
    $(audio).attr("src", speechQueryBuilder(output.speech));
    audio.play();
    isAudioPlayable = false;
    onAction(output.kuma || 'idle');
  }
};

$('#audio-itself').on('ended', (e) => {
  $('#audio-itself').removeAttr('src');
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
  return `${url}?${query}`;
};
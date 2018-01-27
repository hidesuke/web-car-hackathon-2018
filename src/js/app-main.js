const $ = require('jquery');

const config = require('../config');

// ↓↓ 作ったプラグインをココでrequireする ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
const sample = require('./plugins/sample');
const fuelLevelWatcher = require('./plugins/fuel-level-watcher')

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

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
  const actions = ['normal', 'smile', 'angry1', 'angry2', 'sad1', 'sad2', 'surprise'];
  $('#output').append(`<p>${output.text}</p>`);
  onAction(actions[Math.floor(Math.random() * actions.length)]);
};

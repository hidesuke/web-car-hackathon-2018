const $ = require('jquery');

const config = require('../config');

// ↓↓ 作ったプラグインをココでrequireする ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
const sample = require('./plugins/sample');


// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

const emotion = {};

$(() => {
  const vias = new VISClient(config.vehicle);
  vias.connect(() => {
    console.log('connected');
    // ↓↓ pluginのactionをココで呼ぶ ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    sample.action(vias, render);

    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

  });
});

// Animate Character using createjs
const onAction = (value) => {
  exportRoot.chara.gotoAndPlay(value);
};

const render = (output) => {
  const actions = ['normal', 'smile', 'angry', 'sad', 'surprise'];
  $('#output').append(`<p>${output.text}</p>`);
  onAction(actions[Math.floor(Math.random() * actions.length)]);
};

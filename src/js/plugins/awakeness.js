const awakeness = {};

const AwakenessLevel = {
    AWAKE: 2,
    DOZE: 1,
    ASLEEP: 0
};

const AWAKE_THRESHOLD = 60;
const DOZE_THRESHOLD = 30;
const DOZE_TEXT = "ガムでも食べるかい？";
const ASLEEP_TEXT = "おぎろーーーーー！！！";
const ASLEEP_ACTIONS = ['angry1', 'angry2'];

let currentAwakenessLevel = AwakenessLevel.AWAKE;

awakeness.action = (vias, callback) => {
    vias.subscribe(DRV_AWAKENESS, onSuccess(callback), onError);
};

const onSuccess = callback => {
  return drvAwakeness => {
    console.log(`driver awakeness: ${drvAwakeness}`);
    let message = "";
    let action = "normal";
    let volume = 1;
    let speed = 1;
    let pitch = 1;
    let range = 1;
    let anger = 0;
    // 注意喚起のメッセージなので、覚醒度が60以上(通常)の場合は、何も言わない
    // 眠気が出てくる60未満になったら、注意喚起
    // 注意喚起は一度だけ
    // 30きったら、ずっと言い続ける
    if (drvAwakeness >= AWAKE_THRESHOLD) {
        if (currentAwakenessLevel < AwakenessLevel.AWAKE) {
            currentAwakenessLevel = AwakenessLevel.AWAKE;
        }
    } else if (drvAwakeness >= DOZE_THRESHOLD) {
        if (currentAwakenessLevel > AwakenessLevel.DOZE) {
            currentAwakenessLevel = AwakenessLevel.DOZE;
            message = DOZE_TEXT;
        }
    } else {
        message = ASLEEP_TEXT;
        action = ASLEEP_ACTIONS[Math.floor(Math.random() * ASLEEP_ACTIONS.length)];
        volume = 2;
        speed = 1;
        pitch = 2;
        range = 2;
        anger = 1;
    }
    console.log(`awakeness_level: ${currentAwakenessLevel}`);
    console.log(message);
    if (message) {
        callback({
            text: message,
            kuma: action,
            speech: {
                text: message,
                volume: volume,
                speed: speed,
                pitch: pitch,
                range: range,
                anger: anger
            }
        });
    }
  }
};

const onError = err => {
  console.log(err);
}

module.exports = awakeness;
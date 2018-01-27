const awakeness = {};

awakeness.action = (vias, callback) => {
    vias.subscribe(DRV_AWAKENESS, onSuccess(callback), onError);
};

const onSuccess = callback => {
  return drvAwakeness => {
    console.log(`driver awakeness: ${drvAwakeness}`);
    let message = "";
    // 注意喚起のメッセージなので、覚醒度が60以上(通常)の場合は、何も言わない
    if (drvAwakeness < 30) {
        message = "おぎろーーーーー！！！";
    } else if (drvAwakeness < 60) {
        message = "ガムでも食べるかい？"
    }
    console.log(message);
    if (message) {
        callback({ text: message });
    }
  }
};

const onError = err => {
  console.log(err);
}

module.exports = awakeness;
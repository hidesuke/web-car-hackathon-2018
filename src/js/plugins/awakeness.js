const awakeness = {};

awakeness.action = (vias, callback) => {
    vias.subscribe(DRV_AWAKENESS, onSuccess(callback), onError);
};

const onSuccess = callback => {
  return drvAwakeness => {
    console.log(`driver awakeness: ${drvAwakeness}`);
    let message = "";
    if (drvAwakeness >= 60) {
        message = "おめめパッチリだね！";
    } else if (drvAwakeness >= 30) {
        message = "ガムでも食べるかい？"
    } else {
        message = "おぎろーーーーー！！！";
    }
    console.log(message);
    callback({ text: message });
  }
};

const onError = err => {
  console.log(err);
}

module.exports = awakeness;
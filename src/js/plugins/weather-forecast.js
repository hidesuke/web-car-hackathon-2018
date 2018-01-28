const weather = {};
const config = require('../../config');
weather.latitude = 0;
weather.longitude = 0;
weather.nextForecastTime = 0; //UnixTime

const THRESHOLD = [
    { value: 30, text: "", emotion: "normal", sadness: 0 },
    { value: 50, text: "もしかしたら雨降るかもねー。", emotion: "normal", sadness: 0 },
    { value: 70, text: "雨の降る可能性が高いねー。", emotion: "sadness", sadness: 0.2 },
    { value: 90, text: "近いうちに雨が降るから、運転気をつけてね。", emotion: "sadness", sadness: 1 }
];

weather.action = (vias, callback) => {
    vias.subscribe(GPS_LATITUDE, onLatSuccess, onLatError);
    vias.subscribe(GPS_LONGITUDE, onLonSuccess(callback), onLonError);
};

const onLatSuccess = lat => {
    console.log(`vechile latitude: ${lat}`);
    weather.latitude = lat;
};

const onLatError = err => {
    console.log(err);
};

const onLonSuccess = callback => {
    return lon => {
        console.log(`vechile longitude: ${lon}`);
        weather.longitude = lon;

        let url = `${config.weather.forecast.url}?lat=${weather.latitude}&lon=${weather.longitude}&key=${config.weather.key}&format=json`;
        fetch(url).then(res => {
            return res.json();
        }).then(json => {
            let forecast; 
            let forecastDateTime;
            const currentDatetime = new Date();
            if (json.status == "success") {
                for (const elm of json.forecast) {
                    forecastDateTime = new Date(elm.forecastDateTime);
                    if (currentDatetime <= forecastDateTime) {
                        forecast = elm;
                        break;
                    }
                }
                let emotion;
                let message;
                let sadness;
                if (weather.nextForecastTime < forecastDateTime.getTime()) {
                    // 次の予報が出るまで出さない
                    weather.nextForecastTime = forecastDateTime.getTime;
                    for (const th of THRESHOLD) {
                        let precipitation = forecast.precipitation;
                        if (precipitation <= th.value) {
                            message = `${currentDatetime.getMonth()+1}月${currentDatetime.getDate()}日${currentDatetime.getHours()}時${currentDatetime.getMinutes()}分現在の降水確立は、${precipitation}%だよ。${th.text}`;
                            emotion = th.emotion;
                            sadness = th.sadness;
                            break;
                        }
                    }
                    callback({
                        text: message,
                        kuma: emotion,
                        speech: {
                            text: message,
                            sadness: sadness
                        }
                    });
                }
            }
        });
    }
};

const onLonError = err => {
    console.log(err);
};

module.exports = weather;
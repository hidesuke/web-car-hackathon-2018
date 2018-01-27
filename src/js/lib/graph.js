// draw graph from DataBroker output json
//
"use strict"

var TIME_ELAPSED = "elapsed";
var TIME_DATE = "date";
var TIME_EPOCH = "epoch";

function initGraphBase() {

    var btn = document.getElementById("idBtnSetAll");
    btn.onclick = fnBtnToggleAll;

    //checkboxのイベント設定
    var chk = document.getElementsByClassName("clsChkEnable");
    for(var i=0; i<chk.length; i++) {
        chk[i].checked = true;
        chk[i].onclick = fnChkClick;
    }

    //radioのイベント設定
    var radio = document.getElementsByClassName("clsRadioTime");
    for(var i=0; i<radio.length; i++) {
        //radio[i].checked = true;
        radio[i].onclick = fnRadioClick;
    }
}

var toggleState = true;
function fnBtnToggleAll() {
    if (toggleState === true) 
        toggleState = false;
    else
        toggleState = true;

    var chk = document.getElementsByClassName("clsChkEnable");
    for( var i=0; i<chk.length; i++) {
        chk[i].checked = toggleState;
        //chk[i].onclick(toggleState, arguments[1]);
        chk[i].onclick(toggleState);
    }
}

function fnChkClick(a_arg) {  // a_arg: true/false or eventObj
    var targId = undefined;
    var bShow = this.checked;
    if (a_arg === true ||
        a_arg === false)
        bShow = a_arg;

    var origId = this.id;

    //checkbox id とsvg idの名前付けが合っている前提
    origId = origId.substr(5);
    targId = "svg" + origId;
    //console.log("targId = " + targId);
    showHideGraph(targId, bShow);
}

//surata

var timeState = TIME_ELAPSED;
function fnRadioClick() {
    var state = this.checked;
    var id = this.id;
    console.log (id + " state : " + state);

    if (id === "idRadioElapsed") {
        timeState = TIME_ELAPSED;
    } else if (id === "idRadioDate") {
        timeState = TIME_DATE;
    } else if (id === "idRadioEpoch") {
        timeState = TIME_EPOCH;
    } else {
        timeState = TIME_ELAPSED;
    }
}

function showHideGraph(a_targId, a_bShow) {
    var targ = document.getElementById(a_targId);
    //for debug
    if (targ === undefined || targ === null)
        console.log("showHideGraph() targ = undefined. targId = " + a_targId);
    targ = targ.parentNode;
    if (a_bShow === false) {
        targ.style.position = "absolute";
        targ.style.left = "-10000px";
    } else {
        targ.style.position = "relative";
        targ.style.left = "0px";
    }
}

function Tooltip(a_parent) {
    this.div = document.createElement('div');
    this.div.className = 'tooltip-content';
    a_parent.appendChild(this.div);
}
Tooltip.prototype.Show = function () {
    this.div.style.visibility = 'visible';
}
Tooltip.prototype.Update = function (a_obj, a_x, a_y) {
    this.div.style.visibility = 'visible';

    //マウスに重なって見にくいのでtooltipをずらす
    var hOffset = 10;
    var tooltipWidth = 120;
    if (a_x > 1000)
        hOffset = - 20 - tooltipWidth;
    this.div.style.left = (a_x + hOffset) + "px";
    this.div.style.top = (a_y - 30) + "px";
    
    while( this.div.hasChildNodes() )
    {
        this.div.removeChild( this.div.lastChild);
    }

    //surata
    if (a_obj === undefined)
        console.log("debug: undefined");
    this.div.appendChild (document.createTextNode( a_obj.time ));
    this.div.appendChild (document.createElement('br'));
    this.div.appendChild (document.createTextNode( a_obj.value ));
}
Tooltip.prototype.Hide = function() {
    this.div.style.visibility = 'hidden';
}

function fnBoolToInt(a_bInput) {
    if(a_bInput === "true")
        return 1;
    else
        return 0;
}

function fnCheckZone(a_zone, a_fr, a_rl) {
    //前提条件
    //a_zoneは要素2の配列で、
    //a_fr = "Front" or "Rear"
    //a_rl = "Right" or "Left"
    try{
        var targ = [];
        targ[0] = a_fr; targ[1] = a_rl;
        var a = JSON.stringify(a_zone.sort()).toLowerCase();
        var b = JSON.stringify(targ.sort()).toLowerCase();
        if (a === b)
            return true;
    else
        return false;
    } catch(e) {
        return false;
    }
}

function getDataSet( a_json ) {

    //jsonからArrayを取り出す
    // [ {time, value}, {time, value}, ...]

    //var count=0;
    var invalCount=0;
    var dataSet = {};
    var flgFirstVal = false;

    // == Smartphone
    var arryLat = [];
    var arryLng = [];
    var arryAlt = [];
    var arryHead = [];
    var arrySpeed = [];

    // == Vehicle ===
    // === RunningStatus ===
    var arryVehicleSpeed = [];
    var arryEngineSpeed = [];
    var arrySteeringWheel = [];
    var arryBrakeOperation = [];
    var arryAcceleratorPedalPosition = [];
   
    var arryVehiclePowerModeType = [];
    var arryTransmissionMode = [];

    var arryLightStatusHead = [];
    var arryLightStatusBrake = [];
    var arryLightStatusParking = [];

    var arryFuelLevel = [];
    var arryFuelInstantConsumption = [];

    // === Maintenance ===
    var arryOdometer = [];
    
    // === Personalization ===
    var arryDriveMode = [];

    // === DrivingSafety ===
    var arryDoor_fr = [];
    var arryDoor_fl = [];
    var arrySeatbelt_fr = [];

    // === VisionAndParking ===
    var arryParkingBrake = [];

    // == CarAdapter ==
    var arryAccelerationX = [];
    var arryAccelerationY = [];
    var arryAccelerationZ = [];

    var arryGyroX = [];
    var arryGyroY = [];
    var arryGyroZ = [];

    var lng, lat, alt, head, speed;

    var startTime = undefined;
    var endTime = undefined;
    var tmp, time;

    for(var i=0; i<a_json.length; i++){

        if (a_json[i].Smartphone && 
            a_json[i].Smartphone.Gps &&
            a_json[i].Smartphone.Gps.LocationInf &&
            a_json[i].Smartphone.Gps.LocationInf.longitude)
        {
            lng = (a_json[i].Smartphone.Gps.LocationInf.longitude);
            lat = (a_json[i].Smartphone.Gps.LocationInf.latitude);
            alt = (a_json[i].Smartphone.Gps.LocationInf.altitude);
            head = (a_json[i].Smartphone.Gps.LocationInf.heading);
            speed = (a_json[i].Smartphone.Gps.LocationInf.speed);

            time = Number(a_json[i].Smartphone.Gps.LocationInf.timeStamp);

            if (lng < 130 || lat < 30) {
                // invalid position data. skip
                invalCount++;
                continue;
            }

            /*
            // for text display
            date = new Date(time);
            //strTime = date.getHours();
            sY   = date.getFullYear().toString();
            sMon = (date.getMonth()+1).toString();
            sMon = func0ume(sMon, 2)
            sD   = date.getDate().toString();
            sD   = func0ume(sD, 2)
            sH   = date.getHours().toString();
            sH   = func0ume(sH, 2)
            sMin = date.getMinutes().toString();
            sMin = func0ume(sMin, 2)
            sS = date.getSeconds().toString();
            sS = func0ume(sS, 2);
            //text += sY+"/"+sMon+"/"+sD+"/"+sH+"/"+sMin+"/"+sS + " : @"+lat+","+lng+",18z" + "<br>";
            text += sY+"/"+sMon+"/"+sD+"/"+sH+"/"+sMin+"/"+sS + " : "+lat+" / "+lng + "<br>";
            */
            //lng = lng * 10000;
            //lat = lat * 10000;
            // for scalse calcuration
            //dataLat.push(lat);
            //dataLng.push(lng);

            // for map plot
            tmp = {"time":time, "value":Number(lat)};
            arryLat.push(tmp);
            tmp = {"time":time, "value":Number(lng)};
            arryLng.push(tmp);
            tmp = {"time":time, "value":Number(alt)};
            arryAlt.push(tmp);
            tmp = {"time":time, "value":Number(head)};
            arryHead.push(tmp);
            tmp = {"time":time, "value":Number(speed)};
            arrySpeed.push(tmp);
            //console.log("head = " + head);

            //count++;
        }


        // === for Vehicle ===
        if (a_json[i].Vehicle) {
            // === RunningStatus ===
            if (a_json[i].Vehicle.RunningStatus) {
                var r = a_json[i].Vehicle.RunningStatus;
                if (r.VehicleSpeed &&
                    r.VehicleSpeed.speed) {
                    tmp = {"time":Number(r.VehicleSpeed.timeStamp), 
                           "value":Number(r.VehicleSpeed.speed)};
                    arryVehicleSpeed.push(tmp);

                    //vehicleSpeed.timeStampの最初の値をstartTimeとする
                    //(VehicleSpeedが最も発生頻度が高いとの想定から)
                    if (startTime === undefined) {
                        startTime = r.VehicleSpeed.timeStamp;
                    }
                    if (endTime === undefined ||
                        endTime < r.VehicleSpeed.timeStamp) {
                        endTime = r.VehicleSpeed.timeStamp;
                    }
                }
                if (r.EngineSpeed &&
                    r.EngineSpeed.speed) {
                    tmp = {"time":Number(r.EngineSpeed.timeStamp), 
                           "value":Number(r.EngineSpeed.speed)};
                    arryEngineSpeed.push(tmp);
                }
                if (r.SteeringWheel &&
                    r.SteeringWheel.angle) {
                    tmp = {"time":Number(r.SteeringWheel.timeStamp), 
                           "value":Number(r.SteeringWheel.angle)};
                    arrySteeringWheel.push(tmp);
                }

                var val; 
                if (r.BrakeOperation &&
                    r.BrakeOperation.brakePedalDepressed) {
                    val = fnBoolToInt(r.BrakeOperation.brakePedalDepressed);
                    tmp = {"time":Number(r.BrakeOperation.timeStamp), 
                           "value":val};
                    arryBrakeOperation.push(tmp);
                }

                if (r.AcceleratorPedalPosition &&
                    r.AcceleratorPedalPosition.value) {
                    tmp = {"time":Number(r.AcceleratorPedalPosition.timeStamp), 
                           "value":Number(r.AcceleratorPedalPosition.value)};
                    arryAcceleratorPedalPosition.push(tmp);
                }

                //VehiclePowerModeType
                if (r.VehiclePowerModeType &&
                    r.VehiclePowerModeType.value) {
                    if (r.VehiclePowerModeType.value === "off") {
                        val = 0;
                    } else if (r.VehiclePowerModeType.value === "running") {
                        val = 1;
                    } else if (r.VehiclePowerModeType.value === "accessory1") {
                        val = 2;
                    } else if (r.VehiclePowerModeType.value === "accessory2") {
                        val = 3;
                    } else if (r.VehiclePowerModeType.value === "cranking") {
                        val = 4;
                    } else {
                        val = undefined;
                    }

                    if (val !== undefined) { 
                        tmp = {"time":Number(r.VehiclePowerModeType.timeStamp), 
                               "value":val};
                        arryVehiclePowerModeType.push(tmp);
                    }
                }

                //Transmission
                if (r.Transmission &&
                    r.Transmission.mode) {
                    //console.log("transmission_mod = " + r.Transmission.mode);

                    var val = (function(d) {
                        console.log("transmission = " + d);

                        if (d === "reverse") {
                            return -1;
                        }else if (d === "neutral") {
                            return 0;
                        }else if (d === "park") {
                            return 1;
                        }else if (d === "low") {
                            return 2;
                        }else if (d === "drive") {
                            return 3;
                        }else if (d === "overdrive") {
                            return 4;
                        }else {
                            return undefined;
                        }
                    }) (r.Transmission.mode);
                    if (val !== undefined) {
                        tmp = {"time":Number(r.Transmission.timeStamp), 
                               "value":val};
                        arryTransmissionMode.push(tmp);
                    }
                }
 
                //LightStatus
                if (r.LightStatus) {
                    var l = r.LightStatus;
                    if (l.head) {
                        val = fnBoolToInt(l.head);
                        tmp = {"time":Number(l.timeStamp), 
                               "value":val};
                        arryLightStatusHead.push(tmp);
                    }
                    if (l.brake) {
                        val = fnBoolToInt(l.brake);
                        tmp = {"time":Number(l.timeStamp), 
                               "value":val};
                        arryLightStatusBrake.push(tmp);
                    }
                    if (l.parking) {
                        val = fnBoolToInt(l.parking);
                        tmp = {"time":Number(l.timeStamp), 
                               "value":val};
                        arryLightStatusParking.push(tmp);
                    }
                }
 
                //Fuel
                if (r.Fuel) {
                    var f = r.Fuel;
                    if (f.level) {
                        tmp = {"time":Number(f.timeStamp), 
                               "value":Number(f.level)};
                        arryFuelLevel.push(tmp);
                    }
                    if (f.instantConsumption) {
                        tmp = {"time":Number(f.timeStamp), 
                               "value":Number(f.instantConsumption)};
                        arryFuelInstantConsumption.push(tmp);
                    }
                }
            }
            // === Maintenance ===
            //Odometer
            if (a_json[i].Vehicle.Maintenance) {
                var m = a_json[i].Vehicle.Maintenance;

                if (m.Odometer &&
                    m.Odometer.distanceTotal) {
                    tmp = {"time":Number(m.Odometer.timeStamp), 
                           "value":Number(m.Odometer.distanceTotal)};
                    arryOdometer.push(tmp);
                }
            }

            // === Personalization ===
            if (a_json[i].Vehicle.Personalization) {
                var p = a_json[i].Vehicle.Personalization;

                //DriveMode
                if (p.DriveMode &&
                    p.DriveMode.driveMode) {
                    tmp = {"time":Number(p.DriveMode.timeStamp), 
                           "value":Number(p.DriveMode.driveMode)};
                    arryDriveMode.push(tmp);
                }
            }

            // === DrivingSafety ===
            if (a_json[i].Vehicle.DrivingSafety) {
                var d = a_json[i].Vehicle.DrivingSafety;
                //Door
                if (d.Door) {
                    var dr = d.Door;
                    if (dr instanceof Array)
                        var drAry = dr; 
                    else {
                        var drAry = [];
                        drAry[0] = dr;
                    }
                    for (var dr_i = 0; dr_i < drAry.length; dr_i++) {
                        //console.log("door : " + drAry[dr_i].status);
                        if (drAry[dr_i].status === "open")
                            val = 0;
                        else if (drAry[dr_i].status === "closed")
                            val = 1;
                        else if (drAry[dr_i].status === "ajar")
                            val = 2;
                        else 
                            val = 3;
                        tmp = {"time":Number(drAry[dr_i].timeStamp), 
                               "value":val};
                        var z = drAry[dr_i].zone;
                        if (z === undefined)
                            continue;
                        else
                            z = z.value;
                        if (fnCheckZone(z, "Front", "Right") === true) {
                            arryDoor_fr.push(tmp);
                        }else if (fnCheckZone(z, "Front", "Left") === true) {
                            arryDoor_fl.push(tmp);
                        }
                    }
                }

                //Seat
                if (d.Seat) {
                    var st = d.Seat;
                    if (st instanceof Array)
                        var stAry = st; 
                    else {
                        var stAry = [];
                        stAry[0] = st;
                    }
                    for (var st_i = 0; st_i < stAry.length; st_i++) {
                        //console.log("seatbelt : " + stAry[st_i].seatbelt);
                        if (stAry[st_i].seatbelt === "true")
                            val = 1;
                        else 
                            val = 0;
                        tmp = {"time":Number(stAry[st_i].timeStamp), 
                               "value":val};
                        var z = stAry[st_i].zone;
                        if (z === undefined)
                            continue;
                        else
                            z = z.value;
                        if (fnCheckZone(z, "Front", "Right") === true) {
                            arrySeatbelt_fr.push(tmp);
                        }
                    }
                }
            }

            // === VisionAndParking ===
            if (a_json[i].Vehicle.VisionAndParking) {
                var v = a_json[i].Vehicle.VisionAndParking;
                if (v.ParkingBrake !== undefined &&
                    v.ParkingBrake.status.length > 0) {
                        var val;
                        if (v.ParkingBrake.status === "active")
                            val = 1;
                        else
                            val = 0;
                    tmp = {"time":Number(v.ParkingBrake.timeStamp), 
                           "value":val};
                    arryParkingBrake.push(tmp);
                }
            }
        }

        // == CarAdapter ==
        if (a_json[i].CarAdapter &&
            a_json[i].CarAdapter.SensorData) {
            var a = a_json[i].CarAdapter.SensorData.Acceleration;
            var g = a_json[i].CarAdapter.SensorData.Gyro;
            if (a !== undefined) {
                tmp = {"time":Number(a.timeStamp), 
                       "value":Number(a.x)};
                arryAccelerationX.push(tmp);
                tmp = {"time":Number(a.timeStamp), 
                       "value":Number(a.y)};
                arryAccelerationY.push(tmp);
                tmp = {"time":Number(a.timeStamp), 
                       "value":Number(a.z)};
                arryAccelerationZ.push(tmp);
            }
            if (g !== undefined) {
                tmp = {"time":Number(g.timeStamp), 
                       "value":Number(g.x)};
                arryGyroX.push(tmp);
                tmp = {"time":Number(g.timeStamp), 
                       "value":Number(g.y)};
                arryGyroY.push(tmp);
                tmp = {"time":Number(g.timeStamp), 
                       "value":Number(g.z)};
                arryGyroZ.push(tmp);
            }
        }
    }
   
    // == timeSpan ==
    // 全データ項目グラフ幅を統一するため使用
    dataSet.startTime = Number(startTime);
    dataSet.endTime = Number(endTime);

    // == Smartphone
    dataSet.lat = arryLat;
    dataSet.lng = arryLng;
    dataSet.alt = arryAlt;
    dataSet.head = arryHead;
    dataSet.speed = arrySpeed;
    
    // == Vehicle ==
    // === RunningStatus ===
    dataSet.vehicleSpeed = arryVehicleSpeed;
    dataSet.engineSpeed = arryEngineSpeed;
    dataSet.steeringWheel = arrySteeringWheel;
    dataSet.brakeOperation = arryBrakeOperation;
    dataSet.acceleratorPedalPosition = arryAcceleratorPedalPosition;

    //VehiclePowerModeType
    dataSet.vehiclePowerModeType = arryVehiclePowerModeType;
        
    //Transmission
    dataSet.transmissionMode = arryTransmissionMode;
    //Fuel Level
    dataSet.fuelLevel = arryFuelLevel;
    //Fule instConsum
    dataSet.fuelInstantConsumption = arryFuelInstantConsumption;

    //Odometer distanceTotal
    dataSet.odometer = arryOdometer;
    //LightStatus
    dataSet.lightStatusHead = arryLightStatusHead;
    dataSet.lightStatusBrake = arryLightStatusBrake;
    dataSet.lightStatusParking = arryLightStatusParking;

    // == CarAdapter ==
    dataSet.accelerationX = arryAccelerationX;
    dataSet.accelerationY = arryAccelerationY;
    dataSet.accelerationZ = arryAccelerationZ;
    dataSet.gyroX = arryGyroX;
    dataSet.gyroY = arryGyroY;
    dataSet.gyroZ = arryGyroZ;

    // === VisionAndParking
    dataSet.parkingBrake = arryParkingBrake;

    // === DrivingSafety ===
    //Door(f-r)
    dataSet.door_fr = arryDoor_fr;
    dataSet.door_fl = arryDoor_fl;
    dataSet.seatbelt_fr = arrySeatbelt_fr;

    return dataSet;
}

function initGraph(arg_jsonFile, arg_offset) {
    d3.text(arg_jsonFile, function(error, text) {
        var jsonText = "[" + text + "]";
        var jsonObj = JSON.parse(jsonText);
        var dataSet = getDataSet(jsonObj);
        var offsetTime = 0;
        var ofs = Number(arg_offset);
        if (!Number.isNaN(ofs))
            offsetTime = ofs;
        //縦軸の表示値を変換
        // m/h => km/h
        var fnAxisConv_VehicleSpeed = function(d,i) {
            var ret = d / 1000;
            return ret;
        }
        // 小数点5桁以下切り捨て
        var fnRoundDecimal5th = function(d,i) {
            var ret = Math.round(d * 100000);
            ret = ret/100000;
            return ret;
        }


        // m => km
        var fnAxisConv_distanceTotal = function(d, i) {
            var ret = d / 1000;
            return ret;
        }

        var o = {};
        
        //Lat
        o.dataSet = dataSet.lat;
        o.svgId = "svgLat";o.title = "Lat[deg]";
        o.startTime = dataSet.startTime + offsetTime; o.endTime = dataSet.endTime;
        o.minVal = undefined;o.maxVal = undefined;
        o.fnYAxisConv = fnRoundDecimal5th;
        drawGraphObj(o);
        //Lng
        o.dataSet = dataSet.lng;
        o.svgId = "svgLng";o.title = "Lng[deg]";
        o.minVal = undefined;o.maxVal = undefined;
        drawGraphObj(o);

        //Alt
        o.dataSet = dataSet.alt;
        o.svgId = "svgAlt";o.title = "Alt[m]";
        o.minVal = undefined;o.maxVal = undefined;
        drawGraphObj(o);

        //Head
        o.dataSet = dataSet.head;
        o.svgId = "svgHead";o.title = "Heading(North:0, East:90, South:180, West:270) [deg]";
        o.minVal = undefined;o.maxVal = undefined;
        drawGraphObj(o);

        //Speed
        o.dataSet = dataSet.speed;
        o.svgId = "svgSpeed";o.title = "GpsSpeed[km/h]";
        o.minVal = undefined;o.maxVal = undefined;
        drawGraphObj(o);

        //VehicleSpeed
        o.dataSet = dataSet.vehicleSpeed;
        o.svgId = "svgVehicleSpeed"; o.title = "VehicleSpeed[km/h]";
        o.minVal = undefined; o.maxVal = undefined;
        o.fnYAxisConv = fnAxisConv_VehicleSpeed;
        drawGraphObj(o);
            
        //EngineSpeed
        o.dataSet = dataSet.engineSpeed;
        o.svgId = "svgEngineSpeed"; o.title = "EngineSpeed[rpm]";
        o.fnYAxisConv = undefined;
        o.minVal = undefined;o.maxVal = undefined;
        drawGraphObj(o);
        
        //SteeringWheel
        o.dataSet = dataSet.steeringWheel;
        o.svgId = "svgSteeringWheel"; o.title = "SteeringWheel(+:left, -:right) [deg]";
        o.minVal = undefined;o.maxVal = undefined;
        drawGraphObj(o);
        
        //AcceleratorPedal
        o.dataSet = dataSet.acceleratorPedalPosition;
        o.svgId = "svgAcceleratorPedalPosition"; o.title = "AccelPedal [%]";
        o.minVal = undefined;o.maxVal = undefined;
        drawGraphObj(o);
        
        //BrakeOperation
        o.dataSet = dataSet.brakeOperation;
        o.svgId = "svgBrakeOperation"; o.title = "BrakePedal [on/off]";
        o.minVal = -0.2; o.maxVal = 1.2;
        drawGraphObj(o);
        
        //ParkingBrake
        o.dataSet = dataSet.parkingBrake;
        o.svgId = "svgParkingBrake"; o.title = "ParkingBrake [on/off]";
        o.minVal = -0.2; o.maxVal = 1.2;
        drawGraphObj(o);
        
        //Accleration-X
        //Accelerationのx、y、zを同じ倍率で表示するため、minVal, maxValを指定する
        //minVal, maxValをundefinedにしておくと、自動設定される
        o.dataSet = dataSet.accelerationX;
        o.svgId = "svgAccelerationX"; o.title = "Acceleration-X(lateral) [G]";
        o.minVal = -0.5; o.maxVal = 1.5;
        drawGraphObj(o);
        
        //Accleration-Y
        o.dataSet = dataSet.accelerationY;
        o.svgId = "svgAccelerationY"; o.title = "Acceleration-Y(longitudinal) [G]";
        o.minVal = -1; o.maxVal = 2;
        o.minVal = -0.5; o.maxVal = 1.5;
        drawGraphObj(o);
        
        //Accleration-Z
        o.dataSet = dataSet.accelerationZ;
        o.svgId = "svgAccelerationZ"; o.title = "Acceleration-Z(vertical) [G]";
        o.minVal = -1; o.maxVal = 2;
        o.minVal = -0.5; o.maxVal = 1.5;
        drawGraphObj(o);
 
        //Gyro-X
        o.dataSet = dataSet.gyroX;
        o.svgId = "svgGyroX"; o.title = "Gyro-X(pitch) [deg/s]";
        o.minVal = -25; o.maxVal = 30;
        drawGraphObj(o);
        
        //Gyro-Y
        o.dataSet = dataSet.gyroY;
        o.svgId = "svgGyroY"; o.title = "Gyro-Y(roll) [deg/s]";
        o.minVal = -25; o.maxVal = 30;
        drawGraphObj(o);
        
        //Gyro-Z
        o.dataSet = dataSet.gyroZ;
        o.svgId = "svgGyroZ"; o.title = "Gyro-Z(yaw) [deg/s]";
        o.minVal = -25; o.maxVal = 30;
        drawGraphObj(o);

        //Transmission
        o.dataSet = dataSet.transmissionMode;
        o.svgId = "svgTransmissionMode"; o.title = "Gear (-1:reverse: 0:neutral 1:parking 2:low 3:drive)";
        o.minVal = -1.2;o.maxVal = 3.2;
        drawGraphObj(o);
         
        //Fuel Level
        o.dataSet = dataSet.fuelLevel;
        o.svgId = "svgFuelLevel"; o.title = "Fuel level [%]";
        o.minVal = undefined;o.maxVal = undefined;
        drawGraphObj(o);
        
        //Fuel instConsum
        o.dataSet = dataSet.fuelInstantConsumption;
        o.svgId = "svgFuelInstantConsumption"; o.title = "Fuel instantConsumption [g/sec]";
        o.minVal = undefined;o.maxVal = undefined;
        drawGraphObj(o);

        //VehiclePowerModeType
        o.dataSet = dataSet.vehiclePowerModeType;
        o.svgId = "svgVehiclePowerModeType"; o.title = "VehiclePowerModeType (0:off 1:running 2:accessory1 3:accessory2 4:engine-cranking)";
        o.minVal = -0.2 ;o.maxVal = 4.2;
        drawGraphObj(o);

        //Odometer.TotalDist
        o.dataSet = dataSet.odometer;
        o.svgId = "svgOdometer"; o.title = "Odometer.distanceTotal [km]";
        o.minVal = undefined;o.maxVal = undefined;
        o.fnYAxisConv = fnAxisConv_distanceTotal;
        drawGraphObj(o);

        //Door(f-r)
        o.dataSet = dataSet.door_fr;
        o.svgId = "svgDoor_fr"; o.title = "Door(front-right) 1:close 0:open";
        o.minVal = -0.2;o.maxVal = 1.2;
        o.fnYAxisConv = undefined;
        drawGraphObj(o);

        //Door(f-l)
        o.dataSet = dataSet.door_fl;
        o.svgId = "svgDoor_fl"; o.title = "Door(front-left) 1:close 0:open";
        o.minVal = -0.2;o.maxVal = 1.2;
        o.fnYAxisConv = undefined;
        drawGraphObj(o);

        //Seatbelt(f-r)
        o.dataSet = dataSet.seatbelt_fr;
        o.svgId = "svgSeatbelt_fr"; o.title = "Seatbelt(front-right) 1:fastened 0:open";
        o.minVal = -0.2;o.maxVal = 1.2;
        o.fnYAxisConv = undefined;
        drawGraphObj(o);

        //HeadLight
        o.dataSet = dataSet.lightStatusHead;
        o.svgId = "svgHeadLight"; o.title = "HeadLight [on/off]";
        o.minVal = -0.2;o.maxVal = 1.2;
        o.fnYAxisConv = undefined;
        drawGraphObj(o);

        //BrakeLamp
        o.dataSet = dataSet.lightStatusBrake;
        o.svgId = "svgBrakeLight"; o.title = "BrakeLight [on/off]";
        o.minVal = -0.2;o.maxVal = 1.2;
        o.fnYAxisConv = undefined;
        drawGraphObj(o);

        //ParkingLamp
        o.dataSet = dataSet.lightStatusParking;
        o.svgId = "svgParkingLight"; o.title = "ParkingLight [on/off]";
        o.minVal = -0.2;o.maxVal = 1.2;
        o.fnYAxisConv = undefined;
        drawGraphObj(o);

    });
}

// 用語注
// domain：入力ドメイン。入力データ値の取りうる範囲
// range：出力レンジ。出力値の取る範囲。通常pixel単位の値になる。

/*
 * a_yMinVal/a_yMaxVal: Y軸表示範囲のmin/max値指定(加速度x,y,xを同じ値範囲で揃えて表示したい場合など)
 * a_fnYAxisConv: Y軸目盛用換算関数(vehicleSpeed(=m/h値)の目盛を[km/h]表示にしたい場合など)
 */
function drawGraphObj(a_obj) {
    drawGraph(a_obj.dataSet, a_obj.svgId, a_obj.title, a_obj.startTime, a_obj.endTime, a_obj.minVal, a_obj.maxVal, a_obj.fnYAxisConv, a_obj.xTranslate, a_obj.lineClass);
}
function drawGraph(a_arryData, a_svgId, a_title, a_startTime, a_endTime, a_yMinVal, a_yMaxVal, a_fnYAxisConv, a_xTranslate, a_lineClass) {

    var xMargin = 10;
    var xPaddingLeft = 90;
    var yMargin = 30;
    var yMaxVal, yMinVal;
    var xMaxVal, xMinVal;
    var yOffset;

    //縦軸表示値換算用関数　(vehicleSpeedを m/sec => m/hに変換など )
    if (a_fnYAxisConv === undefined)
        a_fnYAxisConv = function(d,i){return d;};

    d3.select("#" + a_svgId).selectAll("*").remove();   //描画済みの要素を削除する

    for (var i=0; i<a_arryData.length; i++) {
        if (i===0) {
            yMaxVal = yMinVal = a_arryData[i].value;
            xMaxVal = xMinVal = a_arryData[i].time;
        }
        //console.log("a_arryData.value = " + a_arryData[i].value);
        if (yMaxVal < a_arryData[i].value) yMaxVal = a_arryData[i].value;
        if (yMinVal > a_arryData[i].value) yMinVal = a_arryData[i].value;
        if (xMaxVal < a_arryData[i].time) xMaxVal = a_arryData[i].time;
        if (xMinVal > a_arryData[i].time) xMinVal = a_arryData[i].time;
    }
    /*console.log("yMaxVal : " + yMaxVal);
    console.log("yMinVal : " + yMinVal);
    console.log("xMaxVal : " + xMaxVal);
    console.log("xMinVal : " + xMinVal);
    */

    //引数でmin/max指定がある場合
    if (a_yMinVal !== undefined)
        yMinVal = a_yMinVal;
    if (a_yMaxVal !== undefined)
        yMaxVal = a_yMaxVal;

    //引数でtimeSpanの指定がある場合
    if (a_startTime !== undefined)
        xMinVal = a_startTime;
    if (a_endTime !== undefined)
        xMaxVal = a_endTime;

    //1000000は小数以下値のため
    //var xDomainSize = xMaxVal - xMinVal;
    var xDomainSize = 180000; //3minに固定
    var yDomainSize =(yMaxVal * 1000000 - yMinVal * 1000000) / 1000000;
    var yDomainAve = ((yMaxVal * 1000000 + yMinVal * 1000000)/2) / 1000000;
    // 値が変化しなかった場合、yDomainSize == 0になる
    // 後で除算に使うため、便宜上わずかに値の変化があったことにする
    if (yDomainSize === 0)
        yDomainSize = 1;

    //xDomainSizeが15minより大きい場合svg幅を変更する(横軸が詰まり過ぎないため)
    var minuteWidth = 40;
    var defaultWidth = 300; //1300;
    var svg = document.getElementById(a_svgId);
    if (svg === undefined || svg === null)
        console.log("debug stop");
    var svgWidth = document.getElementById(a_svgId).clientWidth;
    var svgHeight = document.getElementById(a_svgId).clientHeight;
    var xRangeMin = 0;
    var xRangeMax = svgWidth - xMargin*2 - xPaddingLeft;
    var yRangeMin = 0;
    var yRangeMax = svgHeight - yMargin*2;
    var yRangeSize = yRangeMax - yRangeMin;
    var xRangeSize = xRangeMax - xRangeMin;

    var timeOffset = 0;
    var initialVal = 0;

    document.getElementById(a_svgId).style.width = defaultWidth; //デフォルト幅に戻す

    //時間幅が32分より大きい場合、x方向の単位幅を調整する
    if (xDomainSize > (32*60*1000)) {
        var min = Math.round(xDomainSize/(60*1000));
        min = min+1;
        //1min 40pxとしてsvg幅を再設定
        document.getElementById(a_svgId).style.width = min * minuteWidth;
        xRangeMax = svgWidth - xMargin*2 - xPaddingLeft;
    }

    yOffset = (yRangeMax - yRangeMin)/2 + yMargin;

    //2回目以降は初回に追加した要素をまず削除
    {
        var p = document.getElementById(a_svgId).parentNode;
        var c = p.children;
        for(var c_i=0; c_i < c.length; c_i++) {
            //console.log("child : "+ c[c_i].className +" "+ c[c_i].id);
            if (c[c_i].className === "dataLabel" ||
                c[c_i].className === "tooltip-content") {
                //console.log("found :"+ c[c_i].className);
                p.removeChild(c[c_i]);
            }
        }
    }
    
    var elem = null;
    elem = document.createElement('div');
    elem.classList.add("dataLabel");
    //elem.innerText = a_title;
    elem.innerText = "";
    document.getElementById(a_svgId).parentNode.appendChild(elem);

    // data line
    var line = d3.svg.line()
        .x(function(d, i) {
            var ret = d.time - xMinVal;
            ret = ret/xDomainSize;
            ret = ret*xRangeSize;
            ret = xMargin + ret;
            return ret;
        })
        .y(function(d, i) {
            var ret = (d.value - yDomainAve);
            var ret = ret*(-1); //正方向を上下逆転
            ret = (ret/yDomainSize) * yRangeSize;
            ret = ret + yOffset;
            return ret;
        })
    var lineElem = d3.select("#" + a_svgId)
        .append("path")
        //.attr("class", "dataLine")
        .attr("class", a_lineClass)
        .attr("d", line(a_arryData))

    // 縦グリッド
    var xRange = d3.range(xMinVal, xMaxVal, 30 * 1000); //30sec単位
    var yGrid = d3.select("#" + a_svgId)
        .selectAll("line.h")
        .data(xRange)
        .enter()
        .append("line")
        .attr("class", "yGrid")
        .attr("x1", 
              function(d,i){
                var ret = (d-xMinVal)/xDomainSize;
                ret = ret * xRangeSize;
                ret = ret + xMargin;
                return ret;
             })
        .attr("y1", yMargin)
        .attr("x2", 
              function(d,i){
                var ret = (d-xMinVal)/xDomainSize;
                ret = ret * xRangeSize;
                ret = ret + xMargin;
                return ret;
             })
        .attr("y2", yRangeSize + yMargin)

    // 横方向グリッド(中央線)
    /*
    var xGrid = d3.select("#" + a_svgId)
        .selectAll("line.v")
        .data([0,1]) //この部分、無しにできないか
        .enter()
        .append("line")
        .attr("class", "xGrid")
        .attr("x1", xMargin)
        .attr("y1", yOffset)
        .attr("x2", xMargin + xRangeSize)
        .attr("y2", yOffset)
    */

    //横軸目盛
    //var xAxisRange = d3.range(xMinVal-xMinVal, xMaxVal-xMinVal, 60 * 1000); //60sec単位
    var xAxisRange = d3.range(0, 180 * 1000, 60 * 1000); //3minに固定
    //var xScale = d3.scale.linear().domain([xMinVal-xMinVal, xMaxVal-xMinVal]).range([xRangeMin, xRangeMax]);
    var xScale = d3.scale.linear().domain([0, 180*1000]).range([xRangeMin, xRangeMax]);
    var xAxis = d3.svg.axis()
        .scale(xScale)  //Axisの値の範囲(domain)と、画面上のサイズ(range)
        .tickValues(xAxisRange) //目盛を置く値の配列
        //.ticks(10)
        .orient("bottom") //.orient("top")
        .innerTickSize(4)
        //.outerTickSize(10)
        .tickPadding(3)
        .tickFormat(function(d,i){
            return d/(1000 * 60);
        })

    d3.select("#" + a_svgId)
        .append("g")
        .attr("class", "axis")
        .attr("transform", "translate("+xMargin +","+ (svgHeight-yMargin) +")")
        .call(xAxis)
        .selectAll("path,line")
        .attr("fill", "none")
        .attr("stroke", "white") //.attr("stroke", "black")
        .attr("shape-rendering", "crispEdges")
        .attr("opacity", 1) //.attr("opacity", 0.7)
    
    //縦軸目盛
    //var yAxisRange = d3.range(yMinVal-yMinVal, yMaxVal-yMinVal, 10); //60sec単位
    var yScale = d3.scale.linear().domain([yMaxVal, yMinVal]).range([yRangeMin, yRangeMax]);
    var yAxis = d3.svg.axis()
        .scale(yScale)
        //.tickValues(yAxisRange)
        .orient("left") //.orient("right")
        .ticks(5) //単純に５コ目盛をつけておく
        //.innerTickSize(4)
        .tickPadding(5) //.tickPadding(3)
        //.attr("stroke", "grey")
        .tickFormat(a_fnYAxisConv)

    d3.select("#" + a_svgId)
        .append("g")
        .attr("class", "axis")
        .attr("transform", "translate("+xMargin+","+ yMargin +")")
        .call(yAxis)
        .selectAll("path,line")
        .attr("fill", "none")
        .attr("stroke", "white") //.attr("stroke", "black")
        .attr("shape-rendering", "crispEdges")
        .attr("opacity", 1) //.attr("opacity", 0.7)

    //mouse hoverで時刻、経過時間、値を表示したい
    var targ = document.getElementById(a_svgId);
    targ._getValue = getValue;
    targ._xMargin = xMargin;
    targ._xDomainSize = xDomainSize;
    targ._xRangeSize = xRangeSize;
    targ._arryData = a_arryData;
    targ._xMinVal = xMinVal;
    targ._xMaxVal = xMaxVal;
    targ._fnYAxisConv = a_fnYAxisConv;

    targ._mousedown = false;

    targ._tooltip = new Tooltip(targ.parentNode); 

    targ.onmousedown = function(e) {
        this._mousedown = true;
        this._dragpoint = { "x": e.offsetX, "y": e.offsetY, "scrollLeft": document.body.scrollLeft };
        this._tooltip.Hide();
    }
    targ.onmouseup = function(e) {
        this._mousedown = false;
        this._dragpoint = undefined;
    }

    targ.onmousemove = function(e) {
        if (this._mousedown === false) {
            //tooltip表示
            if (this._arryData === undefined ||
                this._arryData.length < 1)
                return; // data0件なら何もしない
            var ret = this._getValue(e);
            if (ret === undefined) return;
            this._tooltip.Update(ret, e.offsetX, e.offsetY);
        } else {
            //TODO: グラフをドラッグスクロールしたい
            //drag scroll
            //var curX = e.offsetX;
            //var diffX = 

        }
    }
    targ.onmouseout = function(e) {
        //console.log("mouse-out");
        this._tooltip.Hide();
    }
}

var POINTER_DIFF = 0;   //マウスポインタの先端位置と座標のずれ補正
function getValue(a_e) {
    var x = a_e.offsetX - POINTER_DIFF;
    x = x - this._xMargin;
    if (x < 0) return;  //経過時間が負の場合、表示不要
    var t = x * this._xDomainSize;
    t = Math.round(t/(this._xRangeSize));   //startからの経過時間(msec単位)

    var ms = t % 1000;          // ms部分取得
    var s = t - ms;             // sec部取得
    var s = s % (1000 * 60);    // secからmin部削除
    var m = t - s - ms;         // min部取得
    m = m / (1000*60);          // mを分単位に換算
    s = s / 1000;               // sを秒単位に換算
    s = ("00" + s).slice(-2);
    ms = ("000" + ms).slice(-3); 
    
    var elapsedTime = m+":"+s+":"+ms;

    //timeStamp値から最も近いindexを取得する
    t = t + this._xMinVal;
    if ( t < this._xMinVal) {
        //console.log("exit: t("+t+") < xMinVal("+this._xMinVal+")");
        return;
    }
    if ( t > this._xMaxVal) {
        //console.log("exit: t("+t+") > xMaxVal("+this._xMaxVal+")");
        return;
    }
    var idx = getIndex(this._arryData, t);
    
    //surata
    var dispTime = elapsedTime;
    if (timeState === TIME_DATE) {
        dispTime = getDateTime(t);
    } else if (timeState === TIME_EPOCH) {
        dispTime = t;
    }

    if (this._arryData[idx] === undefined)
        console.log("debug: undefined");
    var ret = {};
    ret.time = "time:"+dispTime;
    ret.value = "val:" + this._fnYAxisConv( this._arryData[idx].value );
    return ret;
} 

function getDateTime(a_t) {

    var date = new Date(a_t);
    var ms = a_t % 1000;
    //console.log(t);
    var format = "YY/MM/DD hh:mm:ss.SSS";
    format = format.replace(/YY/g, ('0' + date.getFullYear()).slice(-2));
    format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
    format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
    format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
    format = format.replace(/SSS/g, ('000' + ms).slice(-3));
    
    return format;
}

function getIndex(a_arryData, a_time) {
    var len = a_arryData.length - 1;
    var i, j;
    var len1 = Math.floor(len/100);

    //100単位でa_timeに該当するindex範囲を探す
    if (len1 > 0) {
        for (i=0; i<len1; i++) {
            if (a_arryData[i*100].time < a_time) {

                if (a_arryData[(i+1) * 100] === undefined)
                    console.log("debug: undefined");

                if (i+1 > len1 || 
                    a_arryData[(i+1) * 100].time > a_time)
                    break;
            }
        }
    } else {
        i=0;
    }
    //狭めたindex範囲で、a_timeより小さく、a_timeに最も近い
    //timeStampをもつindexを見つける
    var max = (i+1) * 100;
    if (max > len)
        max = len;
    for (j= i*100; j<max; j++) {
        if (a_arryData[j].time < a_time) {
            if ((j+1) > max ||
                a_arryData[(j+1)].time > a_time)
                break;
        }
    }
    return j;
}


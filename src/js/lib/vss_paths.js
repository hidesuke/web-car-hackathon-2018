const GPS_LATITUDE  = 'Signal.Cabin.Infortainment.Navigation.Currentlocation.Latitude';
const GPS_LONGITUDE = 'Signal.Cabin.Infortainment.Navigation.Currentlocation.Longitude';   //lng
const GPS_ALTITUDE  = 'Signal.Cabin.Infortainment.Navigation.Currentlocation.Altitude';    //alt
const GPS_HEADING   = 'Signal.Cabin.Infortainment.Navigation.Currentlocation.Heading';     //head
const GPS_SPEED     = 'Signal.Cabin.Infortainment.Navigation.Currentlocation.Speed';       //speed

const VEHICLE_SPEED = 'Signal.Drivetrain.Transmission.Speed';
const ENGINE_SPEED  = 'Signal.Drivetrain.InternalCombustionEngine.RPM';
const STEER_ANGLE   = 'Signal.Chassis.SteeringWheel.Angle';
const ACCEL_PEDAL   = 'Signal.Chassis.Accelerator.PedalPosition'; //AccelPedal
const BRAKE_PEDAL   = 'Signal.Chassis.Brake.PedalPosition';       //BrakePedal
const PARKINGBRAKE  = 'Signal.Chassis.ParkingBrake.IsEngaged';    //ParkingBrake
const ACCEL_X = 'Signal.Vehicle.Acceleration.X';    //Accel-x
const ACCEL_Y = 'Signal.Vehicle.Acceleration.Y';    //Accel-y
const ACCEL_Z = 'Signal.Vehicle.Acceleration.Z';    //Acdel-z

const GYRO_X = 'Signal.Vehicle.Acceleration.Pitch';   //Gyro-x
const GYRO_Y = 'Signal.Vehicle.Acceleration.Roll';    //Gyro-y
const GYRO_Z = 'Signal.Vehicle.Acceleration.Yaw';     //Gyro-z

const GEAR = 'Signal.Drivetrain.Transmission.Gear';              //Gear
const FUEL_LEVEL  = 'Signal.Drivetrain.FuelSystem.Level';               //FuelLevel
const FUEL_COMSUM = 'Signal.Drivetrain.FuelSystem.instantConsumption';  //instantFuelConsum
const DISTANCE_TOTAL = 'Signal.OBD.DistanceWithMIL';             //distanceTotal
const DOOR_FR   = 'Signal.Cabin.Door.Row1.Right.IsOpen';    //Door(f-r)     //Zone項目
const DOOR_FL = 'Signal.Cabin.Door.Row1.Left.IsOpen';     //Door(f-l)     //Zone項目
const BELT_FR = 'Signal.Cabin.Seat.Row1.Pos1.IsBelted';   //Seatbelt(f-r) //Zone項目

const LIGHT_LOWBEAM  = 'Signal.Body.Light.IsLowBeamOn';  //HeadLight
const LIGHT_HIGHBEAM = 'Signal.Body.Light.IsLowBeamOn';  //HeadLight
const LIGHT_BRAKE    = 'Signal.Body.Light.IsBrakeOn';    //BrakeLight
const LIGHT_PARKING  = 'Signal.Body.Light.IsParkingOn';  //ParkingLight

// === Sensor Data Path
const DRV_AWAKENESS     = 'Private.Signal.Driver.Awakeness';
const DRV_ATTENTIVENESS = 'Private.Signal.Driver.Attentiveness';
const PAS_AWAKENESS     = 'Private.Signal.Passenger.Awakeness';
const PAS_ATTENTIVENESS = 'Private.Signal.Passenger.Attentiveness';
const BCK_AWAKENESS     = 'Private.Signal.Backseat.Awakeness';
const BCK_ATTENTIVENESS = 'Private.Signal.Backseat.Attentiveness';

// === iPhone/iWatch/Sdtech
const HEARTRATE       = 'Private.Signal.Driver.Heartrate';
const CONCENTRATION   = 'Private.Signal.Driver.Concentration';
const IP_ALTITUDE     = 'Private.Signal.Driver.Altitude' // Altitude of driver device
const IP_ATOMPRESSURE = 'Signal.OBD.BarometricPressure'

// === MESH
const MESH_TEMPERATURE = 'Signal.Cabin.HVAC.AmbientAirTemperature';
const MESH_HUMIDITY    = 'Signal.Cabin.HVAC.AmbientAirHumidity';
const MESH_TRUNK       = 'Signal.Body.Trunk.IsOpen';

// === Bocco
const BOCCO_AIRCON = 'Signal.Cabin.HVAC.IsAirConditioningActive';
const BOCCO_WINDOW = 'Signal.Cabin.Door.Row1.Right.Window.Position';
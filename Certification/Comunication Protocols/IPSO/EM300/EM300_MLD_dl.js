"use strict";

const channel = Encoder.data.channel;
const value = Encoder.data.value;


//1. Reboot 
//ff 10 ff
if (channel == "reboot") {
	if (value > 0) {
        let payload = Buffer.from("ff10ff", "hex");
        Encoder.send(payload, 85);//Fport = 85
	}
}

// 2. Collect Interval 
// ff 02 XXXX
if (channel == "collect_interval") {
	//let interval = Math.round(value * 60);
    //Validate whether input is legal
	if (value > 0) {
        //Default = 58 02 = 02 58 = 600 second
        let payload = Buffer.from("ff025802", "hex");
        payload.writeUIntLE(value, 2, 2);
        Encoder.send(payload, 85);//Fport = 85
	}
}

// 3. Report Interval 
// ff 03 XXXX
if (channel == "report_interval") {
	//let interval = Math.round(value * 60);
    //Validate whether input is legal
	if (value > 0) {
        //Default = 58 02 = 02 58 = 600 second
        let payload = Buffer.from("ff035802", "hex");
        payload.writeUIntLE(value, 2, 2);
        Encoder.send(payload, 85);//Fport = 85
	}
}

// 4. Threshold Alarm

// 5. D2D settings

// 6. Data Storage

// 7. Data Retransmission

// 8. Data Retransmission Interval
// ff 6a 00 xxxx
// Ne
if (channel == "data_retransmission_interval") {
	//let interval = Math.round(value * 60);
    //range 30-1200, 600 by default
	if (value >= 30&& value <=1200) {
        //Default = 58 02 = 02 58 = 600 second
        let payload = Buffer.from("ff6a005802", "hex");
        payload.writeUIntLE(value, 3, 2);
        Encoder.send(payload, 85);//Fport = 85
	}
    else
    {
        console.log("")
    }
}

/*else if (channel == "status"){
    let payload = Buffer.from("0A01", "hex");
    if(value == 2){
        payload.writeInt8(2, 1)
    }
    Encoder.send(payload, 1);
}*/

Encoder.done();
export function validateAddress(zipcode) {
    // let acceptedZips = [32789, 32801, 32803, 32804, 32805, 32806, 32807, 32808, 32809,32810, 32811, 32812, 32814, 32819, 32822, 32824, 32827, 32829, 32832, 32835, 32839];
    // let match = acceptedZips.find(index => index === zipcode)
    
    //    if(match === undefined){
    //     return false
    //    }
    //    else {
    //     return true
    //    }
    console.log(zipcode)
};

export function toTimestamp(apptTime){
    var datum = Date.parse(apptTime);
    return datum/1000;
 };



// export function ourNewDateFormat(apptDate) {
//     let datePickerDate = "2023-02-14T22:30:00.000Z";
//     let timestamp = new Date(datePickerDate).getTime();
//     let Day = new Date(timestamp).getDate();
//     let Month = new Date(timestamp).getMonth() + 1;
//     let Year = new Date(timestamp).getFullYear();
//     let ourNewDateFormat = `${Month}/${Day}/${Year}`;

// }
// let datePickerDate = {apptDate};
// let timestamp = new Date(datePickerDate).getTime();
// let Day = new Date(timestamp).getDate();
// let Month = new Date(timestamp).getMonth() + 1;
// let Year = new Date(timestamp).getFullYear();

// let ourNewDateFormat = `${Month}/${Day}/${Year}`;
// // console.log("Timestamp:" +timestamp);
// // console.log("Day" + Day);
// // console.log("Month" + Month);
// // console.log("Year" + Year);
// console.log("Our New Date Format:" + ourNewDateFormat);





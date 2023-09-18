// Utility functions for the app, like the one below, can be kept in the utils folder.

function compareTime(timeString1, timeString2){
    // Creating objects
    let dateTime1 = new Date(timeString1);
    let dateTime2 = new Date(timeString2);

    return dateTime1.getTime() > dateTime2.getTime();
}

module.exports = {
    compareTime
}
'use strict';

//==============================================================================================================================
// HOUR / DATE FUNCTIONS


var weekDays = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
var months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

function getHoursString(timeString) {
    return parseInt(timeString.slice(0, 2));
}

function getMinutesString(timeString) {
    return parseInt(timeString.slice(2, 4));
}

function getDayNumber(datetimeObject){
    var numDay = datetimeObject.day()-1;
    if (numDay === -1)
        numDay = 6;
    return numDay;
}

//CREATE A MAP FROM A LIST OR AN OBJECT OF OBJECT
function makeMap(objects, expectedKey){
    var myMap = new Map();

    // objects.keys().forEach(function(key){
    //     myMap.set(objects[key][expectedKey], objects[key]);
    // })

    for (var key in objects){
        myMap.set(objects[key][expectedKey], objects[key]);
    }

    return myMap;
}

//CREATE A LIST FROM A MAP
function makeListFromMap(map){
    var myList = [];

    map.forEach(function(value){
        myList.push(value);
    });

    return myList;
}


//##############################################################################################################################
// EXPORT

module.exports = {
    weekDays: weekDays,
    months: months,
    getHoursString: getHoursString,
    getMinutesString: getMinutesString,
    getDayNumber: getDayNumber,
    makeMap: makeMap,
    makeListFromMap: makeListFromMap
};

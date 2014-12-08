//Database setup and data collection
//==================================
//db.js
//-----
//Author: Brian Newsom

//Date created: 12/7/2014

// Initialize parse db with our app id
Parse.initialize("9JEGewyTvyyfbwrupDZ86K784uDoA43x4x68e9fw", "o6arckH86PkZXq7smh21jZtrYzkfDxf4JlJVpYs3");


// Stores all the fields in the PARSE database.
// * Data is stored in JSON format
function storeEntry() {
    var Entry = Parse.Object.extend("Entry");
    var entry = new Entry();

    data = getFieldsAsJSON();
    entry.save(data).then(function(object) {
        console.log("Successfully stored user data in Parse.")
    });
}

//Helper function to retrieve values from the form elements
function getFieldsAsJSON(){
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    var distance = document.getElementById('distance').value;
    var mileage = document.getElementById('mileage').value;
    var passengers = document.getElementById('passengers').value;
    var gasPrice = document.getElementById('gasPrice').value;
    var distanceUnits = '';
    var mileageUnits = '';
    var gasPriceUnits = '';

//Checking for units
    if ((unitsGlobal) == "Metric"){
        distanceUnits = "km";
        mileageUnits = "km/l";
        gasPriceUnits = "Per Liter";
    }
    else{
        distanceUnits = "mi";
        mileageUnits = "mi/g";
        gasPriceUnits = "Per Gallon";
    }
    var returnJSONObj = {"start" : start, "end" : end, "distance" : distance + ' ' + distanceUnits,
        "mileage" : mileage + ' ' + mileageUnits, "passengers" : passengers, "gasPrice": gasPrice + ' ' + gasPriceUnits
    }

    return returnJSONObj;
}

// Initialize parse db with our app id
Parse.initialize("9JEGewyTvyyfbwrupDZ86K784uDoA43x4x68e9fw", "o6arckH86PkZXq7smh21jZtrYzkfDxf4JlJVpYs3");



function storeEntry() {
    // Store individual entry of passthegas submission - called each complete input
    var Entry = Parse.Object.extend("Entry");
    var entry = new Entry();

    data = getFieldsAsJSON();
    entry.save(data).then(function(object) {
        console.log("Successfully stored user data in Parse.")
    });
}

function getFieldsAsJSON(){
    // Generates JSON object for storeEntry to store in parse;
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    var distance = document.getElementById('distance').value;
    var mileage = document.getElementById('mileage').value;
    var passengers = document.getElementById('passengers').value;
    var gasPrice = document.getElementById('gasPrice').value;
    var distanceUnits = '';
    var mileageUnits = '';
    var gasPriceUnits = '';

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

// Author: Brian Newsom
// Date : Dec 4, 2014
// unitTests.js - Tests run by test.html to troubleshoot js code.

var tolerance = .01;

function assertEqual(result,actual,tolerance){
    if (Math.abs(result - actual) < tolerance){
        return 0;
    }
    else{
        console.log("Test failed")
        console.log("Result was: " + String(result) + " Expected " + String(actual));
        return 1;
    }
}

function runTest(name, test){
    console.log("Running Test: " + name + "...");
    return test();
}

function testToMiles(){
    var actual = 106.876;
    var km = 172;
    var miles = toMiles(km);
    assertEqual(miles,actual,tolerance);
}

function testCalculateCosts() {
    var actual = .51;
    var distance = 12;
    var mileage = 28;
    var gasPrice = 2.36;
    var passengers = 2;
    var price = Math.round((distance/mileage * gasPrice/passengers * 100)) / 100;
    assertEqual(price,actual, tolerance);
}

function testNavigateDistance() {
    var actual = 42;
    var result = calcDistance("827 Langdale Drive", "3685 Moorhead Avenue", "Metric");
    assertEqual(result,actual,tolerance);
}

runTest("TestToMiles",testToMiles);
runTest("TestCalculateCosts",testCalculateCosts);
runTest("TestNavigateDistance",testNavigateDistance);


var numberOf;
var Units;

//Function to get the data from user
function getFormData() {
    numberOf = document.getElementById("NumberOf").value;
    Units = document.getElementById("Units").value;
    console.log(Units, numberOf);
    if (Units == "Kilometers") {
        loadVisualsKM();
    }
    else if (Units == "Liters") {
        loadVisualsL();
    }
    else if (Units == "Grams") {
        loadVisualsG();
    }
    else if (Units == "Newtons") {
        loadVisualsN();
    }
}

function loadVisualsKM() {
    var n = getRandomInt(3);
    if (n == 1) {   //walking. speed from https://en.wikipedia.org/wiki/Walking
        var TimeUn = numberOf / 0.083;
        var Time = Math.round(TimeUn);
        document.getElementById("InfoHeader").innerHTML = "It would take you about " + Time + " miuntes to walk " + numberOf + " kilometers";
    } else if (n == 2) {    //driving. speed from https://www.omnicalculator.com/everyday-life/speed
        var TimeUn = numberOf / 1.333333333;
        var Time = Math.round(TimeUn);
        document.getElementById("InfoHeader").innerHTML = "It would take you about " + Time + " miuntes to drive (economicly) " + numberOf + " kilometers";
    } else {
        var TimeUn = numberOf / 0.391666667;
        var Time = Math.round(TimeUn);
        document.getElementById("InfoHeader").innerHTML = "It would take you about " + Time + " miuntes to bike " + numberOf + " kilometers";
    }
    return;
}

function loadVisualsL() {
    var n = getRandomInt(3);
    if (n == 1) {
        //Lieters to fill a red party cup. amount from https://www.solocup.com/products/18-oz-plastic-party-cup/
        var TimeUn = numberOf / 0.532324;
        var Time = Math.round(TimeUn);
        document.getElementById("InfoHeader").innerHTML = numberOf + " lieters would fill about " + Time + " standard party cups";
    }
    else if (n == 2) {
        //Lieters to fill a olympic swimming pool. ammount from https://www.patagoniaalliance.org/wp-content/uploads/2014/08/How-much-water-does-an-Olympic-sized-swimming-pool-hold.pdf
        var TimeUn = numberOf / 2500000;
        var Time = TimeUn;
        document.getElementById("InfoHeader").innerHTML = numberOf + " lieters would fill about " + Time + " olympic swimming pools";
    }
    else {
        //Lieters to fill a milk jug (1 gallon). ammount from google converter
        var TimeUn = numberOf / 4.54609;
        var Time = Math.round(TimeUn);
        document.getElementById("InfoHeader").innerHTML = numberOf + " lieters would fill about " + Time + " milk jugs (1 gal)";
    }
}

function loadVisualsG() {
    var n = getRandomInt(3);
    if (n == 1) {
        //Chaey Taho. Mass from https://media.gm.com/media/us/en/chevrolet/vehicles/tahoe/2018.tab1.html 4 wheel drive modle, converted with google converter.
        var TimeUn = numberOf / 2554000;
        var Time = TimeUn;
        document.getElementById("InfoHeader").innerHTML = numberOf + " grams is about " + Time + "  Chevrolet Tahoes (2018, 4 wheel drive)";
    }
    else if (n == 2) {
        //gallon of watter. Mass from https://study.com/academy/answer/how-much-does-one-gallon-of-water-weigh.html
        var TimeUn = numberOf / 3785;
        var Time = Math.round(TimeUn);
        document.getElementById("InfoHeader").innerHTML = numberOf + " grams is about " + Time + " gallons of watter.";
    }
    else {
        //iPhone X. Mass from https://www.google.com/search?q=iphone+10+weight+in+grams&rlz=1C5CHFA_enUS883US883&oq=iPhone+10+weight&aqs=chrome.1.0l8.6890j1j7&sourceid=chrome&ie=UTF-8
        var TimeUn = numberOf / 174;
        var Time = Math.round(TimeUn);
        document.getElementById("InfoHeader").innerHTML = numberOf + " grams is about " + Time + " iPhone Xs.";
    }
}

function loadVisualsN() {
    var n = getRandomInt(3);
    if (n == 1) {
        //force produced by the first stage of the falcon9, at sea leaval. From: https://www.spacex.com/falcon9
        var TimeUn = numberOf / (7607 * 1000);
        var Time = TimeUn;
        document.getElementById("InfoHeader").innerHTML = numberOf + " newtons is " + Time + " times the force produced by the Falcon 9's first stage rocket"
    }
    else if (n == 2) {
        //force required to lift a bolwing ball. Math from https://www.calculatorsoup.com/calculators/physics/force.php 
        var TimeUn = numberOf / 4.14765;
        var Time = Math.round(TimeUn);
        document.getElementById("InfoHeader").innerHTML = numberOf + " newtons could lift " + Time + " ten lbs bollowing balls at an acceleration of 3ft/s"

    }
    else {
        //force required to break an egg. From https://www.njeffersonnews.com/slate-the-physics-of-cracking-an-egg/article_aee37af3-6d76-54e0-bdad-7f799d5c1136.html. Converted with google copnverter
        var TimeUn = numberOf / 24.4652;
        var Time = Math.round(TimeUn);
        document.getElementById("InfoHeader").innerHTML = numberOf + " newtons could break " + Time + " eggs."
    }
}



//From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
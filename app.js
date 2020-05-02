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
    else if (Units == Newtons) {
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
        var Time =  TimeUn;
        document.getElementById("InfoHeader").innerHTML = numberOf + " lieters would fill about " + Time + " olympic swimming pools";
    }
    else {
        //Lieters to fill a milk jug (1 gallon). ammount from google converter
        var TimeUn = numberOf / 4.54609;
        var Time = Math.round(TimeUn);
        document.getElementById("InfoHeader").innerHTML = numberOf + " lieters would fill about " + Time + " milk jugs (1 gal)";
    }
}

//From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
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

//From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random:
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
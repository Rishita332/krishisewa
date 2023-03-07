
    var crop_arr = ["Rice", "Maize", "Chickpea", "Kidneybeans", "Pigeonpeas", "Mothbeans", "Mungbean", "Blackgram", "Lentil", "Pomegranate"
    , "Banana", "Mango", "Grapes", "Watermelon", "Muskmelon", "Apple", "Orange", "Papaya", "Coconut", "Cotton", "Jute", "Coffee"];

var N_arr = [80, 80, 40, 20, 20, 20, 20, 40, 20, 20, 100, 20, 20, 100, 100, 20, 20, 50, 20, 120, 80, 100];
var P_arr = [40, 40, 60, 60, 60, 40, 40, 60, 60, 10, 75, 20, 125, 10, 10, 125, 10, 50, 10, 40, 40, 20];
var K_arr = [40, 20, 80, 20, 20, 20, 20, 20, 20, 40, 50, 30, 200, 50, 50, 200, 10, 50, 30, 20, 40, 30];

var N, K, P, crop, selectElement, index, output;
output = document.getElementById("answer");
output.textContent = "";



function getval() {

    N = document.getElementById("N").value;
    P = document.getElementById("P").value;
    K = document.getElementById("K").value;
    selectElement = document.querySelector('#crop_id');
    crop = selectElement.value;

    if(!N||!P||!K||!crop){
        alert("Please fill out all fields!");
        return;
    }
    console.log(crop);
    console.log(N);
    console.log(P);
    console.log(K);

    for (var i = 0; i < 22; i++) {
        if (crop_arr[i] == crop) {
            index = i;
            break;
        }
    }
    output.innerHTML = "";
    document.getElementById("blog").style.display = "none";
    document.getElementById("highN").style.display = "none";
    document.getElementById("highK").style.display = "none";
    document.getElementById("highP").style.display = "none";
    document.getElementById("lowN").style.display = "none";
    document.getElementById("lowP").style.display = "none";
    document.getElementById("lowK").style.display = "none";


    console.log(index);
    document.getElementById("blog").style.display = "block";
    if (N - N_arr[index] > 5) {
        console.log("High Nitrogen value");
        output.textContent += "High Nitrogen value, ";
        document.getElementById("highN").style.display = "block";
    }
    else if (N_arr[index] - N > 5) {
        console.log("Low Nitrogen value");
        output.textContent += "Low Nitrogen value, ";
        document.getElementById("lowN").style.display = "block";
    }
    else {
        console.log("Optimum Nitrogen value");
        output.textContent += "Optimum Nitrogen value, ";

    }
    if (P - P_arr[index] > 5) {
        console.log("High Phosphorus value");
        output.textContent += "High Phosphorus value and ";
        document.getElementById("highP").style.display = "block";
    }
    else if (P_arr[index] - P > 5) {
        console.log("Low Phosphorus value");
        output.textContent += "Low Phosphorus value and ";
        document.getElementById("lowP").style.display = "block";
    }
    else {
        console.log("Optimum Phosphorus value");
        output.textContent += "Optimum Phosphorus value and ";
    }
    if (K - K_arr[index] > 5) {
        console.log("High Potassium value");
        output.textContent += "High Potassium value";
        document.getElementById("highK").style.display = "block";
    }
    else if (K_arr[index] - K > 5) {
        console.log("Low Potassium value");
        output.textContent += "Low Potassium value";
        document.getElementById("lowK").style.display = "block";
    }
    else {
        console.log("Optimum Potassium value");
        output.textContent += "Optimum Potassium value";
    }
}
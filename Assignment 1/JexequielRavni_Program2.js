const numberOfPatients = 2;
const cleaningRate = 60;
const cavityFillingRate = 200;
const xrayRate = 100;
const taxRate = .15;

for (var i = 0; i < numberOfPatients; i++) {
    GetPatientInfo();
}

function GetPatientInfo() {
    var patientName = prompt("Enter patient's name: ");
    var isCleaned = prompt("Was cleaning performed? (y/n) ") == 'y' ? true : false;
    var isCavityFilled = prompt("Was cavity-filling performed? (y/n) ") == 'y' ? true : false;
    var isXrayPerformed = prompt("Was X-Ray performed? (y/n) ") == 'y' ? true : false;

    var subTotal = ComputeSubTotal(isCleaned, isCavityFilled, isXrayPerformed);
    var tax = ComputeTax(subTotal, taxRate);
    var total = ComputeTotal(subTotal, tax);

    GenerateReceipt(patientName, subTotal, tax, total);
}

function ComputeSubTotal(isCleaned, isCavityFilled, isXrayPerformed) {
    var totalCost = 0;
    
    isCleaned ? totalCost += cleaningRate : 0 ;
    isCavityFilled ? totalCost += cavityFillingRate : 0 ;
    isXrayPerformed ? totalCost += xrayRate : 0 ;

    return totalCost;
}

function ComputeTax(subTotal, taxRate) {
    return subTotal * taxRate;
}

function ComputeTotal(subTotal, tax) {
    return subTotal + tax;
};

function GenerateReceipt(patientName, subtotal, tax, total) {
    var p = document.getElementById('container');
    
    var toAdd = 
    "<center>" +
    "<br>" +
    "Receipt for patient name: " + patientName + "<br>" +
    "------------------------" + "<br>" +
    "Subtotal: " + subtotal + "<br>" +
    "Tax: " + tax + "<br>" +
    "-------------" + "<br>" +
    "Total: " + total; + "<br>";

    p.innerHTML += toAdd;
}
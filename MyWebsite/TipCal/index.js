const inputBill = document.getElementById("bill");
const inputTip = document.getElementById("tip");
const btnCal = document.getElementById("calculate");
const totalSpan = document.getElementById("total");

function calculateTotal(){
    const billValue = Number(inputBill.value);
    const tipValue = Number(inputTip.value);
    const totalValue = billValue + (billValue * (tipValue / 100));

    totalSpan.innerText = totalValue;
}

btnCal.addEventListener("click", calculateTotal);


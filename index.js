const inputEl  = document.getElementById("pounds");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");

let errorTime;
let resultTime;

function updateResults(){
    if (inputEl.value <= 0 || isNaN(inputEl.value)){
        errorEl.innerText = "Please enter a Valid Number";
        clearTimeout(errorTime);
        errorTime = setTimeout(() => {
            errorTime.innerText = "";
            inputEl.value = "";
        }, 2000);
    } else {
        resultEl.innerText = (+inputEl.value/2.2).toFixed(2);
        clearTimeout(resultTime);
        resultTime = setTimeout(() => {
            resultTime.innerText = "";
            inputEl.value = "";
        }, 10000);
    }
}

inputEl.addEventListener("input",updateResults)
    
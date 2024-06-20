const BaseURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/"

const optionsAll = document.querySelectorAll(".dropdown select");
const button = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const message = document.querySelector(".msg");

window.addEventListener("load",()=>{
    getExchangeValue();
});

for (options of optionsAll){
for (code in countryList){
    let option = document.createElement("option");
    options.append(option);
    option.innerHTML = code;
    option.value = code;
    if (options.name=="from" && code=="USD"){
        option.selected = "selected";
    }
    if (options.name=="to" && code=="INR"){
        option.selected = "selected";
    }
}
    options.addEventListener("change",(evt)=>{
        console.log(evt.target.value);
        updateFlag(evt.target);
    }
);
}

const updateFlag = (input)=>{
    let code = input.value;
    let countryCode = countryList[code];
    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    input.parentElement.querySelector("img").src = newsrc;
};

button.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    getExchangeValue();
});

const getExchangeValue = async ()=>{
    let amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    if(amountVal==""||amountVal<1){
        amountVal = 1;
        amount.value = 1;
    }
    console.log(fromCurr.value, toCurr.value);
    console.log(amountVal);
    const URL = `${BaseURL}${fromCurr.value.toLowerCase()}.json`;
    message.innerText = "GETTING LATEST RATE"
    let response = await fetch(URL);
    responseReadable = await response.json();
    let exchangeValue = responseReadable[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    message.innerText = `${amount.value} ${fromCurr.value} = ${exchangeValue*amount.value} ${toCurr.value}`; 
}
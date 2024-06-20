const optionsAll = document.querySelectorAll(".dropdown select");

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
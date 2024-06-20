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
}


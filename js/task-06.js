const input = document.querySelector("#validation-input");

input.addEventListener("blur", (e) => {
    const inputValueLength = e.currentTarget.value.length;
    const dataLength = Number(input.dataset.length);
    //console.log(inputValueLength, dataLength);
    if(inputValueLength === dataLength){
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
});

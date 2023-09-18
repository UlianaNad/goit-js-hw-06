const input = document.querySelector("#validation-input");

input.addEventListener("blur", (e) => {
    const inputValueLength = e.currentTarget.value.length;
    const dataLength = input.dataset.length;

    if(inputValueLength >= dataLength){
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else{
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
});

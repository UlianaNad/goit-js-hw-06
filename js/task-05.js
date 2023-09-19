const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {

  if(output.textContent != ""){
    output.textContent = event.currentTarget.value.trim(  );
  }
  if (output.textContent === "") {
    output.textContent = "Anonymous";
  }
});
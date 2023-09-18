
const refs = {
    form : document.querySelector('.login-form'),

}

refs.form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const emailValue = refs.form.elements.email.value;
    const passwordValue = refs.form.elements.password.value;

    if (emailValue && passwordValue){
        let user = {
            email:emailValue,
            password: passwordValue,
        }
        console.log(user);
    } else {
        alert("Fill all fields!")
    }
});

const refs = {
    form : document.querySelector('.login-form'),

}

refs.form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const emailValue = refs.form.elements.email.value.trim();
    const passwordValue = refs.form.elements.password.value.trim();

    if (emailValue && passwordValue){
        let user = {
            email:emailValue,
            password: passwordValue,
        }

        console.log(user);
        
        refs.form.reset();
        
    } else {
        alert("Fill all fields!")
    }
});
// Selects form and input HTML Elements from DOM
const form = document.querySelector("form");
const email = document.querySelector("input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let emailValue = email.value; // Saves input value

    if (validateEmail(emailValue)) {
        console.log("this is a valid email")
        form.classList.remove("error");
    }
    else {
        console.log("email is invalid")
        form.classList.add("error");
    }

})

function validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
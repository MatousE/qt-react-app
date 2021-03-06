document.getElementById("loginButton").addEventListener("click", myFunction);

function myFunction() {
    window.location.href = "homePage.html";
}



function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const forgotPasswordForm = document.querySelector("#forgotPassword");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    document.querySelector("#linkForgotPassword").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        forgotPasswordForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLoginAgain").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        forgotPasswordForm.classList.add("form--hidden");
    });

    document.querySelector("#linkCreateAccountAgain").addEventListener("click", e => {
        e.preventDefault();
        createAccountForm.classList.remove("form--hidden");
        forgotPasswordForm.classList.add("form--hidden");
    });


    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username-password combination");
    });

    forgotPasswordForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(forgotPasswordForm, "error", "Invalid e-mail address");
    });




    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupPassword" && e.target.value.length > 0 && e.target.value.length < 8) {
                setInputError(inputElement, "Password must be at least 8 characters");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});

document.getElementById("contact").onclick = function() {

    document.getElementById("contact").style.display = "none";

}
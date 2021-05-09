import React, { Component} from 'react';
import './main.css';

class Home extends Component {
    render(){
        return (
            <body>
                <div className="container">
                    <form className="form" id="login">
                        <h1 className="form__title">Login</h1>
                        <div className="form__message form__message--error"></div>
                        <div className="form__input-group">
                            <input type="text" className="form__input" autoFocus placeholder="Username or email"/>
                                <div className="form__input-error-message"></div>
                        </div>
                        <div className="form__input-group">
                            <input type="password" className="form__input" autoFocus placeholder="Password"/>
                                <div className="form__input-error-message"></div>
                        </div>
                        <button className="form__button" type="submit">Continue</button>

                        <p className="form__text">
                            <a className="form__link" href="./" id="linkForgotPassword">Did you forget your password?</a>
                        </p>
                        <p className="form__text">
                            <a className="form__link" href="./" id="linkCreateAccount">Creat a new account</a>
                        </p>

                    </form>
                    <form className="form form--hidden" id="createAccount">
                        <h1 className="form__title">Create Account</h1>
                        <div className="form__message form__message--error"></div>
                        <div className="form__input-group">
                            <input type="text" className="form__input" autoFocus placeholder="Company Name"/>
                                <div className="form__input-error-message"></div>
                        </div>
                        <div className="form__input-group">
                            <input type="text" className="form__input" autoFocus placeholder="Username"/>
                                <div className="form__input-error-message"></div>
                        </div>
                        <div className="form__input-group">
                            <input type="text" className="form__input" autoFocus placeholder="E-mail Address"/>
                                <div className="form__input-error-message"></div>
                        </div>
                        <div className="form__input-group">
                            <input type="text" className="form__input" autoFocus placeholder="Phone Number"/>
                                <div className="form__input-error-message"></div>
                        </div>
                        <div className="form__input-group">
                            <input type="password" id="signupPassword" className="form__input" autoFocus
                                   placeholder="Password"/>
                                <div className="form__input-error-message"></div>
                        </div>
                        <div className="form__input-group">
                            <input type="password" className="form__input" autoFocus placeholder="Confirm Password"/>
                                <div className="form__input-error-message"></div>
                        </div>
                        <button className="form__button" type="submit">Continue</button>


                        <p className="form__text">
                            <a className="form__link" href="./" id="linkLogin">Already have an account? Sign in</a>
                        </p>

                    </form>
                    <form className="form form--hidden" id="forgotPassword">
                        <h1 className="form__title">Forgot Password</h1>
                        <div className="form__message form__message--error"></div>
                        <div className="form__input-group">
                            <input type="text" className="form__input" autoFocus placeholder="E-mail Address"/>
                                <div className="form__input-error-message"></div>
                        </div>
                        <button className="form__button" type="submit">Send Reset Code</button>

                        <p className="form__text">
                            <a className="form__link" href="./" id="linkLoginAgain">Do you have a Password? Sign in</a>
                        </p>
                        <p className="form__text">
                            <a className="form__link" href="./" id="linkCreateAccountAgain">Don't you have an account?
                                Create Account</a>
                        </p>
                    </form>

                </div>
                <script src="./main.js"/>
            </body>
        );
    }
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
export default Home;
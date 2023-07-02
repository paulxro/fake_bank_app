import React, { useEffect } from 'react';

import { handleLogin } from './utils/LoginHandler';
import { 
    verifyValidUsernameInput, 
    verifyValidPasswordInput, 
    updateInputField,
    resetInputField
} from './utils/LoginInputValidator';

import './css/LoginForm.css'

const LoginForm = (): JSX.Element => {
    useEffect(() => {
        const usernameInput: HTMLInputElement | null = document.querySelector('#username');
        const passwordInput: HTMLInputElement | null = document.querySelector('#password');

        usernameInput?.addEventListener('blur', () => {
            if(!usernameInput.value.length) { resetInputField(usernameInput); }
            else verifyValidUsernameInput(usernameInput.value).then(isValid => {
                updateInputField(usernameInput, isValid);
            });
        });

        passwordInput?.addEventListener('blur', () => {
            if(!passwordInput.value.length) { resetInputField(passwordInput); }
            else verifyValidPasswordInput(passwordInput.value).then( isValid => {
                updateInputField(passwordInput, isValid);
            });
        });
    }, []);
    
    
    return (
        <>
            <form className="login-form-wrapper" onSubmit={handleLogin}>
                <div className="login-form-info-section">
                    <div className="login-form-info-username">
                        <label htmlFor="username" className="login-form-input-label" >Username</label>
                        <input type="text" name="username" id="username" className="login-form-input" autoComplete='off'/>
                    </div>
                    <div className="login-form-info-password">
                        <label htmlFor="password" className="login-form-input-label">Password</label>
                        <input type="password" name="password" id="password" className="login-form-input" autoComplete='off'/>
                    </div>
                </div>
                <div className="login-form-submit-wrapper">
                    <button type="submit" className="login-form-submit-button">Sign In</button>
                </div>
                

            </form>
        </>
    )
}


export default LoginForm;
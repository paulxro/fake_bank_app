const LOWER_ALPHA_BOUND = 'A'.charCodeAt(0);
const UPPER_ALPHA_BOUND = 'z'.charCodeAt(0);

/*
    Santizes the username input field.

    Ensures that the username is all alphabetic characters and is not empty.
*/
export const verifyValidUsernameInput= async (username: string): Promise<boolean> => {
    if(!username.length) return false;

    for(let c of username) {
        const charCode = c.charCodeAt(0);
        if(charCode < LOWER_ALPHA_BOUND || charCode > UPPER_ALPHA_BOUND) {
            return false;
        }
    }

    return true;
}

/*
    Santizes the password input field.

    Ensures that the password is not empty.

    No other checks are performed, though they can be added here.
*/
export const verifyValidPasswordInput = async (password: string): Promise<boolean> => {
    if(!password.length) return false;

    return true;     
}

/*
    Updates the appearance of the input field based on the validity of the input.
*/
export const updateInputField = (inputField: HTMLInputElement, isValid: boolean): void => {
    if(isValid) {
        inputField.style.border = '2px solid green';
    } else {
        inputField.style.border = '2px solid red';
    }
}

export const resetInputField = (inputField: HTMLInputElement): void => {
    inputField.style.border = '2px solid var(--navbar-color)';
}


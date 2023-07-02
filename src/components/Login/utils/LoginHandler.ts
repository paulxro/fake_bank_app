import axios, { AxiosResponse } from 'axios';
import secureLocalStorage from 'react-secure-storage';

interface IUserData {
    name: string;
    discriminant: string;
}

interface ISessionData {
    JWT: string;
}

interface ILoginResponse {
    userData: IUserData;
    sessionData: ISessionData;
}

export const handleLogin = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault(); // Prevents page from reloading

    const target: HTMLFormElement = event.currentTarget;

    const username = target.username.value;
    const password = target.password.value;

    const loginResponse: AxiosResponse = await axios.post('http://localhost:5000/api/login', {
        'userData': {
            username: username,
            password: password
        },
        'metaData': {
            'userAgent': navigator.userAgent
        }
    });

    const loginData: ILoginResponse = loginResponse.data;

    const userData: IUserData = loginData.userData;
    const sessionData: ISessionData = loginData.sessionData;

    // Set sessionJWT
    secureLocalStorage.setItem('sessionJWT', sessionData.JWT);

    // Set userContext
    secureLocalStorage.setItem('userContext', JSON.stringify({
        name: userData.name,
        discriminant: userData.discriminant,
    }));

    // Refresh page
    window.location.reload();

    // Update 
}
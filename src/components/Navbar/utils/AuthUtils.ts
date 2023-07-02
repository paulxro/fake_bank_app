import axios, { AxiosResponse } from "axios";
import secureLocalStorage from 'react-secure-storage';

export const logoutUser = (): void => {
    // Unset sessionJWT and userContext
    secureLocalStorage.removeItem('sessionJWT');
    secureLocalStorage.removeItem('userContext');

    window.location.reload();
}


export const verifySession = async (sessionJWT: string): Promise<void> => {
    await axios.post('http://localhost:5000/api/verifySession', {
        sessionJWT: sessionJWT
    }).then((response: AxiosResponse) => {
        if(response.status !== 200) { logoutUser(); }
    }).catch((error: any) => {
        console.log(error);
        logoutUser();
    });
}


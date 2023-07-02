import { createContext } from 'react';

interface ILoginResponse {
    name: string;
    sessionJWT: string;
    discriminant: string;
    theme: string;
}

export const userContext = createContext({
    name: '',
    sessionJWT: '',
    discriminant: '',
    theme: '',
});
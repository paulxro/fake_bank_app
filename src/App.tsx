import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import secureLocalStorage from 'react-secure-storage';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import NoPage from './components/NoPage/NoPage';

// Check sessionStorage for JWT
// If JWT exists, send it to the server to check if it's valid
// If it's valid, set the user state to the user data
// If it's not valid, delete the JWT from sessionStorage
// If JWT doesn't exist, redirect to login page

interface IUserData {
    name: string;
    discriminant: string;
}

const App = (): JSX.Element => {
    const userJWT: string | null = secureLocalStorage.getItem('sessionJWT') as string;

    if (!userJWT) {

        return (
            <>
                <Navbar 
                    isLoggedIn={false} 
                />
                <Routes>
                    <Route path="/" Component={Landing} />
                    <Route path="/landing" Component={Landing} />
                    <Route path="*" Component={NoPage} />
                </Routes>
            </>
        )
    }

    // Persist user data in state
    const userData: IUserData = JSON.parse(secureLocalStorage.getItem('userContext') as string) as IUserData;


    return (
        <>
            <Navbar 
                isLoggedIn={true}
                user={userData}
            />
            <Routes>
                <Route path="/" Component={Landing} />
                <Route path="/landing" Component={Landing} />
                <Route path="*" Component={NoPage} />
            </Routes>
        </>
    );
}

export default App;

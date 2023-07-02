// NPM import
import React from 'react';
import secureLocalStorage from 'react-secure-storage';
import { Link } from 'react-router-dom';

// Local function import
import { logoutUser } from './utils/AuthUtils';
import { verifySession } from './utils/AuthUtils';
import { NavbarItems } from './data/NavbarItems';

// Local CSS import
import './css/Navbar.css';

// Public user information interface (no need to pass JWT)
interface IUserData {
    name: string;
    discriminant: string;
}

// Navbar props interface
interface NavbarProps {
    isLoggedIn: boolean;
    user?: IUserData;
}

const Navbar = (props: NavbarProps): JSX.Element => {
    // Track if the login form should be displayed
    const [displayLoginForm, setDisplayLoginForm] = React.useState<boolean>(false);


    // Make sure the user still has a valid session
    React.useEffect(() => {
        const jwt: string | null = secureLocalStorage.getItem('sessionJWT') as string;
        if(jwt) verifySession(jwt);
    }, []);

    // Add a scroll listener to the window to change the navbar style
    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY) {  document.querySelector('.navbar-wrapper')?.classList.add('navbar-wrapper-scrolled'); }
            else { document.querySelector('.navbar-wrapper')?.classList.remove('navbar-wrapper-scrolled'); }
        });
    }, []);

    return (
        <>
            <div className='navbar-wrapper'>
                <div className='navbar-item-wrapper'>
                    {NavbarItems.map((item, index) => {
                        return (
                            <div key={index} className='navbar-item'>
                                <Link to='/'>{item.name}</Link>
                            </div>
                        )
                    })}
                    {props.isLoggedIn ? 
                        <button onClick={() => logoutUser()} className='navbar-item | navbar-item-button'>Logout</button>
                    :
                        <button onClick={() => setDisplayLoginForm(!displayLoginForm)} className='navbar-item | navbar-item-button'>Login | Register</button>
                    }
                    
                </div>
                

                
            </div>
        </>
    )
}

export default Navbar;
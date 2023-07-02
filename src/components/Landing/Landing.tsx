import { useState } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';

import './css/Landing.css';

import Login from '../Login/Login';


const Landing = () => {

    
    return (
        <div className='landing-page-wrapper'>
            <div className='landing-page-col-container'>
                <div className='landing-page-left-col'>
                    <div className='landing-page-left-col-content'>
                        <div className='landing-page-left-col-text'>
                            <h1>Welcome to bank</h1>
                        </div>
                    </div>
                </div>
                <div className='landing-page-right-col'>
                    <div className='landing-page-login-form-wrapper'>
                        {<Login />}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Landing;
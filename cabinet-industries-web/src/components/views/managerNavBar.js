import React from 'react';
import NavBar from './navbar';

function ManagerNavBar() {
    return (
        <div id='managerNavBar'>
            <NavBar />
            <div>
                <a href='/uploadform' >Upload Projects </a>
                <a href='/manageprojects'>Manage Projects </a>
            </div>
        </div>
    )
}

export default ManagerNavBar


import React from 'react';
import Logo from '../../assets/logoCircleWhite.png'
import '../css/navBar.css'

function NavBar() {
    return (
        <div id='navBar' >
            <a href='/' > <img src={Logo} alt="logo" className='navBarLogo' /> </a>
            <div className='navigationLinks'>
                <a href='/' className='navigationLink'>Acasă </a>
                <a href='/projects' className='navigationLink'>Proiecte </a>
                <a href='/projects' className='navigationLink'>Calculează Preț </a>
            </div>
        </div>
    )
}

export default NavBar


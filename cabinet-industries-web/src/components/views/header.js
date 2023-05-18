import React from 'react';
import '../css/header.css';
import HeaderPhoto from '../../assets/headerPhoto.png'
import Logo from '../../assets/logoCircleWhite.png'
import Introduction from './introduction';

function Header() {

    return (
        <div>
            <a src='/'> <img src={Logo} alt="logo" className='logo onTopOfBackroundPhoto ' /> </a>

            <div className='textContainer onTopOfBackroundPhoto '>
                <div className='navigation'>
                    <a href='/' className='navlink'>Acasă </a>
                    <a href='/projects' className='navlink'>Proiecte </a>
                    <a href='/projects' className='navlink'>Calculează Preț </a>
                </div>
                <p className='websiteTitle'>Cabinet Industries</p>
            </div>
            <img src={HeaderPhoto} alt="HeaderPhoto" className='headerPhoto' />
            <Introduction className='introduction' />

        </div>
    )

}

export default Header;
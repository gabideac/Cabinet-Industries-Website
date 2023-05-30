import React from 'react';
import '../css/header.css';
import HeaderPhoto from '../../assets/headerPhoto.png'
import NavBar from './navbar';

function Header() {

    return (
        <div id='headerContainer'>
            <NavBar />
            <h1>Cabinet Industries</h1>
            <div className='introductionTextContainer'>
                <h3 className='introductionTitle'>Despre noi</h3>
                <p className='introductionText'> Cabinet Industries, situat în Cluj-Napoca,
                    produce mobilier personalizat, din MDF si lemn masiv. Servicile noastre includ: design, asamblare și montaj.
                    Tâmplarii noștri lucrează cu materiale de cea mai bună calitate pentru producerea de mobilier impecabil.
                    Oferim zece ani garanție.</p>
            </div>
            <img src={HeaderPhoto} alt="HeaderPhoto" className='headerPhoto' />
        </div>
    )

}

export default Header;
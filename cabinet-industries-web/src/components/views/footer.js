import React from 'react';
import './../css/footer.css';
import Logo from './../../assets/logoCircleWhite.png'

function Footer() {

    return (
        <div className='footerContainer'>
            <div className='socialLinks'>
                <a className='sLink' href='https://www.facebook.com/cabinetindustriescluj'> Facebook </a>
                <a className='sLink' href='https://www.instagram.com/cabinet.industries/?fbclid=IwAR2NOZmedPqiTAP0ywl9qR0VQDIFjZNKqbZ9icocKfiswpbyL9FxKGyUZgE'> Instagram </a>
            </div>
            <a className='telNr' href="tel:0765722166">0765722166</a>
            <img src={Logo} alt="logo" className='footerLogo' />
        </div>
    )

}

export default Footer;

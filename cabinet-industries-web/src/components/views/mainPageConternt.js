import React from 'react';
import '../css/mainPageContent.css'

import MountImg from '../../assets/mount.jpg'
import DesignImg from '../../assets/design.jpg'
import PaintImg from '../../assets/paint.jpg'
import TransportImg from '../../assets/transport.jpg'
import ColabImg from '../../assets/colab.jpg'
import AsemblyImg from '../../assets/asembly.jpg'

function MainPageContent() {

    return (
        <div id='mainPgaeContentContainer'>
            <div id='mainPgaeContent'>
                <h1>
                    Oferta noastra include:
                </h1>

                <div className='mainPageContentElement'>
                    <div className='textSubelement'>
                        <h3>DESIGN</h3>
                        <ul>
                            <li>Masuram cu exactitate locul unde asezam mobila</li>
                            <li>Discutam toate optiunile pe care le aveti cu privire la asezarea componentelor mobilii, culoare si integram viziunea dumneavoastra in proiect</li>
                            <li>Efectuam un design 3D al mobilierului dorit</li>
                        </ul>
                    </div>
                    <img src={DesignImg} alt="DesignImage" className='imageSubelement' />
                </div>

                <div className='mainPageContentElement'>
                    <img src={TransportImg} alt="TransportImage" className='imageSubelement' />
                    <div className='textSubelement'>
                        <h3>PROCURAREA MATERIALELOR SI TRANSPORT</h3>
                        <ul>
                            <li>Comunicam cu companii care procura, debiteaza si cantuiesc placi de PAL si MDF de cea mai buna calitate</li>
                            <li>Colaboram cu numerosi vazatori de feronerie si vopsele</li>
                            <li>Asiguram transporul, gestiunea si logistica lucrarii in intregime</li>
                        </ul>
                    </div>
                </div>

                <div className='mainPageContentElement'>
                    <div className='textSubelement'>
                        <h3>VOPSIRE</h3>
                        <ul>
                            <li>Oferim o larga varietate de culori</li>
                            <li>Aplicam numeroase straturi de protectie pe fiecare placa</li>
                            <li>Aplicam vopsea de inalta calitate si inspectam fiecare placa vopsita</li>
                        </ul>
                    </div>
                    <img src={PaintImg} alt="PaintImage" className='imageSubelement' />

                </div>

                <div className='mainPageContentElement'>
                    <img src={AsemblyImg} alt="AsemblyImage" className='imageSubelement' />
                    <div className='textSubelement'>
                        <h3>ASAMBLARE</h3>
                        <ul>
                            <li>Pregatim si modificam fiecare bucata </li>
                            <li>Montam toate accesorile necesare </li>
                            <li>Asamblam corpurile si pregatim toate elementele mobilierului</li>
                        </ul>
                    </div>
                </div>

                <div className='mainPageContentElement'>
                    <div className='textSubelement'>
                        <h3>MONTAJ</h3>
                        <ul>
                            <li>Transporam si pregatim corpuriel, sculele si alte elemente la locatie</li>
                            <li>Pozitionam si incadram mobilierul in spatiul dorit</li>
                            <li>Montam mobilerul cu toate elementele necesare finalizand lucrarea</li>
                        </ul>
                    </div>
                    <img src={MountImg} alt="MountingImage" className='imageSubelement' />

                </div>


                <div className='mainPageContentElement'>
                    <img src={ColabImg} alt="ColabImage" className='imageSubelement' />

                    <div className='textSubelement'>
                        <h3>COLABORATORI</h3>
                        <p>Pentru efeturea lucrarilor mai complexe, care includ renovari intertioare sau construirea elementelor sau a corpurilor din fier, colaboram cu
                            si/sau recomandam cu alti mucitori experti din aceste domenii</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MainPageContent;

import '../cssAll/BerandaMurid.css';
import ImgProfil from '../assets/profil-guru.svg';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

function NavbarGuru(props){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <nav>
                <div className="navbar">
                    <h1>{props.text}</h1>
                    <div className="img-profile" style={{ cursor: "pointer" }}>
                        <img src={ImgProfil} alt="img-profile" onClick={handleShow} />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarGuru
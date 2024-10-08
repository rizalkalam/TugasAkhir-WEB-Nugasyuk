import '../cssAll/BerandaGuru.css';
import { Icon } from '@iconify/react';
import { useNavigate, Link } from 'react-router-dom';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import NavbarGuru from '../component/NavbarGuru';


function BerandaGuru(){
    const navText = "Beranda";
    const navigate = useNavigate();

    return(
        <div>
            <aside>
            <h1 className="title-form-login" onClick={() => navigate('/guru/berandaguru')}>
                <img src={IconNugasyuk} alt="" className="icon-nugasyuk"/>
                nugasyuk
            </h1>
            <ul>
                <li className='active' onClick={() => navigate('/guru/berandaguru')}>
                    <Icon icon="iconoir:home-simple" width="20" />
                    Beranda
                </li>
                <li onClick={() => navigate('/guru/pagekbm')} >
                    <Icon icon="ph:chalkboard-teacher" width="20" />
                    KBM
                </li>
                <li onClick={() => navigate('/guru/pagepengumpulan')}>
                    <Icon icon="uiw:date" width="18"/>
                    Pengumpulan
                </li>
                <li onClick={() => navigate('/guru/pagejadwalkbm')}>
                    <Icon icon="fluent-mdl2:education" width="18"/>
                    Jadwal KBM
                </li>
            </ul>
            </aside>
            <div className="container-content">
                <NavbarGuru text={navText}/>
              <main className='main'>
                <div className="header-dashboard">
                    <div className="head-left">
                    <h1 className="intro-head">
                        Halo <span className="name-admin">Budiono, S.Pd</span>
                    </h1>
                    <p className="desc-head" style={{width:"550px"}}>
                        Selamat datang di nugasyuk, anda bisa memonitoring siswa, memberikan materi dan tugas.
                    </p>
                    </div>
                    <div className="head-right">
                    <div className="kotak1"></div>
                    </div>
                </div>

                <div className="con-content">
                    <div className="content-indiecator" style={{ background: "#2AD5A2" }}>
                    <div className="icon-indie" style={{ color: "#2AD5A2" }}>
                        <Icon icon="fluent:class-24-regular" width="40" />
                    </div>
                    <div className="desc-indie">
                        <p className="title-indie">Jumlah Kelas Yang Diajar</p>
                        <p className="value-indie">
                        <span>6</span> Kelas
                        </p>
                    </div>
                    </div>
                    <div className="content-indiecator" style={{ background: "#2A93D5" }}>
                    <div className="icon-indie" style={{ color: "#2A93D5" }}>
                        <Icon icon="ri:book-line" width="40"/>
                    </div>
                    <div className="desc-indie">
                        <p className="title-indie">Jumlah Materi Yang Diberikan</p>
                        <p className="value-indie">
                        <span>3</span> Materi
                        </p>
                    </div>
                    </div>
                    <div className="content-indiecator" style={{ background: "#FF71A4" }}>
                    <div className="icon-indie" style={{ color: "#FF71A4" }}>
                        <Icon icon="tabler:clipboard-text" width="40" />
                    </div>
                    <div className="desc-indie">
                        <p className="title-indie">Jumlah Tugas Yang Diberikan</p>
                        <p className="value-indie">
                        <span>3</span> Tugas
                        </p>
                    </div>
                    </div>
                </div>
            </main>
          </div>
        </div>
    );
}

export default BerandaGuru
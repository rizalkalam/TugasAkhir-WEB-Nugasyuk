import '../cssAll/murid/DetailMateri.css';
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import { useState } from "react";
import NavbarMurid from '../component/NavbarMurid';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import vektorProfile from "../assets/vektorProfile.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from '../assets/pass-icon.svg';
import mataIcon from '../assets/icon-mata.svg';

function DetailMateri(){
    const navText = "B. Inggris";
    const navigate = useNavigate();

    const closeDetail = () => {
        const detailProfile = document.querySelector('.detail-profile');
        detailProfile.style.transform = 'translateX(350px)';
    }

    const closeDetailNotif = () => {
        const detailProfile = document.querySelector('.detail-notif');
        detailProfile.style.transform = 'translateX(350px)';
    }
    
    const showLogoutPopup = () => {
        const popupLogout = document.querySelector('#popup-logout');
        popupLogout.style.display = 'flex';
        popupLogout.style.animation = 'slide-down 0.3s ease-in-out';
    }
    
    const closeLogoutPopup = () => {
        const popupLogout = document.querySelector('#popup-logout');
        setTimeout(() => popupLogout.style.display = "none", 250);
        popupLogout.style.animation = 'slide-up 0.3s ease-in-out';
    }
    
    const showForgetPopup = () => {
        const popupForget = document.querySelector('#popup-forget');
        popupForget.style.display = 'flex';
        popupForget.style.animation = 'slide-down 0.3s ease-in-out';
    }

    const closeForgetPopupAndClearInput = () => {
        const popupForget = document.querySelector('#popup-forget');
        setTimeout(() => popupForget.style.display = "none", 250);
        popupForget.style.animation = 'slide-up 0.3s ease-in-out';
        const clearpassword = document.querySelector('#password', '#newPassword', '#confirmPassword');
        clearpassword.value = "";
        const clearpasswordNew = document.querySelector('#newPassword');
        clearpasswordNew.value = "";
        const clearpasswordConfirm = document.querySelector('#confirmPassword');
        clearpasswordConfirm.value = "";
    }

    const [passwordType, setPasswordType] = useState("password");
    const [passwordTypeNew, setPasswordTypeNew] = useState("password");
    const [passwordTypeConfirm, setPasswordTypeConfirm] = useState("password");

    function togglePasswordVisibility() {
        setPasswordType(passwordType === "password" ? "text" : "password");
    }

    function togglePasswordVisibilityNew() {
        setPasswordTypeNew(passwordTypeNew === "password" ? "text" : "password");
    }

    function togglePasswordVisibilityConfirm() {
        setPasswordTypeConfirm(passwordTypeConfirm === "password" ? "text" : "password");
    }

    return(
        <div>
            <aside>
            <h1 className="title-form-login" onClick={() => navigate('/murid/berandamurid')}>
                <img src={IconNugasyuk} alt="" className="icon-nugasyuk"/>
                nugasyuk
            </h1>
            <ul>
                <li onClick={() => navigate('/murid/berandamurid')}>
                    <Icon icon="iconoir:home-simple" width="20" />
                    Beranda
                </li>
                <li onClick={() => navigate('/murid/pagetugas')} >
                    <Icon icon="fluent:clipboard-bullet-list-rtl-20-regular" width="25" />
                    Tugas
                </li>
                <li onClick={() => navigate('/murid/pagekbm')}>
                    <Icon icon="uiw:date" width="18"/>
                    Jadwal KBM
                </li>
                <li className='active' onClick={() => navigate('/murid/pagemapel')}>
                    <Icon icon="fluent-mdl2:education" width="18"/>
                    Mata Pelajaran
                </li>
                <li onClick={() => navigate('/murid/pagekonseling')}>
                    <Icon icon="ph:apple-podcasts-logo-duotone" width="18"/>
                    Konseling
                </li>
            </ul>
            </aside>
            <div className="container-content">
                <NavbarMurid text={navText}/>
                <div className="main">
                    <div className="con-content-material">
                        <div className="content-material">
                            <div className="content-material-left">
                                <div className="icon-material">
                                    <Icon icon="ri:book-line" width="40" style={{color: "#2A93D5"}}/>
                                </div>
                                <div className="desc-material">
                                    <p className="name-material ">Materi Application Letter</p>
                                    <p className="teacher">Budiono, S.Pd</p>
                                </div>
                            </div>
                            <div className="content-material-right">
                                <p className="date-upload">7 Mar 2023</p>
                            </div>
                        </div>
                        <p className='desc-content-material'>Assalamualaikum wr wb, untuk kelas 11 PPLG 1 kalian bisa memahami
                        materi mengenai pengertian application letter. Dibawah ini saya mencantumkan link youtube pengertian dari
                        application letter, kalian bisa menyimak video tersebut. jika sudah selesai menyimak video kalian bisa
                        mengerjakan tugas application letter yang saya upload pada halaman tugas. Terima kasih, sukses selalu...
                        </p>
                        <div className="file-material">
                            <iframe width="330" height="150" src="https://www.youtube.com/embed/bkIumnXFQNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="popup-forget" id="popup-forget">
                <form action="" className="detail-forget-password">
                    <div className="navbar-detail-forget">
                        <Icon icon="radix-icons:cross-circled" width="30" style={{cursor: "pointer"}} onClick={closeForgetPopupAndClearInput}/>
                        <h2>Ganti Password</h2>
                    </div>
                    <p className="judul-form">Sandi lama</p>
                    <div className="con-form-password">
                        <img src={passIcon} alt=""/>
                        <input type={passwordType} id="password" placeholder="*********" className="input-password"/>
                        <button type="button" className="btn-mata" onClick={togglePasswordVisibility}><img src={mataIcon} alt=""/></button>
                    </div>
                    <p className="judul-form">Sandi baru</p>
                    <div className="con-form-password">
                        <img src={passIcon} alt=""/>
                        <input type={passwordTypeNew} id="newPassword" placeholder="*********" className="input-password"/>
                        <button type="button" className="btn-mata" onClick={togglePasswordVisibilityNew}><img src={mataIcon} alt=""/></button>
                    </div>
                    <p className="judul-form">Konfirmasi sandi baru</p>
                    <div className="con-form-password">
                        <img src={passIcon} alt=""/>
                        <input type={passwordTypeConfirm} id="confirmPassword" placeholder="*********" className="input-password"/>
                        <button type="button" className="btn-mata" onClick={togglePasswordVisibilityConfirm}><img src={mataIcon} alt=""/></button>
                    </div>

                    <button type="submit" className="btn-simpan">Simpan sandi baru</button>
                </form>
            </div>

            <div className="detail-profile">
                <div className='content-detail'>
                    <div className="navbar-detail">
                    <Icon icon="radix-icons:cross-circled" width="30" style={{cursor: "pointer", color: "#4b4b4b"}} onClick={closeDetail}/>
                    <h2>Profil</h2>
                    </div>
                    <div className="detail-image-profile">
                        <img src={vektorProfile} alt="" className="detail-img-profile" />
                    </div>
                    <p className="judul-detail">Email</p>
                    <p className="value-detail">zumarramadhan@smkrus.sch.id</p>
                    <p className="judul-detail">Nama Pengguna</p>
                    <p className="value-detail">Zumar</p>
                    <p className="judul-detail">Nama</p>
                    <p className="value-detail">Muhammad Zumar Ramadhan</p>
                    <p className="judul-detail">Jurusan</p>
                    <p className="value-detail">PPLG</p>
                    <p className="judul-detail">Kelas</p>
                    <p className="value-detail">11 PPLG 1</p>
                    <p className="judul-detail">NIS</p>
                    <p className="value-detail">04449</p>
                </div>
                <div className="con-btn-detail-profile">
                    <button className="forget-password" id="btn-forget-pass" onClick={showForgetPopup}>
                        <Icon icon="material-symbols:key-outline-rounded" width="30" />
                        <p>Ganti Password</p>
                    </button>
                    <button className="logout" id="btn-logout" onClick={showLogoutPopup}>
                        <Icon icon="material-symbols:logout-rounded" width="30" />
                        <p>Logout</p>
                    </button>
                </div>
            </div>

            <div className="detail-notif">
                <div className='content-detail-notif'>
                    <div className="navbar-detail-notif">
                        <Icon icon="radix-icons:cross-circled" width="30" style={{cursor: "pointer", color: "#4b4b4b"}} onClick={closeDetailNotif}/>
                        <h2>Notifikasi</h2>
                    </div>
                    <p className="day">
                        Hari Ini
                    </p>
                    <div className="notif">
                        <div className="icon-notif">
                            <Icon icon="tabler:clipboard-text" width="30" />
                        </div>
                        <div className="content-notif">
                            <div className="name-notif">
                                <p>Application Letter</p>
                            </div>
                            <div className="teacher">
                                <p>Budiono, S.Pd</p>
                            </div>
                        </div>
                    </div>
                    <div className="notif">
                        <div className="icon-notif">
                            <Icon icon="tabler:clipboard-text" width="30" />
                        </div>
                        <div className="content-notif">
                            <div className="name-notif">
                                <p>Sejarah Gojek</p>
                            </div>
                            <div className="teacher">
                                <p>Rini, S.Pd</p>
                            </div>
                        </div>
                    </div>
                    <div className="notif">
                        <div className="icon-notif">
                            <Icon icon="ri:book-line" width="30"/>
                        </div>
                        <div className="content-notif">
                            <div className="name-notif">
                                <p>Sejarah Gojek</p>
                            </div>
                            <div className="teacher">
                                <p>Rini, S.Pd</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DetailMateri
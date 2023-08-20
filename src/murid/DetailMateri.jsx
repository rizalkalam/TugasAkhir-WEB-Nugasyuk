import "../cssAll/murid/DetailMateri.css";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import NavbarMurid from "../component/NavbarMurid";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import ProfileSiswa from "../component/ProfileSiswa";
import NotifSiswa from "../component/NotifSiswa";
import axios from "axios";
import apiurl from "../api/api";
import SkeletonDetailMateri from "../componentSkeleton/SkeletonDetailMaterial";
import SkeletonNavbar from "../componentSkeleton/SkeletonNavbar";

function DetailMateri() {
  const navigate = useNavigate();

  const saveToken = sessionStorage.getItem("token");

  const [dataDetailMateri, setDataDetailMateri] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${apiurl}murid/materi/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning":"any",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;

        setDataDetailMateri(responseAPI.data);
        setisLoading(false);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil data", error);
        setisLoading(false);
        setisError(true);
      });
  }, []);


  function generateFileIcons(item) {
    let fileIcon;
    let fileExtension = "";

    if (item.file) {
      fileExtension = item.file.substring(item.file.lastIndexOf(".") + 1);
      switch (fileExtension) {
        case "pdf":
          fileIcon = "mdi:file-pdf-box";
          break;
        case "docx":
          fileIcon = "mdi:file-word-box";
          break;
        default:
          fileIcon = "";
          break;
      }
    }

    return (
      <>
        {fileExtension && (
          <div className="file-generate">
            <div className="value-file-icon">
              <Icon icon={fileIcon} width={45} />
            </div>
            <div>
              <h1 className="title-value-file">{item.file}</h1>
              <p className="format-file">
                {fileExtension.toUpperCase()}
              </p>
            </div>
          </div>
        )}
      </>
    );
  }

  // start funsi generate file or link materi
  function generateFileLinkElements() {
    return dataDetailMateri.map((item) => {
      if (item.link === "null") {
        item.link = null;
      }
  
      if (item.link !== null && item.file) {
        let linkElement = null;
  
        if (item.link && item.link.includes("youtube.com")) {
          let youtubeLink = item.link.replace("watch?v=", "embed/");
          linkElement = (
            <a href={youtubeLink} className="value-link" id="value-link">
              <iframe src={youtubeLink} frameBorder="0" allowFullScreen></iframe>
              <div>
                <h1 className="title-fileOrlink">{item.nama_materi}</h1>
                <p className="link-detailMenunggu">
                  YouTube <span>Klik</span>
                </p>
              </div>
            </a>
          );
        } else if (item.link && item.link.includes("youtu.be")) {
          let youtubeLink = `https://www.youtube.com/embed/${item.link
            .split("/")
            .pop()}`;
          linkElement = (
            <a href={youtubeLink} className="value-link" id="value-link">
              <iframe src={youtubeLink} frameBorder="0" allowFullScreen></iframe>
              <div>
                <h1 className="title-fileOrlink">{item.nama_materi}</h1>
                <p className="link-detailMenunggu">
                  YouTube <span>Klik</span>
                </p>
              </div>
            </a>
          );
        } else {
          linkElement = (
            <a href={item.link} className="btn-openSitus">
              Buka Situs
            </a>
          );
        }
  
        return (
          <div className="con-value-fileOrlink" key={item.id}>
            {linkElement}
            <a
              href={`https://www.nugasyuk.my.id/public/${item.file}`}
              className="value-file"
              id="value-file"
            >
              {generateFileIcons(item)}
            </a>
          </div>
        );
      } else if (item.link) {
        if (item.link.includes("youtube.com")) {
          let youtubeLink = item.link.replace("watch?v=", "embed/");
          return (
            <div className="con-value-fileOrlink" key={item.id}>
              <a href={youtubeLink} className="value-link" id="value-link">
                <iframe
                  src={youtubeLink}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <div>
                  <h1 className="title-fileOrlink">{item.nama_materi}</h1>
                  <p className="link-detailMenunggu">
                    YouTube <span>Klik</span>
                  </p>
                </div>
              </a>
            </div>
          );
        } else if (item.link.includes("youtu.be")) {
          let youtubeLink = `https://www.youtube.com/embed/${item.link
            .split("/")
            .pop()}`;
          return (
            <div className="con-value-fileOrlink" key={item.id}>
              <a href={youtubeLink} className="value-link" id="value-link">
                <iframe
                  src={youtubeLink}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <div>
                  <h1 className="title-fileOrlink">{item.nama_materi}</h1>
                  <p className="link-detailMenunggu">
                    YouTube <span>Klik</span>
                  </p>
                </div>
              </a>
            </div>
          );
        } else {
          return (
            <div className="con-value-fileOrlink" key={item.id}>
              <a href={item.link} className="btn-openSitus">
                Buka Situs
              </a>
            </div>
          );
        }
      } else if (item.file) {
        return (
          <div className="con-value-fileOrlink" key={item.id}>
            <a
              href={`https://wondrous-squirrel-blatantly.ngrok-free.app/file/${item.file}`}
              className="value-file"
              id="value-file"
            >
              {generateFileIcons(item)}
            </a>
          </div>
        );
      }

      return null;
    });
  }

  const fileLinkElements = generateFileLinkElements();

  // if (isLoading)
  //   return (
  //     <div id="load">
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //     </div>
  //   );
  if (dataDetailMateri && !isError)
    //   end funsi generate file link elements

    // Panggil fungsi generateFileLinkElements untuk menghasilkan elemen-elemen yang sesuai

    return (
      <div>
        <aside>
          <h1
            className="title-form-login"
            onClick={() => navigate("/murid/berandamurid")}
          >
            <img src={IconNugasyuk} alt="" className="icon-nugasyuk" />
            nugasyuk
          </h1>
          <ul>
            <li onClick={() => navigate("/murid/berandamurid")}>
              <Icon icon="iconoir:home-simple" width="20" />
              Beranda
            </li>
            <li onClick={() => navigate("/murid/pagetugas")}>
              <Icon
                icon="fluent:clipboard-bullet-list-rtl-20-regular"
                width="25"
              />
              Tugas
            </li>
            <li onClick={() => navigate("/murid/pagekbm")}>
              <Icon icon="uiw:date" width="18" />
              Jadwal KBM
            </li>
            <li className="active" onClick={() => navigate("/murid/pagemapel")}>
              <Icon icon="fluent-mdl2:education" width="18" />
              Mata Pelajaran
            </li>
            {/* <li onClick={() => navigate("/murid/pagekonseling")}>
              <Icon icon="ph:apple-podcasts-logo-duotone" width="18" />
              Konseling
            </li> */}
          </ul>
        </aside>
        <div className="container-content">
          {isLoading ? (
            <SkeletonNavbar />
          ) : (
            <div>
              {dataDetailMateri.map((detailMateri) => (
                <NavbarMurid textNavigasi={detailMateri.nama_mapel} />
              ))}
            </div>
          )}
          <div className="main">
            {isLoading ? (
              <SkeletonDetailMateri />
            ) : (
              <div>
                {dataDetailMateri &&
                  dataDetailMateri.map((detailMateri) => (
                    <div className="con-content-material">
                      <div className="content-material">
                        <div className="content-material-left">
                          <div className="icon-material">
                            <Icon
                              icon="ri:book-line"
                              width="40"
                              style={{ color: "#2A93D5" }}
                            />
                          </div>
                          <div className="desc-material">
                            <p className="name-material ">
                              {detailMateri.nama_materi}
                            </p>
                            <p className="teacher">{detailMateri.nama_guru}</p>
                          </div>
                        </div>
                        <div className="content-material-right">
                          <p className="date-upload">
                            {detailMateri.tanggal_dibuat}
                          </p>
                        </div>
                      </div>
                      <p className="desc-content-material">
                        {detailMateri.isi}
                      </p>
                   
                        <div>{fileLinkElements}</div>
                      
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        <ProfileSiswa />

        <NotifSiswa />
      </div>
    );
}

export default DetailMateri;

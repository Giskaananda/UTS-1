import React from "react";
import Foto from "../../Components/foto";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import './home.css'

const Home = () => {
  return (
    <div>
      <Foto />
      <div>
        <h1 className="hubungi">Hubungi kami di:</h1>
        <div className="social-links-container">
          <a
            href="https://www.instagram.com/farhan_al_habsyi/"
            className="contact__social-link"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/+6281217551910"
            className="contact__social-link"
          >
            <FaWhatsapp />
          </a>
        </div>
        <div>
          <h1>Temui kami di:</h1>
          <p>Jalan Basuki Rahmat nomor 93. singutrunan Banyuwangi</p>
          <div className="map">
            <iframe title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.021391775722!2d114.37199867496487!3d-8.200598782256746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd14518a114e1f9%3A0x5bd596098e34c3b8!2sTOKO%20CINTA%20KONTER%20%26%20PARFUME!5e0!3m2!1sid!2sid!4v1731439826614!5m2!1sid!2sid"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

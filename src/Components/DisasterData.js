import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import img1 from "../tombstone.png";
import img2 from "../gathering.png";
import img3 from "../hilang.png";
import img4 from "../broken-arm.png";

const DisasterData = () => {
  return (
    <section id="about" className="about">
      <div id="services" className="services section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-title" data-aos="fade-right">
                <h2>Dampak Bencana Alam</h2>
                <p>
                  Data kerusakan dan korban yang berdampak dari bencana alam.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-md-7 d-flex align-items-stretch">
                  <div
                    className="icon-box"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <div className="icon">
                      <img src={img1} alt="" className="img-fluid" />
                    </div>
                    <h4>Meninggal Dunia</h4>
                    <p>156</p>
                  </div>
                </div>
                <div className="col-md-5 d-flex align-items-stretch mt-4 mt-lg-0">
                  <div
                    className="icon-box"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <div className="icon">
                      <img src={img2} alt="" className="img-fluid" />
                    </div>
                    <h4>Mengungsi</h4>
                    <p>3.269.807</p>
                  </div>
                </div>
                <div className="col-md-7 d-flex align-items-stretch mt-4">
                  <div
                    className="icon-box"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <div className="icon">
                      <img src={img3} alt="" className="img-fluid" />
                    </div>
                    <h4>Belum Ditemukan</h4>
                    <p>14</p>
                  </div>
                </div>
                <div className="col-md-5 d-flex align-items-stretch mt-4">
                  <div
                    className="icon-box"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <div className="icon">
                      <img src={img4} alt="" className="img-fluid" />
                    </div>
                    <h4>Luka-luka</h4>
                    <p>234</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DisasterData;

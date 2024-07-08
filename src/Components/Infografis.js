import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import img1 from "../flood.png";
import img2 from "../landslide.png";
import img3 from "../tsunami.png";
import img4 from "../volcano.png";

const Infografis = () => {
  return (
    <section id="about" className="about">
      <div id="services" className="services section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-title" data-aos="fade-right">
                <h2>Jumlah Kejadian Per Bencana Alam</h2>
                <p>
                  Data jumlah kejadian bencana alam per jenis bencana yang
                  tercatat.
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
                    <h3>Banjir</h3>
                    <p>449</p>
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
                    <h3>Tanah Longsor</h3>
                    <p>56</p>
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
                    <h3>Tsunami</h3>
                    <p>4</p>
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
                    <h3>Erupsi Gunung Api</h3>
                    <p>2</p>
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
export default Infografis;

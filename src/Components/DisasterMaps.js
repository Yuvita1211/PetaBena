import Container from "react-bootstrap/Container";
import React from "react";
//import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const DisasterMaps = ({ disasters }) => {
  return (
    <Container>
      <section id="contact" className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="10">
              <div className="section-title" data-aos="fade-right">
                <h2>Peta Bencana</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};
export default DisasterMaps;

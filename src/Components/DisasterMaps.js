import Container from "react-bootstrap/Container";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const DisasterMaps = () => {
  return (
    <Container>
      <section id="contact" className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="10">
              <div className="section-title" data-aos="fade-right">
                <h2>Peta Bencana</h2>
              </div>
              <iframe
                style={{ border: 0, width: "100%", height: "500px" }}
                src="https://www.google.com/maps/embed?-@-6.9926201,110.4260633,14z?entry=ttu"
                frameBorder="0"
                allowFullScreen
                title="Peta Bencana"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};
export default DisasterMaps;

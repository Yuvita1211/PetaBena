import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import imghero from "../Bencana_Alam.jpg";
import "../App.css";
const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container text-center position-relative"
        data-aos="fade-in"
        data-aos-delay="30"
      >
        <h1>Website Pemetaan Bencana Alam</h1>
        <a href="#about" className="btn-get-started scrollto">
          Get Started
        </a>
      </div>
    </section>
  );
};
export default Hero;

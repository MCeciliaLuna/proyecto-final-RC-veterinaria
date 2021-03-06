import React from "react";
import "./carousel.css";
import image2 from "../assests/images/Vet2.jpg";
import image3 from "../assests/images/Vet3.jpg";
import image4 from "../assests/images/Vet4.jpg";
import image5 from "../assests/images/Vet5.jpg";
import logo from "../assests/images/logo.png";

const Carousel = () => {
  return (
    <div id="carouselExampleInterval" className="carousel slide carousel-dark bg-carousel" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img src={image2} className="d-block mx-auto img-fluid w-100" alt="interior-veterinaria" />
          <div className="carousel-text centrar-texto d-flex align-items-center justify-content-center">
            <h2 className="text-carousel text-center mb-0">La Huellita Veterinaria</h2>
            <img src={logo} className="logo-carousel p-0" alt="" />
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src={image3} className="d-block mx-auto img-fluid" alt="interior-veterinaria" />
          <div className="carousel-text centrar-texto d-flex align-items-center justify-content-center">
            <h2 className="text-carousel mb-0 text-center">Lo mejor de nosotros siempre a disposición de tu mascota</h2>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src={image4} className="d-block mx-auto img-fluid" alt="interior-veterinaria" />
          <div className="carousel-text centrar-texto d-flex align-items-center justify-content-center">
            <h2 className="text-carousel mb-0 text-center">Atención variada e integral</h2>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src={image5} className="d-block mx-auto img-fluid" alt="interior-veterinaria" />
          <div className="carousel-text centrar-texto d-flex align-items-center justify-content-center">
            <h2 className="text-carousel mb-0 text-center">Profesionalismo</h2>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previo</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}

export default Carousel;
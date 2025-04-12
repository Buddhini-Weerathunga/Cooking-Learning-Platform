import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Carousel from "bootstrap/js/dist/carousel";
import "../App.css"; // If you have your styles in App.css

const HomePage = () => {
  useEffect(() => {
    const carouselElement = document.querySelector("#carouselExampleFade");
    if (carouselElement) {
      new Carousel(carouselElement, {
        interval: 5000,
        ride: "carousel",
        pause: true,
        wrap: true,
      });
    }
  }, []);

  return (
    <div>
      <Navbar />

      <section
        style={{
          height: "100vh",
          backgroundColor: "#fef6f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 5%",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 50%", textAlign: "left", marginTop: "-10px" }}>
          <h1 style={{ fontFamily: "'Madimi One'", fontSize: "110px" }}>
            Welcome to <span style={{ color: "#ff6804" }}>EasyChef...</span>
          </h1>

          <h1
            style={{
              fontFamily: "'Madimi One'",
              fontSize: "30px",
              color: "rgb(245, 144, 77)",
            }}
          >
            " Your Ultimate Cooking and Skill-Sharing Hub "
          </h1>
          <br />
          <button
            type="button"
            class="btn  bg-lg"
            style={{
              height: "50px",
              width: "150px",
              borderColor: "#ff6804",
              fontSize: "20px",
              color: "#ff6804",
            }}
          >
            Get Started
          </button>
        </div>

        <div style={{ flex: "1 1 50%" }}>
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/images/1.png"
                  className="d-block w-100"
                  alt="Slide 1"
                  style={{
                    marginTop: "30px",
                    height: "500px",
                    width: "500px",

                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/2.png"
                  className="d-block w-100"
                  alt="Slide 2"
                  style={{
                    marginTop: "30px",
                    height: "650px",
                    width: "650px",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/3.png"
                  className="d-block w-100"
                  alt="Slide 3"
                  style={{
                    marginTop: "30px",
                    height: "650px",
                    width: "650px",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#fff7ed",
          textAlign: "center",
        }}
      >
        <h2>About Us</h2>
        <p>
          We are passionate developers building web and mobile solutions with
          modern tech like React, Kotlin, and Laravel.
        </p>
      </section>

      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#ffedd5",
          textAlign: "center",
        }}
      >
        <h2>Contact</h2>
        <p>Get in touch: info@example.com</p>
      </section>
    </div>
  );
};

export default HomePage;

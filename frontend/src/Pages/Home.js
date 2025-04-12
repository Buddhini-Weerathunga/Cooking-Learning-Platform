import React from "react";
import Navbar from "../Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      {/* Section 1 - Hero Section */}
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
        {/* Text Content - Left Side */}
        <div style={{ flex: "1 1 50%", textAlign: "left" }}>
          <h1>Welcome to Our Site</h1>
          <p>Your success starts here!</p>
        </div>

        {/* Image Slideshow - Right Side */}
        <div style={{ flex: "1 1 50%" }}>
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/images/slide1.jpg"
                  className="d-block w-100"
                  alt="Slide 1"
                  style={{
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/slide2.jpg"
                  className="d-block w-100"
                  alt="Slide 2"
                  style={{
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/slide3.jpg"
                  className="d-block w-100"
                  alt="Slide 3"
                  style={{
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - About Section */}
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

      {/* Section 3 - Contact Section */}
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

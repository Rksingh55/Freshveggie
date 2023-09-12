import React from "react";

function About() {
  return (
    <div className="container aboutmain">
      <div className="headcontent">
        <div class="container">
          <div class="row">
            <div
              class="col aboutcon p-2"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <h3>About Us</h3>
              <h1>We Are the India Top Fresh Veg Ecommerce Seller</h1>
              <p>
                As one of India's leading fresh vegetable e-commerce sellers, we
                take immense pride in our commitment to delivering the freshest
                and highest-quality produce to your doorstep. Our mission is
                simple: to revolutionize the way you access and enjoy fresh
                vegetables, making healthy eating more convenient and accessible
                than ever before.
              </p>
              <p>
                As one of India's leading fresh vegetable e-commerce sellers, we
                take immense pride in our commitment to delivering the freshest
                and highest-quality produce to your doorstep. Our mission is
                simple: to revolutionize the way you access and enjoy fresh
                vegetables, making healthy eating more convenient and accessible
                than ever before.This close collaboration guarantees that every
                vegetable you receive is not only incredibly fresh but also
                supports local agriculture.
              </p>
              <a
                class="btn btn-primary btn-lg btn-floating"
                style={{ backgroundColor: " #ac2bac;" }}
                href="#!"
                role="button"
              >
                <i class="fab fa-google"></i>
              </a>
              <a
                class="btn btn-primary btn-lg btn-floating"
                style={{ backgroundColor: "#ac2bac", marginLeft: "5px " }}
                href="#!"
                role="button"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                class="btn btn-primary btn-lg btn-floating"
                style={{ backgroundColor: "#3b5998", marginLeft: "5px " }}
                href="#!"
                role="button"
              >
                <i class="fab fa-facebook"></i>
              </a>
              <a
                class="btn btn-primary btn-lg btn-floating"
                style={{ backgroundColor: " #25d366", marginLeft: "5px " }}
                href="#!"
                role="button"
              >
                <i class="fab fa-whatsapp"></i>
              </a>
              <a
                class="btn btn-primary btn-lg btn-floating"
                style={{ backgroundColor: "  #55acee", marginLeft: "5px " }}
                href="#!"
                role="button"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                class="btn btn-primary btn-lg btn-floating"
                style={{ backgroundColor: " red", marginLeft: "5px " }}
                href="#!"
                role="button"
              >
                <i class="fab fa-youtube"></i>
              </a>
              <br /> <br />
              <button className="btn2 p-2">
                <span>Know More</span>
              </button>
            </div>
            <div
              class="col "
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <div className="contt"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

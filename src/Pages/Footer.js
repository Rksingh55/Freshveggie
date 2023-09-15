import React from "react";
import { BsActivity, BsChevronDoubleRight } from "react-icons/bs";
function Footer() {
  return (
    <>
      <div className="mainfooter">
        <div className=" footer mt-5">
          <div class="container p-5">
            <div class="row">
              <div class="col p-3">
                <h2 data-aos="zoom-in" style={{ color: "black" }}>
                  Fresh 
                  <span3>Veg</span3>
                </h2>
                <p>
                We are on the top India fresh veg ecoomerce website seller 
                for the fresh and clean Veggetable.
                
                </p>
                <button className="" style={{backgroundColor:"#66ff66",borderRadius:"15px",padding:"10px"}}>
              <span className="shopnow">Shop Now</span>
            </button>
              </div>
              <div class="col p-3">
                <h4 data-aos="zoom-in" style={{ color: "white" }}>
                  Patients Care{" "}
                </h4>
                <ul>
                  <li>
                    <a href="">Online Reports</a>
                  </li>
                 
                  <li>
                    <a href="">Facilities</a>
                  </li>
                 
                  <li>
                    <a href="">About US</a>
                  </li>
                </ul>
              </div>
              <div class="col p-3">
                <h4 data-aos="zoom-in-left" style={{ color: "white" }}>
                  Important Links{" "}
                </h4>
                <ul>
                  <li>
                    <a href="">Careers</a>
                  </li>
                  <li>
                    <a href="">Blogs</a>
                  </li>
                  <li>
                    <a href="">News & Events</a>
                  </li>
                  <li>
                    <a href="">For Corporate TieUp</a>
                  </li>
                  <li>
                    <a href="">Help</a>
                  </li>
                </ul>
              </div>
              <div class="col p-3">
                <h4 data-aos="zoom-in-left" style={{ color: "white" }}>
                  Contact Us{" "}
                </h4>
                <div className="contact" style={{ color: "white" }}>
                  <span5>Adress :</span5>
                  VIP Road, Adjacent to Amcare Plaza, Zirakpur, Punjab 140603
                  <br />
                  <br />
                  <span5>Phone :</span5>+61 737272862
                  <br />
                  <br />
                  <span5>Email :</span5> freshveg@gmail.com
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="ftt text-center text-white">
          <div class="container p-4 pb-0">
            <section class="mb-4">
              <a
                data-aos="zoom-out-up"
                class="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
              >
                <i class="fab fa-facebook-f"></i>
              </a>

              <a
                data-aos="zoom-out-up"
                class="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#55acee" }}
                href="#!"
                role="button"
              >
                <i class="fab fa-twitter"></i>
              </a>

              <a
                data-aos="zoom-out-up"
                class="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#dd4b39" }}
                href="#!"
                role="button"
              >
                <i class="fab fa-google"></i>
              </a>

              <a
                data-aos="zoom-out-up"
                class="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href="#!"
                role="button"
              >
                <i class="fab fa-instagram"></i>
              </a>

              <a
                data-aos="zoom-out-up"
                class="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#0082ca" }}
                href="#!"
                role="button"
              >
                <i class="fab fa-github"></i>
              </a>
            </section>
          </div>

          <div class="text-center p-3" style={{ backgroundColor: "black" }}>
            © 2023 Copyright
            <span5> Developed by</span5> Rakesh singh
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;

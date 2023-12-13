import React from "react";
import { BsFillCartCheckFill, BsCaretDownFill, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "../Components/cart";
import "./common.css";
function Nav() {
  const items = useSelector((state) => state);
  // console.log(items);
  const Total = items.cart.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );
  return (
    <>
      <div className="mainnav">
        <div className="heder">
          <div class="container">
            <div class="row">
              <div class="col firstcol">
                <span>
                  {" "}
                  <span1>Call Us</span1> +91 765887642
                </span>
                <span>
                  USD <BsCaretDownFill />
                </span>
                <span>
                  Language <BsCaretDownFill />
                </span>
              </div>

              <div class="col text-end">
                <span>
                  <Link>Account</Link>
                </span>
                <span>
                  <Link>Whitelist</Link>
                </span>
                <span>
                  <Link>CheckOut</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Fresh<span3>Veg</span3>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0 p-2">
                <li class="nav-item ">
                  <Link to="/">
                    <a class="nav-link " aria-current="page" href="#">
                      Home
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/about">
                    <a class="nav-link " aria-current="page" href="#">
                      About
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/category">
                    <a class="nav-link" aria-current="page" href="#">
                      Category
                    </a>
                  </Link>
                </li>
               

                <li class="nav-item">
                  <Link to="/gallery">
                    {" "}
                    <a class="nav-link " aria-current="page" href="#">
                      Gallery
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/allblog">
                    {" "}
                    <a class="nav-link " aria-current="page" href="#">
                      Blog
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/contact">
                    <a class="nav-link " aria-current="page" href="#">
                      Contact
                    </a>
                  </Link>
                </li>
                {/* <li class="nav-item">
                  <Link to="/more">
                    {" "}
                    <a class="nav-link " aria-current="page" href="#">
                      More
                    </a>
                  </Link>
                </li> */}
              </ul>
              <form class="d-flex mx-auto">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn " type="submit">
                  <BsSearch fontSize={30} style={{ color: "white" }} />
                </button>
              </form>
            </div>
          </div>
        </nav>
        <div className="conatiner second-hreade">
          <div class="container-fluid ">
            <div class="row">
              <div class="col heder2 "></div>
              <div
                class="col text-end p-1 mt-2"
                style={{ marginRight: "40px" }}
              >
                {/* <span style={{marginBottom:"40px"}}>
                  <Link to="/login">Login</Link>
                </span> */}

               

                {/* <button
                  class="btn mt-1 "
                  style={{ backgroundColor: "#66ff66",
                   borderRadius: "50%"
                  ,padding:"10px",
                boxShadow:"0 0 10px grey" }}
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <BsFillCartCheckFill
                    fontSize={20}
                    style={{ color: " rgb(104, 85, 255)" }}
                  />
                  <p>{items.cart.length} </p>
                </button> */}
                <button
                  type="button"
                  style={{
                    backgroundColor: "#66ff66",
                    borderRadius: "50%",
                    padding: "10px",
                    boxShadow: "0 0 10px grey",
                  }}
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  class="btn btn-primary position-relative"
                >
                  <BsFillCartCheckFill
                    fontSize={20}
                    style={{ color: " rgb(104, 85, 255)" }}
                  />
                  <span
                    class="position-absolute top-0 start-10  translate-middle badge rounded-pill bg-danger "
                    style={{ fontSize: "13px" }}
                  >
                    {items.cart.length}
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </button>
                <div
                  class="offcanvas offcanvas-end "
                  tabindex="-1"

                  style={{backgroundColor:"rgb(209,230,235)"}}
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                >
                  <div class="offcanvas-header ">
                    <h5 id="offcanvasRightLabel">
                      <Cart />
                    </h5>
                    <button
                      type="button"
                      class="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="offcanvas-body fade fade m">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;

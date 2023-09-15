import React from "react";
import "../Home/home.css";
import Cart from "../Components/cart";
import Nav from "../Pages/Nav";
import { Link } from "react-router-dom";
import About from "../Pages/About";
import Footer from "../Pages/Footer";
import Product from "../Components/product";
import Latestblog from "../Blog/Latestblog";
import Allblog from "../Blog/Allblog";
import Brand from "../Pages/Brand";
import Review from "../Pages/Review";

function Home() {
  return (
    <>
      <div className="mainhome-page">
        <div className="banner">
          <div
            className="content"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1>
              Make Your Life Healthy With Fresh <span3>Veggies</span3> Eat the
              Rainbow Daily!
            </h1>
            <p>
              Fresh vegetables are nature's vibrant gems, bursting with color,
              flavor, and nutrients. From crisp green lettuce to juicy red
              tomatoes and vibrant orange carrots, each bite offers a symphony
              of taste and health benefits.
            </p>
            <button className="btn2">
              <span className="shopnow">Shop Now</span>
            </button>
          </div>
        </div>
        <About />
        <div className="container-fluid latesveg p-4 mt-5">
          <div className="headcontent lsv " style={{ textAlign: "center" }}>
            <h3>Latest Season Veg</h3>
          </div>
          <div class="container mt-5">
            <div class="row">
              <div class="col" data-aos="fade-right">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src="https://img.freepik.com/free-photo/top-view-bundles-fresh-greens-tomatoes-with-stem-white-background_140725-143206.jpg?w=900&t=st=1694238083~exp=1694238683~hmac=c287aa0955c17ee4011b0e3fc9c071dcff17955889d23876c3d4f1c2a72357db"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Tomatoes</h5>
                    <p class="card-text">
                      Bursting with lycopene, tomatoes are a heart-healthy
                      choice. They add a tangy sweetness to salads, sauces, and
                      sandwiches.
                    </p>
                    <Link>Shop</Link>
                  </div>
                </div>
                <br />
              </div>
              <div class="col" data-aos="fade-right ">
                {" "}
                <div class="card" style={{ width: "18rem" }}>
                  <img src="https://img.freepik.com/premium-photo/fresh-vegetables_181303-634.jpg?size=626&ext=jpg&ga=GA1.2.1032257992.1693392948&semt=ais" />
                  <div class="card-body">
                    <h5 class="card-title">Broccoli </h5>
                    <p class="card-text">
                      This verdant cruciferous gem is rich in vitamins,
                      minerals, and fiber. It's renowned for its cancer-fighting
                      properties cooking.
                    </p>
                    <Link>Shop</Link>
                  </div>
                </div>
                <br />
              </div>
              <div class="col" data-aos="fade-left">
                {" "}
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src="https://img.freepik.com/free-photo/white-vegetable-healthy-fresh-natural_1203-5946.jpg?size=626&ext=jpg&ga=GA1.2.1032257992.1693392948&semt=ais"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Bell Peppers</h5>
                    <p class="card-text">
                      Vibrant and crisp, bell peppers provide a punch of vitamin
                      C and make a colorful addition to stir-fries, salads, and
                      fajitas.
                    </p>
                    <Link>Shop</Link>
                  </div>
                </div>
                <br />
              </div>
              <div class="col" data-aos="fade-left">
                {" "}
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src="https://img.freepik.com/free-photo/front-view-fresh-vegetables-cabbage-parsley-bell-peppers-lettuce-dill-cauliflower-tomatoes-cucumber-dark-surface_140725-62448.jpg?size=626&ext=jpg&ga=GA1.2.1032257992.1693392948&semt=ais"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Spinach</h5>
                    <p class="card-text">
                      Packed with iron, folate, and antioxidants, spinach is a .
                      Its tender leaves can be enjoyed raw countless dishes.
                    </p>
                    <Link>Shop</Link>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
        {/* <Allblog /> */}

        <div className="mt-5 ">
          <Product />
          <Brand />
          <Review />
        </div>
      </div>
    </>
  );
}

export default Home;

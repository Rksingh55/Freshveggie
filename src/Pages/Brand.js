import React from "react";

function Brand() {
  return (
    <>
      <div className="header  mt-5" style={{ marginLeft: "120px" }}>
        <h3 style={{ color: "blue", fontWeight: "bold" }}>Featured Brand</h3>
      </div>
      <div className="brandmain mt-5">
        <div className="brandcontent p-4">
          <div class="container">
            <div class="row">
              <div
                class="col"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div class="card ">
                  <div class="card-body">
                    <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-4.svg" />
                  </div>
                </div><br/>
              </div>
              <div
                class="col"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div class="card">
                  <div class="card-body">
                    <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-5.svg" />
                  </div>
                </div><br/>
              </div>
              <div
                class="col"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div class="card">
                  <div class="card-body">
                    <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg" />
                  </div>
                </div><br/>
              </div>
              <div
                class="col"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div class="card">
                  <div class="card-body">
                    <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-3.svg" />
                  </div>
                </div><br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brand;

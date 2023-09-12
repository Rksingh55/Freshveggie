import React from "react";

function Contact() {
  return (
    <>
      <div className="contactpage">
        <div className="contactus mt-5 mb-2">
          <div class="container">
          <div className="drs mb-3">
            <h3 data-aos="fade-down-left" data-aos-duration="2000">
              Contact Us
            </h3>
          </div>
            <div class="row">
              <div
                class="col  mapp"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div
                  id="map-container-google-3"
                  class="z-depth-1-half map-container-3"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div class="col" data-aos="fade-up" data-aos-duration="2000">

                <form className="form1">
                  <div class="row mb-4">
                    <div class="col">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example1">
                          First name
                        </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example2">
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example3">
                      Email address
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="number"
                      id="form3Example4"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example4">
                      Mobile No
                    </label>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-4">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example33"
                      checked
                    />
                    <label class="form-check-label" for="form2Example33">
                      Subscribe to our newsletter
                    </label>
                  </div>

                  <button type="submit" class="btn btn-primary btn-block mb-4">
                    Submit
                  </button>

                  <div class="text-center">
                    <p>Follow Us:</p>
                    <button
                      type="button"
                      class="btn btn-secondary btn-floating mx-1"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-secondary btn-floating mx-1"
                    >
                      <i class="fab fa-google"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-secondary btn-floating mx-1"
                    >
                      <i class="fab fa-twitter"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-secondary btn-floating mx-1"
                    >
                      <i class="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

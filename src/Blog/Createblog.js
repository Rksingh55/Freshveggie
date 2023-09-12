import React from "react";
// import "../superAdmin.scss";
import axios, { Axios } from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
function Createblog() {
  const [heading, setheading] = useState("");
  const[blogImage,setblogImage]=useState("");
  const [paragraph, setparagraph] = useState("");
  const [createdBy, setcreatedBy] = useState("");
  const [description, setdescription] = useState("");
  // useEffect(() => {
  //   onSubmitHandler();
  // }, []);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let newObject = {
      heading,
      blogImage,
      paragraph,
      createdBy,
      description,
    };
    // console.log("l-19", newObject);
    try {
      await axios.post(
        "http://localhost:7000/api/v1/modules/blogs",
        newObject,
        {
          headers: {
            "eh-auth-token": localStorage.getItem("auth"),
          },
        }
      );

      //   toast.success("created successfull");
    } catch (error) {
      //   toast.error("Plan Creation failed");
    }
  };
  return (
    <>
      <div className="createplan_mains ">
        <div
          className="container mt-5 w-75 p-5"
          style={{ backgroundColor: "rgb(10, 64, 92)", borderRadius: "10px" }}
        >
          <div className="header">
            <h3>Create Plan!!</h3>
          </div>
          <form onSubmit={onSubmitHandler}>
          <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
               image
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  onChange={(val) => {
                    setblogImage(val.target.value);
                  }}
                  class="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
               Heading
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  onChange={(val) => {
                    setheading(val.target.value);
                  }}
                  class="form-control"
                  id="inputPassword"
                />
              </div>
            </div>

            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                paragraph{" "}
              </label>
              <div class="col-sm-10">
                <input
                  onChange={(val) => {
                    setparagraph(val.target.value);
                  }}
                  type="text"
                  class="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                createdBy
              </label>
              <div class="col-sm-10">
                <input
                  onChange={(val) => {
                    setcreatedBy(val.target.value);
                  }}
                  type="text"
                  class="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Discription
              </label>
              <div class="col-sm-10">
                <input
                  onChange={(val) => {
                    setdescription(val.target.value);
                  }}
                  type="text"
                  class="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
            <div className="" style={{ textAlign: "end" }}>
              <button
                className="btn"
                type="submit"
                style={{ backgroundColor: "white" }}
              >
                Submit
              </button>
             <button className="btn3">
             <Link to="/allblog">Back</Link>
             </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Createblog;

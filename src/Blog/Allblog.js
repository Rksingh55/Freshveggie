import axios from "axios";
import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import { BsPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
function Allblog() {
  const [data, setData] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editedData, setEditedData] = useState({});

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditedData(data[index]);
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.put(
        "http://localhost:7000/api/v1/modules/blogs",
        editedData,
        {
          headers: {
            "eh-auth-token": localStorage.getItem("auth"),
          },
        }
      );

      console.log("Request successful");
      console.log(response.data);

      //  ; toast.success("Plan Upate Successfull!!")
    } catch (error) {
      console.error("Error:", error);
    }
    const updatedData = [...data];
    updatedData[editIndex] = editedData;

    setEditIndex(-1);

    setData(updatedData);
  };
  // console.log("l-6", data);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:7000/api/v1/modules/blogs",
        {
          headers: {
            "eh-auth-token": localStorage.getItem("auth"),
          },
        }
      );
      console.log("l-53", response.data.data);
      // toast.success("Your Avilable Plan");
      setData(response.data.data.availableBlog);
    } catch (error) {
      //   toast.error("Something went wrong");
    }
  };
  const handleDelete = async (_id) => {
    try {
      const response = await axios.delete(
        "http://localhost:7000/api/v1/modules/blogs",
        {
          headers: {
            "eh-auth-token": localStorage.getItem("auth"),
          },
          data: { _id },
        }
      );
      const updatedData = data.filter((item) => item._id !== _id);
      setData(updatedData);
      //   toast.success("Deleted successfully");
    } catch (error) {
      //   toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="login_leads_data">
        <div className="mt-5">
          <div className="container">
            <Link to="/createblog">Create</Link>
            <div className="header">
              <h3 style={{ color: "blue", fontWeight: "bold" }}>Latest Blog</h3>
            </div>
            {Array.isArray(data) && data.length > 0 ? (
              <div className="card-container bg-red" >
                <div className="row">
                  {data.map((item, index) => (
                    <div
                    data-aos="fade-up"
     data-aos-duration="3000"    
                      className="col-md-4 mt-4"
                      key={index}
                      style={{
                        border: "4px solid green",
                        backgroundColor: "whitesmoke",
                        boxShadow: "10px 10px  #66ff66",
                        margin: "20px",

                        marginLeft: "10px",
                      }}
                    >
                      <div className="card-heading  ">
                        {editIndex === index ? (
                          <input
                            type="text"
                            value={editedData.planName}
                            onChange={(e) =>
                              setEditedData({
                                ...editedData,
                                planName: e.target.value,
                              })
                            }
                          />
                        ) : (
                          <img
                            src={item.blogImage}
                            style={{ width: "400px" }}
                          />
                        )}
                      </div>
                      <div className="card-heading">
                        {editIndex === index ? (
                          <input
                            type="text"
                            value={editedData.planName}
                            onChange={(e) =>
                              setEditedData({
                                ...editedData,
                                planName: e.target.value,
                              })
                            }
                          />
                        ) : (
                          <h1 className="p-3">{item.heading}</h1>
                        )}
                      </div>
                      <div className="card-paragraph ">
                        {editIndex === index ? (
                          <input
                            type="text"
                            value={editedData.paragraph}
                            onChange={(e) =>
                              setEditedData({
                                ...editedData,
                                paragraph: e.target.value,
                              })
                            }
                          />
                        ) : (
                          <h4>{item.paragraph}</h4>
                        )}
                      </div>
                      <div className="card-description">
                        {editIndex === index ? (
                          <input
                            type="text"
                            value={editedData.description}
                            onChange={(e) =>
                              setEditedData({
                                ...editedData,
                                description: e.target.value,
                              })
                            }
                          />
                        ) : (
                          <p>{item.description}</p>
                        )}
                      </div>
                      <div className="card-actions p-3">
                        {editIndex === index ? (
                          <button
                            className="btn"
                            style={{ backgroundColor: "red", color: "white" }}
                            onClick={handleSaveClick}
                          >
                            Save
                          </button>
                        ) : (
                          <>
                            <button
                              className="btn btn-primary mt-4"
                              onClick={() => handleEditClick(index)}
                            >
                              <BsPencilFill />
                            </button>
                            <button
                              className="btn btn-primary"
                              style={{ marginLeft: "10px" }}
                              onClick={() => handleDelete(item._id)}
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>No data available</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Allblog;

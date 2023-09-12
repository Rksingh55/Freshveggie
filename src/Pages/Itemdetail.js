import React, { useState } from "react";

const Itemdetail = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = item.imageUrl;
    link.download = item.title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="gallery-item" onClick={openModal}>
      <div className="image-container">
        <img src={item.imageUrl} alt={item.title} />
      </div>
      <br />
      <h5>{item.title}</h5>
      <h5>{item.Price}</h5>
     
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content" onClick={handleModalClick}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={item.imageUrl} alt={item.title} className="IMGV" />
            <h5>{item.title}</h5>
            <h5>{item.Price}</h5>
            <button className="download-button" onClick={handleDownloadClick}>
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Itemdetail;

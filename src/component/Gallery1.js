import React, { useState } from "react";
import GalleryItem from "./GalleryItem";
import SearchBar from "./SearchBar";

const Gallery = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTitle, setFilterTitle] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleFilterByTitle = (title) => {
    setFilterTitle(title);
  };

  const handleShowAll = () => {
    setFilterTitle("");
  };

  const filteredItems = items.filter((item) => {
    const titleMatches = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const titleFilterMatches = item.title === filterTitle || !filterTitle;

    return titleMatches && titleFilterMatches;
  });

  const uniqueTitles = Array.from(new Set(items.map((item) => item.title)));

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="filter-buttons mt-3">
        <button
          onClick={handleShowAll}
          style={{
            backgroundColor: "red",
            padding: "5px",
            border: "2px solid red",
            margin: "5px",
            borderRadius: "5px",
            boxShadow: "0 0 5px grey",
            color: "white",
          }}
          className={!filterTitle ? "active" : ""}
        >
          All Photos
        </button>
        {uniqueTitles.map((title, index) => (
          <button
            style={{
              backgroundColor: "pink",
              padding: "5px",
              border: "2px solid red",
              margin: "5px",
              borderRadius: "5px",
              boxShadow: "0 0 5px grey",
            }}
            key={index}
            onClick={() => handleFilterByTitle(title)}
            className={title === filterTitle ? "active" : ""}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="gallery">
        {filteredItems.map((item, index) => (
          <GalleryItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

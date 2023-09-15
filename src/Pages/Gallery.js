import React from "react";
import Gallery from "../component/Gallery1";

const items = [
  {
    imageUrl:
      "https://img.freepik.com/free-photo/healthy-vegetables-old-dark-background_1150-38002.jpg?size=626&ext=jpg&ga=GA1.1.1834484368.1694781322&semt=ais",
    title: "Lord Ganesh",
    tags: ["tag1", "tag2"],
  },

  {
    imageUrl:
      "https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?size=626&ext=jpg&ga=GA1.1.1834484368.1694781322&semt=ais",
    title: "Verbal design ",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/top-view-assortment-vegetables-paper-bag_23-2148853335.jpg?size=626&ext=jpg&ga=GA1.1.1834484368.1694781322&semt=ais",
    title: "Illustrators",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/healthy-vegetables-old-dark-background_1150-38009.jpg?size=626&ext=jpg&ga=GA1.1.1834484368.1694781322&semt=ais",
    title: "Robot",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/mix-vegetable_1339-374.jpg?size=626&ext=jpg&ga=GA1.1.1834484368.1694781322&semt=ais",
    title: "New Gerneration",
    tags: ["tag1", "tag2"],
  },


];

function Gallery_main() {
  return (
    <div className="App" style={{textAlign:"center"}} >
      <div className="gallery" > 
      <Gallery items={items}  />
      </div>
    
    </div>
  );
}

export default Gallery_main;

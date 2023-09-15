import React from "react";
import Gallery from "../component/Gallery1";

const items = [
  {
    imageUrl:
      "https://img.freepik.com/free-photo/healthy-vegetables-old-dark-background_1150-38002.jpg?size=626&ext=jpg&ga=GA1.1.1834484368.1694781322&semt=ais",
    title: "Brussels Sprout",
    tags: ["tag1", "tag2"],
  },

  {
    imageUrl:
      "https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?size=626&ext=jpg&ga=GA1.1.1834484368.1694781322&semt=ais",
    title: "Beets",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/top-view-assortment-vegetables-paper-bag_23-2148853335.jpg?size=626&ext=jpg&ga=GA1.1.1834484368.1694781322&semt=ais",
    title: "Radishes",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/healthy-vegetables-old-dark-background_1150-38009.jpg?size=626&ext=jpg&ga=GA1.1.1834484368.1694781322&semt=ais",
    title: "Asparagus",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/side-view-ripe-fresh-vegetables-colorful-bell-peppers-tomatoes-garlic-broccoli-green-onion-black-background_141793-3403.jpg?size=626&ext=jpg&ga=GA1.1.1834484368.1694781322&semt=ais",
    title: " Kale vege",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/front-view-fresh-vegetables-with-greens-dark-table-vegetable-color-ripe-salad_140725-124765.jpg?size=626&ext=jpg&ga=GA1.1.1834484368.1694781322&semt=ais",
    title: " Lettuce",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://img.freepik.com/premium-photo/vegetables-fruits-white_55883-892.jpg?size=626&ext=jpg&ga=GA1.1.1834484368.1694781322&semt=ais",
    title: " Kale",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/healthy-vegan-salad-fresh-vegetables-wood-table-generated-by-ai_188544-15180.jpg?size=626&ext=jpg&ga=GA1.1.1834484368.1694781322&semt=ais",
    title: " Kale",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://img.freepik.com/premium-photo/collection-fruits-vegetables-isolated_135427-2725.jpg?size=626&ext=jpg&ga=GA1.1.1834484368.1694781322&semt=ais",
    title: " Cauliflower",
    tags: ["tag1", "tag2"],
  },
];

function Gallery_main() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <div className="gallery">
        <Gallery items={items} />
      </div>
    </div>
  );
}

export default Gallery_main;

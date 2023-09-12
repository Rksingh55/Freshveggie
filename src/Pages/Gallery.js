import React from "react";
import Gallery from "../component/Gallery1";

const items = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1607604760190-ec9ccc12156e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    title: "Lord Ganesh",
    tags: ["tag1", "tag2"],
  },

  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1691801584986-e1b21e055a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    title: "Verbal design ",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1586&q=80",
    title: "Illustrators",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Robot",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    title: "New Gerneration",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1506&q=80",
    title: "Modern CPU",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Headphones",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1521309918586-feb7aa79a61b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    title: "Flowers",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1692620334806-37b011030393?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1608&q=80",
    title: "Shoes",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1632769092370-c618c699dc7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    title: "Dogs",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1682090850744-01dc9acb326d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Family",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1508583732154-e9ff899f8534?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    title: "Lotus",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1692965977064-f0c4c64dcdc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    title: "Lilly",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1692862419231-04470103dc7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Girls",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1692862419231-04470103dc7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Girls",
    tags: ["tag1", "tag2"],
  },
  
];

function Gallery_main() {
  return (
    <div className="App" style={{textAlign:"center"}} >
      {/* <h3>Your Gallery</h3> */}
      <div className="gallery" > 
      <Gallery items={items}  />
      </div>
    
    </div>
  );
}

export default Gallery_main;

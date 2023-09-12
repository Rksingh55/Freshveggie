import React from "react";

import Item2 from "../Pages/Item2";

const items = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1607604760190-ec9ccc12156e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    title: "Lord Ganesh",
    Price: "288",
    tags: ["tag1", "tag2"],
  },

  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1691801584986-e1b21e055a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    title: "Verbal design ",
    Price: "233",
    tags: ["tag1", "tag2"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1586&q=80",
    title: "Illustrators",
    Price: "599",
    tags: ["tag1", "tag2"],
  },
];

function Item() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <div className="gallery">
        <Item2 items={items} />
      </div>
    </div>
  );
}

export default Item;

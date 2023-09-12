import React from "react";
import { addItem } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

function Product() {
  const dispatch = useDispatch();

  const products = [
    {
      name: "Brussels Sprout",
      para: "We understand the importan play in promoting health and well-being.",
      price: "35",
      image:
        "https://img.freepik.com/premium-photo/collection-vegetables-isolated-white-background-clipping-path_44074-8559.jpg?size=626&ext=jpg&ga=GA1.1.1032257992.1693392948&semt=ais",
    },
    {
      name: "Beets",
      price: "45",
      para: "We understand the importan play in promoting health and well-being.",
      image:
        "https://img.freepik.com/premium-photo/assortment-fresh-fruits-vegetables-isolated-white_392895-24654.jpg?size=626&ext=jpg&ga=GA1.1.1032257992.1693392948&semt=ais",
    },

    {
      name: "Radishes",
      price: "122",
      para: "We understand the importan play in promoting health and well-being.",
      image:
        "https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?size=626&ext=jpg&ga=GA1.2.1032257992.1693392948&semt=ais",
    },
    {
      name: "Asparagus",
      price: "453",
      para: "We understand the importan play in promoting health and well-being.",
      image:
        "https://img.freepik.com/free-photo/pile-fresh-vegetables_144627-16683.jpg?size=626&ext=jpg&ga=GA1.2.1032257992.1693392948&semt=ais",
    },
    {
      name: "Kale",
      price: "45",
      para: "We understand the importan play in promoting health and well-being.",
      image:
        "https://img.freepik.com/premium-photo/healthy-tasty-fruits-vegetables_135427-4538.jpg?size=626&ext=jpg&ga=GA1.2.1032257992.1693392948&semt=ais",
    },
    {
      name: "Lettuce",
      price: "32",
      para: "We understand the importan play in promoting health and well-being.",
      image:
        "https://img.freepik.com/premium-photo/collection-fruits-vegetables-isolated_135427-230.jpg?size=626&ext=jpg&ga=GA1.2.1032257992.1693392948&semt=ais",
    },

    {
      name: "Cauliflower",
      price: "24",
      para: "We understand the importan play in promoting health and well-being.",
      image:
        "https://img.freepik.com/free-photo/pile-fresh-vegetables_144627-17177.jpg?size=626&ext=jpg&ga=GA1.1.1032257992.1693392948&semt=ais",
    },
    {
      name: "Zucchini",
      price: "23",
      para: "We understand the importan play in promoting health and well-being.",
      image:
        "https://img.freepik.com/premium-photo/asian-vegetables-white_55883-1003.jpg?size=626&ext=jpg&ga=GA1.1.1032257992.1693392948&semt=ais",
    },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <>
      <div className="header mt-5" style={{ marginLeft: "140px" }}>
        <h3 style={{ color: "blue", fontWeight: "bold" }}>Latest Products</h3>
      </div>
      <div className="product-list-container mt-5 " data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </div>
            <div className="product-info">
              <h3
                className="product-name"
                style={{ color: "green", fontWeight: "bold" }}
              >
                {product.name}
              </h3>
              <p className="product-price">{product.para}</p>

              <p
                className="product-price"
                style={{ color: "red", fontWeight: "bold" }}
              >
                ${product.price}
              </p>
            </div>
            <button
              className=" btnproduct"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;

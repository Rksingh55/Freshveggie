import React from "react";
import { useSelector } from "react-redux";
function Cart() {
  const items = useSelector((state) => state);
  console.log(items);
  const Total = items.cart.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );

  return (
    <>
      <div className="div">
        <div
          className="header"
          style={{
            backgroundColor: "rgb(104, 85, 255)",
            padding: "20px",
            color: "white",
            width: "100%",
            boxShadow: "5px 5px 5px rgb(18,214,18",
          }}
        >
          Lets CheckOut Your Shoping Items
        </div>
        <div className=" cartcontent mt-5">
          <div class="container">
            <div class="row p-3">
              <div
                class="col"
                style={{ fontWeight: "bold", color: " rgb(104, 85, 255)" }}
              >
                {" "}
                Your Items{" "}
              </div>
              <div class="col mt-2"> {items.cart.length}</div>
            </div>
          </div>
          <div class="container">
            <div class="row p-3">
              <div
                class="col"
                style={{ fontWeight: "bold", color: " rgb(104, 85, 255)" }}
              >
                {" "}
                Total Price
              </div>
              <div class="col"> {Total}$</div>
            </div>
          </div>

          <button
            className="btn"
            style={{
              padding: "10px",
              color: "white",
              backgroundColor: "red",

              fontWeight: "bold",
              margin: "20px",
              width: "100px",
              borderRadius: "20px",
            }}
          >
            CheckOut
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;

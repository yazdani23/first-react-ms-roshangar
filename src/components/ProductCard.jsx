import React, { useState } from "react";

const ProductCard = ({ img, title, price }) => {
  // let qty = 0;
  const [qty, setQty] = useState(0);
  // const [bg, setBg] = useState("bg-white");
  const [bg, setBg] = useState(false); // false:bg-white true:bg-success

  const addToCart = () => {
    setQty(qty + 1);
    console.log(qty);
  };
  // const changeBg = () => {
  //   setBg("bg-success");
  // };

  const toggleBg = () => {
    setBg(!bg);
  };
  return (
    <div className="col">
      <div className={`card h-100 ${bg ? "bg-success" : "bg-white"}`}>
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p>Price: {price} $</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" onClick={addToCart}>
            Add To Cart
          </button>
          <span className="text-danger fs-4 ms-3">{qty}</span>
          {/* <button className="btn btn-warning ms-3" onClick={changeBg}>Change Bg</button> */}
          <button className="btn btn-warning ms-3" onClick={toggleBg}>
            Change Bg
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

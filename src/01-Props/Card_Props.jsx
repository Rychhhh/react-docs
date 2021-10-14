import React from "react";

const Card = (props) => {
  return (
    <div className="d-flex" style={{ display: "flex", flex: "wrap" }}>
      <div className="card " style={{ width: "18rem" }}>
        <img src="https://placeimg.com/200/100/tech" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  title: "tidak ada judul",
  desc: "tidak ada deskripsi",
  harga: "0 Rb",
};

export default Card;

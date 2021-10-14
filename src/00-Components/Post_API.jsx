import React from "react";

const Post = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="https://placeimg.com/200/100/tech" className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title" onClick={() => props.detail(props.data.id)}>
          {props.data.title}
        </h5>
        <p className="card-text">{props.data.body}</p>
        <button className="btn btn-primary me-3" onClick={() => props.update(props.data)}>
          Update
        </button>
        <button className="btn btn-danger" onClick={() => props.remove(props.data.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Post;

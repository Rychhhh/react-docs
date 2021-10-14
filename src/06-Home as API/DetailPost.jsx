import axios from "axios";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class DetailBlog extends React.Component {
  state = {
    posts: {
      title: "",
      body: "",
    },
  };

  componentDidMount() {
    let id = this.props.match.params.postID;
    axios.get(`http://localhost:3004/posts/${id}`).then((res) => {
      console.log("result : ", res); // untuk mengecek respon dari axios get berupa console
      let post = res.data; // membuat variable menampung data pada respon axios get
      this.setState({
        // membuat state untuk menambahkan API ke state local
        posts: {
          title: post.title,
          body: post.body,
        },
      });
    });
  }

  render() {
    return (
      <Fragment>
        <div className="container col mt-5 text-center" style={{ width: "18rem" }}>
          <div className="card">
            <img src="https://placeimg.com/200/100/tech" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{this.state.posts.title}</h5>
              <p className="card-text">{this.state.posts.body}</p>
              <Link className="btn btn-danger" to="/blogpost">
                Back
              </Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default DetailBlog;

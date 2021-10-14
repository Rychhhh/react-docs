import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import Post from "../00-Components/Post_API";
import API from "../07 - Service API";

class BlogPost extends Component {
  // State
  state = {
    post: [],
    users: [],
    formBlogPost: {
      id: "",
      title: "",
      body: "",
      userId: "",
    },
    isUpdate: false,
  };

  // ------------------- Axios ------- //
  // Peringkasan untuk memanggil API dari server
  getPostAPI = () => {
    // Get for Post
    API.getNewsPost().then((result) => {
      this.setState({
        post: result,
      });
    });
    // Get for Users
    API.getUser().then((result) => {
      this.setState({
        users: result,
      });
    });
  };

  // Pemanggilan API
  componentDidMount() {
    // Panggil function peringkasan API
    this.getPostAPI();
  }

  // Add data API
  // Ditambahkan di bagian form
  changeForm = (event) => {
    let BlogPostNew = { ...this.state.formBlogPost }; // Mengambil parameter title dan body pada formBlogPost
    let timestamp = new Date().getTime(); // Id
    if (!this.state.isUpdate) {
      BlogPostNew["id"] = timestamp; // Id
    }
    BlogPostNew[event.target.name] = event.target.value; // Parameter event target
    this.setState({
      formBlogPost: BlogPostNew,
    });
  };

  // Pada form untuk menambahkan data API
  postDataToAPI = () => {
    API.postNewsPost(this.state.formBlogPost).then(
      (result) => {
        console.log(result);
        this.getPostAPI();
        this.setState({
          formBlogPost: {
            id: "",
            title: "",
            body: "",
            userId: "",
          },
        });
      },
      (err) => {
        console.log(err);
      }
    );
  };

  // Fungsi untuk update data
  putDataToAPI = () => {
    API.putNewsPost().then(this.getPostAPI());
  };

  // Button Delete API
  handleRemove = (data) => {
    API.deleteNewsPost(data).then(this.getPostAPI());
  };

  // Button Update
  handleUpdate = (data) => {
    console.log(data); // Console.log ini mengembalikan semua parameter yaitu id, title, name yang ditulis di card jsxyang ditulis di card jsx
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };

  // Pergi ke detail setiap id
  handleDetail = (id) => {
    this.props.history.push(`/detail/${id}`);
  };

  //  Button Submit Form
  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h4>Blog Post</h4>

          {/* Form */}
          <form className="mb-3">
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input type="title" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" onChange={this.changeForm} value={this.state.formBlogPost.title} />
            </div>
            <div className="form-floating">
              <textarea className="form-control" name="body" id="floatingTextarea2" style={{ height: "200px" }} onChange={this.changeForm} value={this.state.formBlogPost.body}></textarea>
              <label for="floatingTextarea2">Content</label>
            </div>
            <button type="submit" class="btn btn-primary mt-2" onClick={this.handleSubmit}>
              Submit
            </button>
          </form>

          {/*  Mapping untuk API users */}
          {this.state.users.map((users) => {
            return (
              <p>
                {users.name} - {users.email}
              </p>
            );
          })}
          {/*  Mapping untuk API post */}
          {this.state.post.map((post) => {
            return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} detail={this.handleDetail} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(BlogPost);

import Post from "./Post"; // Create
import Get from "./Get"; // Read
import Put from "./Put"; // Update
import Delete from "./Delete"; // Delete

// Post
const postNewsPost = (data) => Post("posts", false, data); // karena false adalah root kedua yaitu RootPath

// Get
const getNewsPost = () => Get("posts?_sort=id&_order=desc", false);
const getUser = () => Get("users", true);

// Put
const putNewsPost = (id) => Put(`posts/${id}`, false); // Path Dan Root

// Delete
const deleteNewsPost = (id) => Delete(`posts/${id}`, false);

// Kumpulan Variabel dalam Global API
const API = {
  postNewsPost,
  getNewsPost,
  getUser,
  putNewsPost,
  deleteNewsPost,
};

export default API;

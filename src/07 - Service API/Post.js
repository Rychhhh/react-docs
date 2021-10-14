import axios from "axios";
import { RootOnlinePath, RootPath } from "./Config";

const Post = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(`${root ? RootOnlinePath : RootPath}/${path}`, data).then(
      (result) => {
        resolve(result);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

export default Post;

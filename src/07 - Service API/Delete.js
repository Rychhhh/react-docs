import axios from "axios";
import { RootOnlinePath, RootPath } from "./Config";

// GET service
const Delete = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    axios.delete(`${root ? RootOnlinePath : RootPath}/${path}`).then(
      (result) => {
        resolve(result.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

export default Delete;

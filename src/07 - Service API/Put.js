import axios from "axios";
import { RootOnlinePath, RootPath } from "./Config";

const Put = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.put(`${root ? RootOnlinePath : RootPath}/${path}`, data).then(
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

export default Put;

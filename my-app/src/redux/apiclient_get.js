import axios from "axios";
const instence = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  // params: {
  //   api_key: "your_api_key",
  //   language: "en-US",
  // },
});
export default instence;

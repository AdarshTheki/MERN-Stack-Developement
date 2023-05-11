import axios from 'axios'

const Instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  // headers.common["Authorization"] = ["AUth_Token"],
});
export default Instance;

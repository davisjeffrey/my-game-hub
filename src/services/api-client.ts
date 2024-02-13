import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a95eaa1f843844009d1462306ff96fe8",
  },
});

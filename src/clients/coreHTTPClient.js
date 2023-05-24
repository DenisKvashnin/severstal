import axios from "axios";

export default axios.create({
  baseURL: "https://lct-api.kovalev.team/api/",
  headers: {
    "Content-Type": "application/json",
  },
});


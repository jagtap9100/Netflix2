import React from "react";
import axios from "axios";
// Move this to a Server Component
export default async function tmdbapi() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
  } catch (error) {
    console.error(error);
    return { msg: "Error fetching data" };
  }
}

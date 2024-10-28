import React, { useState } from "react";
import { HashLoader } from "react-spinners";
import { useHook } from "../hook/useHook";
import Posts from "./Posts";
const User = () => {
  const { isLoading, data, error } = useHook(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (error) {
    <h1>{error}</h1>;
  }

  return (
    <div>
      {isLoading && <HashLoader color="red" />}
      {data.map((item) => (
        <Posts key={item.id} props={item} />
      ))}
    </div>
  );
};

export default User;

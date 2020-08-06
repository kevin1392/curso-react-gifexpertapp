import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setcategories] = useState(["One Punch"]);

  return (
    <>
      <h1>GifExpertApp</h1>
      <hr />

      <AddCategory setcategories={setcategories} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;

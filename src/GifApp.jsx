import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory= (newCategory) => {
    newCategory = newCategory.toLowerCase();
    if(categories.includes(newCategory)){
      return alert("Búsqueda ya realizada")
    }
    setCategories([ newCategory, ...categories])
  }

  return (
    <>
      <h1>GifApp</h1>
      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
        currentCategories={categories}
        //setCategories={setCategories}
      />

      {categories.map((category) => {
        return <GifGrid category={category} />;
      })}
    </>
  );
}
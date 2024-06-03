import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState("");

  const onInputChange = (event) => {
    setinputValue(event.target.value);
    console.log(inputValue);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    if (inputValue.trim().length <= 1){
      return alert("Coloca por lo menos 2 letras en el buscador")
    }
    onNewCategory(inputValue);
    setinputValue("");
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar GIFS"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
      
    </form>
  );
};

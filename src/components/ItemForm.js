import React, {useState} from "react";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit}) {
  const [add, setAdd] = useState('')
  const [select, setSelect] = useState('Produce')

  function handleOnChange(e) {
    setAdd(e.target.value)
  }
  function handleOnChangeSelect(event) {
    setSelect(event.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    const newItem = {
      id: uuid(),
      name: add,
      category: select, 
    }
    onItemFormSubmit(newItem)
  }
  
  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name" value={add} onChange={handleOnChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleOnChangeSelect} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

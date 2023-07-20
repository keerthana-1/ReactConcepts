import React from "react";
import {useState} from "react";


function ToDoList(){

    const [items,setItems]=useState([]);

    function onRemoveItem(itemToRemove){
       const newItems= items.filter(
            (item)=> {return item!==itemToRemove;}
        );
        setItems(newItems);
    }

    function onSubmit(event){
        event.preventDefault();
        const form=event.target;
        const input=form.item;
        const newItems=[...items,input.value];
        setItems(newItems);
        form.reset();
    }

    return (<div>

        <form onSubmit={onSubmit}>
            <input type="text" name="item"></input>
            <button>Add</button>
        </form>
        <ul>
           

{items.map((item, index) => (
    <Item onRemoveItem={onRemoveItem} key={item + index} item={item} />
  ))}
        </ul>

    </div>)
}

function Item({ item, onRemoveItem }) {
    return (
      <li>
        {item}
        <button className="delete" onClick={() => onRemoveItem(item)}>
          x
        </button>
      </li>
    );
  }
  
export default ToDoList;
import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  // the initial value for items is just going to be an empty array.
  const [items, setItems] = useState([]);

  // ----------------------------------------------------

  /*
  3.
  And then let's add this function .... handleChange
  . . . And then we get the event that's going to be passed to it.
  
  . . Now the next thing to do is to create a new constant which is 
  going to keep hold of the new value of the input.

  . . So we'll just call it newValue 
  . . and I'm going to set it to event.target.value

  . . And once we've gotten that, then we can 
  call setInputText 
  
  . . And inside this function we're going to pass it this newValue.
  . . . . . notice i don't actually need the previous value
  */

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  // ----------------------------------------------------

  /*
  4.
  we get to create this addItem function up here and 
  then inside this function we're going to add 
  whatever text is inside our inputs into our items array.
  */
  function addItem() {
    /* 
    5.
    we want to get hold of the previous items .. simply add 
    the new input at the end of the array as a new item.

     we're going to have to create a new arrow function.
     
     Inside the input of this arrow function is going to be 
     the previous items or previous values 
     whatever it is you want to call it.

     And then what we're going to return is going to be 
     a new array using the spread operator.

     So let's add our spread operator, add in all of 
     the items from our previous items 
     
     and then we're going
     to add the new item which is going to be what's 
     currently inside are inputText.

    */

    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    /* 
    clear the input after adding item
    set the input text to an empty
    */
    setInputText("");
  }

  // ----------------------------------------------------

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        {/* 
        1.
        to controlling the inputs controlling the inputs and 
        keeping the input value inline with the inputText
         
         . . . . . value={inputText}  */}

        {/*
        2.
        The next thing to do is, when do we actually want to 
        change the input text, when do we want to call this function.
        
        . . . . . So let's add an onChange={handleChange} to this input
        */}
        <input onChange={handleChange} type="text" value={inputText} />

        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {/* We would probably have to use map function */}
          {/* 
          then inside the map function we can pass it an arrow function 
          and inside this arrow function we'll get access to each item 
          or if you want to make sure that there's enough difference 
          between the array and the individual item, 
          you call it todoItem if you want. 
          
          But effectively just be sure that you know that this is 
          going to be the singular form that comes from mapping 
          through each of the items.

          And what we're going to return is an which has the 
          todoItem as the text in the list item.
          
          
          */}
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

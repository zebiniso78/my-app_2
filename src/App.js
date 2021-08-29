import React, {useState} from 'react';
import './App.scss';

import Todo from './Components/Todo/Todo';

function App() {

  const [value, setValue]= useState([
    {id: 0, title: 'A', IsCompleted: false },
    {id: 1, title: 'B', IsCompleted: false },
  ]);

  const handleRemoveValue =(evt) => {
    const {id} = evt.target.dataset;

    const filteredValues = value.filter(todo => todo.id !== Number(id));
    setValue(filteredValues); 
  };

  const handleCheckedValue = (evt) => {
    const {id} = evt.target.dataset;

    const foundValue = value.find((todos) => todos.id === Number(id));

    foundValue.IsCompleted = !foundValue.IsCompleted;

    if(foundValue.IsCompleted === true) {
      evt.target.nextElementSibling.classList.add('color-red');
    }
    else {
      evt.target.nextElementSibling.classList.remove('color-red');
    }

    console.log(foundValue);
  }; //here


  return (
  <div className='todo-wrapper'>
    <h1 className='heading'>Todos here </h1>
    <input className="input" placeholder="Type here..." type="text" onKeyUp={(evt) =>{
      if(evt.code === 'Enter') {
        const newValue = {
          id: value[value.length-1]?.id +1 || 0,
          title: evt.target.value.trim(),
          IsCompleted: false,
        };

        setValue([...value, newValue])
        evt.target.value = null;
      }
    }} />

    <ul className='todos-list'>
      {
        value.length > 0 && value.map(todo => {
            return <Todo key={todo.id} todo={todo} removeValue={handleRemoveValue} checkedValue={handleCheckedValue} />;
        }
        )
      }
    </ul>
    </div>
  );
}

export default App;

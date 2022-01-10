import React, {useState,useEffect} from 'react';
import './App.css';
import List from './TodoList/List';
import Todo from './TodoList/todo';

function App() {

  const [todoList,updateTodoList] = useState([]);
  const [currentTodo,updateCurrentTodo] = useState("");

  const AppendToList = () =>{
    if(currentTodo !== ''){
      updateTodoList(prev => [...prev,currentTodo]);
      document.getElementById('inputbox').value ='';
  
    }
    updateCurrentTodo("");
  }

  const GetCurrentTodo = (e) =>{
    updateCurrentTodo(e.target.value)
  }
  
  return (
    <>
    <div className="Clip"/>
    <div className="App">
    <h1 className="title">To-Do</h1>

      <div className="Con">
        <input id="inputbox" type="input-box" onChange={GetCurrentTodo}/>
        <button className="Add" onClick={AppendToList}>+</button>
      </div>


      <List todoList={todoList}/>

    </div>
    </>
  );
}

export default App;

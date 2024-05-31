import { useState } from 'react'
import './App.css'
//state

function App() {
  const [todos, setTodos]= useState([{
    title:"Go to Gym",
    description: "Go to the gym by 7-9",
    completed: false
  },
  {
    title:"Do DSA",
    description: "Do DSA",
    completed: true
  },

]);
function addTodo(){
  setTodos([...todos, {
    title: "New Title",
    description: "new Description"
  }])
}
  return (
      <div>
      <button onClick={addTodo}>add a random todo</button>
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}/>
      })}
      <DarkNewTodos todos= {todos} />
      </div>
  )
}

//component 
function DarkNewTodos(props){
  return <div>
    {props.todos.map(function(todo){
return <div style={{background:"black", color:"white"}}>
  <Todo title={todo.title} description={todo.description}/>
</div>
    })}
  </div>
}


function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}
export default App

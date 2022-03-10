import React from "react"
import './App.css';
import Todo from "./Components/todo/todo"
import Button  from "./Components/Button/button";





function App() {
  const [todos,setTodos ]=React.useState(JSON.parse(window.localStorage.getItem('todos'))||[])
  const [type,setType]=React.useState('')

  
  const handleDelete=(evt=>{

    const todoId=evt.target.dataset.todoId;

    const filtered=todos.filter((todo)=>todo.id!=todoId)

    window.localStorage.setItem('todos',JSON.stringify([filtered]))

    setTodos(filtered)

  })

  const handleCheck=(evt=>{
    const todoId=evt.target.dataset.todoId;

    const foundtodoId=todos.find((todo)=>todo.id==todoId)

    foundtodoId.isCompleted=!foundtodoId.isCompleted
    window.localStorage.setItem('todos',JSON.stringify([...todos]))
    setTodos([...todos])
  })

  

 


  console.log(type);
  return (
    <>

   <div className="todo__box">
    <div className="box__inner">
      <span className="tod0__span"></span>
    <input className="todo__input" clas type='text' placeholder="What needs to be done "
    onKeyUp={(evt)=>{
      
      if(evt.code==="Enter"){
        const newTodo={
          id:todos[todos.length-1]?.id+1||0,
          title:evt.target.value.trim(),
          isCompleted:false,
        }
        window.localStorage.setItem('todos',JSON.stringify([...todos,newTodo ]))

        setTodos([...todos,newTodo ])

        evt.target.value=null
      }
    }}

    /></div>
     <ul>
    {todos.length>0 && todos.map((todo)=>
    <Todo key={todo.id} todo={todo} handleDelete={handleDelete} handleCheck={handleCheck}>{todo.title}</Todo>
    
    )}
   
    </ul>

    <div className="box__buttons">
       <Button text="0items left items"></Button>
       <ul className="button__lists">
         <li className="todo__item button secondary"><Button onClick={()=>setType('all')} text="all"></Button></li>
         <li className="todo__item"><Button onClick={()=>setType('completed')} text="completed"></Button></li>
         <li className="todo__item"><Button onClick={()=>setType('uncompleted')} text="uncompleted"></Button></li>
       </ul>

       <Button  text='clear completed'></Button>
       
      
      </div>
  
  </div>

   

    </>
    
  );
}

export default App;

import React, { useReducer, useState } from 'react'

function reducer (state, action){
  switch(action.type){
    case "add-todo":
      return {
       todos: [... state.todos,{text:action.text, completed:false}]
    }
    default:
      return state
  }
}

export default function App(){
  const [{todos,todoCount},dispatch] = useReducer(reducer,{
    todos: [],
    todoCount:0
  })

  const [text,setText] = useState();

  return(
    <div>

      <form onSubmit={e =>{
        e.preventDefault();
        dispatch({type:'add-todo',text})
        setText('')        
        }
      }>
        <input  value={text} onChange={e => setText(e.target.value)}/>
        <button type = 'text' >add</button>
      </form>

      {todos.map((t,idx) =>(
        <div key={idx}>
          {t.text}
        </div>
      ))}
    </div>
  )
}
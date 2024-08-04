import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo,updateTodo,setEditId } from '../features/todo/todoSlice'; 
function AddTodo() {
  const [input,setInput] = useState('');
  const dispatch = useDispatch()
  const todos = useSelector(state=>state.todos)
  const editId = useSelector(state=>state.editId)
//Dispatch reducer ko use karte hue store mein change krta h
 
useEffect(()=>{
   if(editId){
    const todoToEdit = todos.find(todo=>todo.id===editId);
    if(todoToEdit){
      setInput(todoToEdit.text)
    }
   }
   else{
    setInput('')
   }
},[editId,todos])


  const addTodoHandler = (e)=>{
    e.preventDefault()
   if(editId){
     dispatch(updateTodo({id:editId,text:input}));
     dispatch(setEditId(null));
   }else{
    dispatch(addTodo(input))
   }
    setInput('')
  }
  return (
    <div>
    <form onSubmit={addTodoHandler}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={input}
              onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
            {editId ? 'Update' : 'Add' }
          </button>
      </form>
    </div>
  )
}

export default AddTodo



//Step1:- import createSlice and(optional:-nanoid)  from "@reduxjs/toolkit

//Step2:- declare a variable and use createSlice
/**
 const yourSlice = createSlice({
 name: 'your name',
 intialState: {} or []//we can write defination also here or define before createSlice,
 reducers:{}//it contains properties & function in we can declare or define 
 })
 */
import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1,text:"Hello world"}],
    editId: null
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        //jab bhi koi function likhte hai 2 chijo ka access milta hai (state,action) state tells us what values in intialstate,action is like hame todo delte krni then id ki need hogi jo ki hame action se provide hogi
        addTodo:(state,action)=>{
         const todo = {
            id: nanoid(),
            text: action.payload
         }
         state.todos.push(todo)
        },
        removeTodo: (state,action) =>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo: (state,action) =>{
            state.todos = state.todos.map((todo)=> (todo.id === action.payload.id)?{...todo,text:action.payload.text}:todo)
        },  
        setEditId: (state, action) => {
            state.editId = action.payload;
        }  
    }
})

export const {addTodo,removeTodo,updateTodo,setEditId} = todoSlice.actions

export default todoSlice.reducer
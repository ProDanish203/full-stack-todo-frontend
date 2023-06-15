import axios from 'axios'
import React from 'react'
import { baseUrl } from '../Utils/Constants'

export const Todos = ({ todos, setUpdateUi, updateMode}) => {
    const deleteTodo = (id) => {

        setUpdateUi(prev => !prev)

        axios.delete(`${baseUrl}/delete/${id}`)
        .then((res) => {
            // console.log(res.data)
            // setUpdateUi(prev => !prev);
        })
        .catch((e) => console.log(e));
        
    }



  return (
    <>
    <ul className="list-container">
        {
            todos.map((todo, i) => (
            <li key={todo._id}>
                <p>{todo.todo}</p>
                <div>
                    <i className='fas fa-pen update' onClick={() => updateMode(todo._id, todo.todo)}></i>
                    <i className='fas fa-trash delete' onClick={() => {deleteTodo(todo._id)}}></i>
                </div>
            </li>   
            ))
        }
         
    </ul>
    </>
  )
}

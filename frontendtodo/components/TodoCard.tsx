'use client'

import { useState, useEffect } from "react";
import axios from 'axios';
import { FaCheck } from "react-icons/fa";

interface TodoItem {
    id: number;
    title: string;
    description?: boolean;
    is_completed: boolean;
}
const TodoCard = () => {

    const [todos, setTodos] = useState<TodoItem[]>([]);

    // Fetch tasks when the component mounts
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/todo/');
                setTodos(response.data);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, []); 

  const toggleCompletion = async (id: number, completed: boolean) => {
    try{
        const updatedTask = await axios.put(`http://127.0.0.1:8000/api/todo/${id}/`, {
            is_completed: !completed, title: todos.find(todo => todo.id === id)?.title})
            setTodos(todos.map(todo => (todo.id === id ? updatedTask.data : todo)));
    }catch(error){
        console.error('Error updating task:', error);
    }

  }

  return (
    <div className="bg-[#F2F0EF] text-[#171717] p-4 items-center">
     <ul className="ml-10">
     {todos.map(todo => (
                    <li className="w-[80%] border border-[#171717] p-2 mb-2 rounded-full flex justify-between" key={todo.id}>
                       <span className="w-[50%">{todo.title}</span>
                        <button onClick={() => toggleCompletion(todo.id, todo.is_completed)} className="ml-8 bg-[#b4b4b4] p-2 rounded-full shadow-md float-right">
                        {!todo.is_completed && <FaCheck className="text-[green]"/>}
                        </button>
                    </li>
                ))}

        </ul>
    </div>
  )
}

export default TodoCard
import React from 'react'
import Todo from './Todo'
/*
    API call:
    http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
    Parameters:
    APPID {APIKEY} is your unique API key
    Example of API call with the API key given to me for registering on https://home.openweathermap.org/:
    api.openweathermap.org/data/2.5/forecast?id=524901&APPID=a0c07608da28e327c40deb6d013f0600
*/
export default function TodoList({ todos, toggleTodo }) {
    return (
        todos.map(todo => {
            return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
        })
    )
}

import React, { useState, useRef, useEffect } from 'react';

import uuidv4 from 'uuid/v4';
import TodoList from './TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";
//to create a react application, type 'npx create-react-app my-appname'
//use npm start to run the application on the local server

//you can use 'className="mt-auto"' on CARD.title to put text on bottom of Jumbotron/Card

const LOCAL_STORAGE_KEY = 'todoApp.todos'
function App(){
    const [todos, setTodos] = useState([])
    const todoNameRef = useRef()
    
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(storedTodos) setTodos(storedTodos)
    }, [])
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])
    function toggleTodo(id) {
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }
    function handleAddTodo(e) {
        const name = todoNameRef.current.value
        if (name === '') return
        console.log(name)
        setTodos(prevTodos => {
            return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
        })
        todoNameRef.current.value = null
    }

    function handleClearTodos(){
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }
    return (
        <>
            <Card className="bg-dark text-white">
                    
                <Card.ImgOverlay className="d-flex flex-column">
                    <Card.Title ><h1>Mr. MowBellevue</h1></Card.Title>
                    <Card.Text>
                        Let Me Get That For You!!
                    </Card.Text>
                    <Card.Text className="mt-auto">Thanks For Visiting</Card.Text>
                </Card.ImgOverlay>
                <Card.Img src="mower3d_snippit3.PNG" alt="Logo of Mower in action" />
            </Card>
            <script src="holder.js"></script>
            
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="mower3d_snippit_mowing.PNG" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="mower3d_snippit5.PNG" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="mower3d_snippit4.PNG" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
            <div className="spacer-large"></div>
            <input ref={todoNameRef} type="text" />
            <button onClick={handleAddTodo}>Add Todo</button>
            <button onClick={handleClearTodos}>Clear Complete</button>
            <div>{todos.filter(todo => !todo.complete).length} left to do</div>
            
        </>
    )
}

export default App;
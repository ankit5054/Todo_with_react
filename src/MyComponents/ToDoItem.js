import React from 'react'
import { Card, Button } from 'react-bootstrap';

export default function ToDoItem({todos, onDelete}) {
    return (
        <>
        <Card style={{ width: '18rem', borderRadius: '10px' ,  }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
            <Card.Title>{todos.title}</Card.Title>
            <Card.Text className="text-sm">
            {todos.desc}
            </Card.Text>
            <Button className="btn " onClick={()=>{onDelete(todos)}} variant="success" >Done</Button>
        </Card.Body>
        </Card>


        
           {/* {todos.sno} <br/> 
           {todos.title}<br/>
           {todos.desc}<br/>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todos)}}>DELETE</button> */}
        </>
    )
}

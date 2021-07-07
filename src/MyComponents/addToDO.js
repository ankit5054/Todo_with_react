import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const AddToDO = (props) => {
  const [Title, setTitle] = useState("");
  const [desc, setdesc] = useState("");

  const addtodo = (e) => {
    e.preventDefault(); //prevents the page to reload
    if (!Title || !desc) {
      alert("Alert : Title or Description cannot be blank !!");
    } else {
      props.addToDo(Title, desc);
      setTitle("");
      setdesc("");
    }
  };

  return (
    <div className="container py-5">
      <h3 className="text-center "> Add a ToDo </h3>
      <Form onSubmit={addtodo}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={Title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Enter Title of to do"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="desc">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            placeholder="Enter description of todo"
          />
        </Form.Group>

        <Button variant="btn btn-success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

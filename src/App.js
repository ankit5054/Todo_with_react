import "./App.css";
import Header from "./MyComponents/header.js";
import Footer from "./MyComponents/Footer.js";
import ToDOs from "./MyComponents/ToDOs";
import {About} from "./MyComponents/About";
import { AddToDO } from "./MyComponents/addToDO";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

function App() {
  if (JSON.parse(localStorage.getItem("todos")) === null) {
    localStorage.setItem("todos", JSON.stringify([]));
  }
  let temp1 = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(temp1);

  const onDelete = (item) => {
    // console.log("I am on Delete", item);
    setTodos(
      todos.filter((element) => {
        return element !== item;
      })
    );
  };

  const addToDo = (t, d) => {
    // console.log('I am adding this todo \n', t,'\n',d)
    let sno = todos.length + 1;
    let temp = {
      sno: sno,
      title: t,
      desc: d,
    };
    setTodos([...todos, temp]);
    // console.log(todos)
  };

  // console.log("Inside global block  : ",todos)
  localStorage.setItem("todos", JSON.stringify(todos));
  return (
    <>
      <Router>
        <Header title="ToDo" search={false} />
        <Switch>
          <Route
            exact path="/"
            render={() => {
              return(

              <>
                <AddToDO addToDo={addToDo} />
                <ToDOs todos={todos} onDelete={onDelete} />
              </>)
            }}
          ></Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

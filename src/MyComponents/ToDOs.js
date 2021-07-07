import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDOs(props) {
  return (
    <div className="bg-light container my-3 py-5">
      <h3 className="text-center my-3">ToDOs List</h3>
      {/* {props.todos} */}

      {props.todos.length === 0 ? (
        <div className="alert text-center alert-primary" role="alert">
          All Finished!!
          <br /> No work to do{" "}
        </div>
      ) : (
        <div className="grid-container">
          {props.todos.map((item) => {
            return (
              <>
                <div class="grid-item">
                  <ToDoItem
                    todos={item}
                    key={item.sno}
                    onDelete={props.onDelete}
                  />
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}

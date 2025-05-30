import Title from "@/app/components/Title";
import React from "react";
import { useState } from "react";

// A task page to create and delete tasks
export default function tasks() {
  // Create state variables for list of tasks that has been created
  const [tasks, setTasks] = useState([]);
  // The input of the user
  const [input, setInput] = useState("");
  // a valid variable to set if the field is empty or not
  const [isValid, setIsValid] = useState(true);
  // A submitted variable to know if the submission was successful
  const [submitted, setSubmitted] = useState(false);

  // Sets the input value to what is typed in the input 
  // Set submission to false to get rid of any prior submission message
  function handleInput(task) {
    setInput(task);
    setSubmitted(false);
  }

  // Function to add task to list of tasks
  // Validate input and check if there is input 
  function addTask() {
    // If input is not empty then:
    if (input.trim() != "") {
      // Set valid variable to true
      setIsValid(true);
      // Add task to list of tasks
      setTasks([...tasks, input]);
      // Reset input box
      setInput("");
      // Set submission to true
      setSubmitted(true);
    } else {
      // If input is not valid, set valid variable to false
      setIsValid(false);
    }
  }

  // Function to remove task from task list
  function deleteTask(task) {
    // Create list and filter out the task to remove
    const updatedList = tasks.filter((t) => t !== task);
    // Set list of tasks to the created list
    setTasks(updatedList);
  }

  return (
    <div>
      <Title title="Task Tracker" />

      <div className="taskLayout">
        <div className="createTask">
          <h4>Create Task</h4>
          <input
            type="text"
            value={input}
            onChange={(e) => handleInput(e.target.value)}
          ></input>
          {/* When create task button is clicked, add task to list of tasks */}
          <button onClick={addTask}>Create</button>
          {/* If the input is invalid, show message */}
          <p>{isValid ? "" : "Invalid, feild is empty"}</p>
          {/* If submission was successful, show message */}
          <p>{submitted && "Task Created!"}</p>
        </div>

        <div className="currentTasks">
          <h3>Current Tasks</h3>
          <div>
            {/* If there is no tasks in task list, show message */}
            <p>{tasks.length != 0 ? "" : "No current tasks"}</p>
            <ul className="taskList">
              {/* go through list of tasks and list each task with a delete button */}
              {tasks.map((task) => (
                <li>
                  {task}
                  {/* Delete task when delete button is pressed */}
                  <button className="delete" onClick={() => deleteTask(task)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

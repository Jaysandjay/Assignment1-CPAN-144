import Title from "@/app/components/Title";
import React from "react";
import { useState } from "react";

export default function tasks (){

    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState("")
    const [isValid, setIsValid] = useState(true)
    

    function addTask(){
        if(input.trim() != ""){
            setIsValid(true)
            setTasks([...tasks, input])
            setInput("")
        }else{
            setIsValid(false)
        }
    }

    function deleteTask(task){
        const updatedList = tasks.filter((t) => t !== task)
        setTasks(updatedList)
    }

    return(
        <div>
            <Title title="Task Tracker"/>

            <div className="taskLayout">
                <div className="createTask">
                    <h4>Create Task</h4>
                    <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}></input>
                    <button onClick={addTask} >Create</button>
                    <p>{isValid ?  "" : "Invalid, feild is empty"}</p>
                </div>

                <div className="current Tasks">
                    <h3>Current Tasks</h3>
                    <div>
                        <p>{tasks.length != 0 ? "" : "No current tasks"}</p>
                        <ul>
                            {tasks.map((task) => 
                            <li>
                                {task}
                                <button className="delete" onClick={() => deleteTask(task)}>Delete</button>
                            </li>
                            
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
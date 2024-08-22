import { useState } from "react"

const ToDoList = () => {

    const [tasks, setTasks] = useState(["Išplauti indus", "Pasidaryti valgyti", "Nenumirti"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        console.log(event.target.value);
        setNewTask(event.target.value)
    }

    function addTask() {

    }

    function deleteTask(index) {

    }

    function moveTaskUp(index) {

    }

    function moveTaskDown(index) {


    }


    return <>
    <h1>TO-DO-LIST</h1>
    <div>
        <input type="text" placeholder="Enter A task" value={newTask} onChange={handleInputChange}/>
        <button className="add-button" onClick={addTask}>ADD</button>
    </div>
    <ul>
        {
            tasks.map((task, index) =>
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button onClick={()=>deleteTask(index)}">Delete</button>
                <button className="move-button onClick={()=>moveTaskUp(index)}">moveUp</button>
                <button className="move-button onClick={()=>moveTaskDown(index)}">moveDown</button>
            </li>
            )
        }
    </ul>

    
    </>
}

export default ToDoList
export const Task = (props) => {
    return (
    <div
      style={{backgroundColor: props.completed ? "green" : "white"}}
    >
    <h1>{props.taskname}</h1>
    <button onClick={() => props.completeTask(props.id)}>complete</button>
    <button onClick={() => props.deleteTask(props.id)} >&times;</button>
    </div>
    )
}
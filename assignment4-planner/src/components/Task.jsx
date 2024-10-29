export default function Task({ task, onDelete, onToggle }) {
    return (
        <div className="task">
            <div className="taskItem">
            <input 
                type="checkbox" 
                className="checkBox"
                checked={task.status === "Completed"} 
                onChange={() => onToggle(task.name)} 
                disabled={task.status === "Completed"}                
            />
            <h3 className={task.status === "Completed" ? 'completed' : ''}>{task.name}</h3>
            </div>
            <button className="removeButton" type="button" onClick={() => onDelete(task.name)}>Remove</button>
        </div>
    );
}

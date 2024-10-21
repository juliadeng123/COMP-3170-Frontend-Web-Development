export default function TaskForm({ add, value, onChange }) {
  function handleSave() {
    add(value); 
  }

  return (
    <div className="taskForm">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Add a new task"
      />
      <button className="saveButton" type="button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}

import { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      onAddTask({ id: Date.now(), name: taskName, completed: false });
      setTaskName('');
    }
  };

  return (
    <form className='task-form' onSubmit={handleFormSubmit}>
      <input type="text" value={taskName} onChange={handleInputChange} />
      <button type="submit">Agregar tarea</button>
    </form>
  );
};

export default TaskForm;

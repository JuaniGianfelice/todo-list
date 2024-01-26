import { useState } from 'react';
import '../index.scss';

const TaskItem = ({ task, onCompleteTask, onDeleteTask }) => {
  const [completed, setCompleted] = useState(task.completed);

  const handleCompleteClick = () => {
    setCompleted(!completed);
    onCompleteTask(task.id);
  };

  const handleDeleteClick = () => {
    onDeleteTask(task.id);
  };

  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      {task.name}
      <button className='task-button' onClick={handleCompleteClick}>Completar</button>
      <button className='delete-button'onClick={handleDeleteClick}>Eliminar</button>
    </div>
  );
};

export default TaskItem;

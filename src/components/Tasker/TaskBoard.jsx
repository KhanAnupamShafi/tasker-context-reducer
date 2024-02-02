import { useState } from 'react';
import { validateField } from '../../validate/validateField';
import AddTaskModal from '../Modal/AddTaskModal';
import {
  useModalContext,
  useTasksContext,
} from '../contextApi/contextHooks';
import ActionBar from './ActionBar';
import TaskListTable from './TaskListTable';

const TaskBoard = () => {
  const { tasks, dispatch } = useTasksContext();
  const { openModal, closeModal, isModalOpen } = useModalContext();
  const [selectedTask, setSelectedTask] = useState(null);

  const [error, setError] = useState({
    title: '',
    description: '',
    tags: '',
    priority: '',
  });

  const handleSaveTask = (newTask, isAdd) => {
    if (isAdd) {
      dispatch({ type: 'addTask', payload: newTask });
    } else {
      dispatch({ type: 'saveTask', payload: newTask });
    }
    handleCloseModal();
  };

  const handleValidate = (name, value) => {
    const errorMessage = validateField(name, value);
    setError((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const handleCloseModal = () => {
    closeModal();
    setSelectedTask(null);
  };
  const handleEditTask = (task) => {
    openModal();
    setSelectedTask(task);
  };

  return (
    <section className="mb-20" id="tasks">
      {isModalOpen && isModalOpen === 'addTaskModal' && (
        <AddTaskModal
          error={error}
          onSaveTask={handleSaveTask}
          onValidate={handleValidate}
          initialSelectedTask={selectedTask}
        />
      )}
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <ActionBar />

          <TaskListTable tasks={tasks} onTaskEdit={handleEditTask} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;

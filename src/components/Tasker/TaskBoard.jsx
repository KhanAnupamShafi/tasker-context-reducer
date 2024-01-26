import { useState } from 'react';
import { getAllTasks } from '../../data/tasks';
import AddTaskModal from '../Modal/AddTaskModal';
import ActionBar from './ActionBar';
import TaskListTable from './TaskListTable';

const initialTasks = getAllTasks();
const TaskBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [openModal, setOpenModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const [error, setError] = useState({
    title: '',
    description: '',
    tags: '',
    priority: '',
  });

  const handleSaveTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
      handleCloseModal();
    } else {
      const updatedTask = tasks.map((task) => {
        if (task.id === newTask.id) {
          return newTask;
        } else return task;
      });
      setTasks(updatedTask);
    }
    handleCloseModal();
  };

  const validate = (name, value) => {
    const errorMessage = validateField(name, value);
    setError((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const validateField = (name, value) => {
    if (name === 'tags') {
      return !value ||
        value.length === 0 ||
        value.every((tag) => tag.trim() === '')
        ? 'Tags cannot be empty'
        : '';
    } else if (name === 'priority' && isEmpty(value)) {
      return 'Must select a Priority';
    } else if (isEmpty(value)) {
      return `${name} cannot be empty`;
    }
    return '';
  };

  const isEmpty = (val) => {
    return val.trim() === '';
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedTask(null);
  };
  const handleEditTask = (task) => {
    setOpenModal(true);
    setSelectedTask(task);
  };
  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };
  const handleSearch = (searchTerm) => {
    const filtered = initialTasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setTasks(filtered);
  };
  const handleSetFavorite = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isFavorite: !task.isFavorite };
        } else {
          return task;
        }
      })
    );
  };
  const noResultsMessage =
    tasks.length === 0 ? 'No matching tasks found' : '';

  return (
    <section className="mb-20" id="tasks">
      {openModal && (
        <AddTaskModal
          error={error}
          onCloseModal={handleCloseModal}
          onSaveTask={handleSaveTask}
          onValidate={validate}
          initialSelectedTask={selectedTask}
        />
      )}
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <ActionBar
            onOpenModal={() => setOpenModal(true)}
            onSearch={handleSearch}
          />

          <TaskListTable
            tasks={tasks}
            onTaskEdit={handleEditTask}
            onDeleteTask={handleDeleteTask}
            onFav={handleSetFavorite}
            searchMessage={noResultsMessage}
          />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;

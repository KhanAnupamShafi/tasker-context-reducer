import { useState } from 'react';
import { validateField } from '../../validate/validateField';
import AddTaskModal from '../Modal/AddTaskModal';
import {
  useTasks,
  useTasksDispatch,
} from '../contextApi/useContexts';
import ActionBar from './ActionBar';
import TaskListTable from './TaskListTable';

const TaskBoard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const [error, setError] = useState({
    title: '',
    description: '',
    tags: '',
    priority: '',
  });
  const { data, tasks } = useTasks();
  const dispatch = useTasksDispatch();

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
    setOpenModal(false);
    setSelectedTask(null);
  };
  const handleEditTask = (task) => {
    setOpenModal(true);
    setSelectedTask(task);
  };

  const noResultsMessage =
    data.length === 0 && tasks.length < 1
      ? 'Tasks List Is Empty'
      : 'No Tasks Found';

  return (
    <section className="mb-20" id="tasks">
      {openModal && (
        <AddTaskModal
          error={error}
          onCloseModal={handleCloseModal}
          onSaveTask={handleSaveTask}
          onValidate={handleValidate}
          initialSelectedTask={selectedTask}
        />
      )}
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <ActionBar onOpenModal={() => setOpenModal(true)} />

          <TaskListTable
            tasks={data}
            onTaskEdit={handleEditTask}
            searchMessage={noResultsMessage}
          />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;

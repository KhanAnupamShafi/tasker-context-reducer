import { createContext, useReducer, useState } from 'react';
import { getAllTasks } from '../../data/tasks';
import { taskReducer } from '../../reducers/taskReducer';

export const TaskContext = createContext(null);
const data = getAllTasks();

const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, data);
  const [searchTerm, setSearchTerm] = useState('');
  const setFilter = (filter) => {
    setSearchTerm(filter);
  };
  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );
  const contextData = {
    tasks: filteredTasks,
    dispatch,
    searchTerm,
    setFilter,
  };

  return (
    <TaskContext.Provider value={contextData}>
      {children}
    </TaskContext.Provider>
  );
};

export default TasksProvider;

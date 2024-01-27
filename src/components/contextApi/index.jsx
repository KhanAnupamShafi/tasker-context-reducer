import { createContext, useReducer } from 'react';
import { getAllTasks } from '../../data/tasks';
import { taskReducer } from '../../reducers/taskReducer';

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);
const data = getAllTasks();
const TasksProvider = ({ children }) => {
  const initialState = {
    data: data,
    tasks: data,
  };
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={state}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
};

export default TasksProvider;

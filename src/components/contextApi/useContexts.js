import { useContext } from 'react';
import { TaskContext, TaskDispatchContext } from '.';

const useTasks = () => {
  return useContext(TaskContext);
};

const useTasksDispatch = () => {
  return useContext(TaskDispatchContext);
};

export { useTasks, useTasksDispatch };

import { useContext } from 'react';
import { ModalContext, TaskContext, TaskDispatchContext } from '.';

const useTasks = () => {
  return useContext(TaskContext);
};

const useTasksDispatch = () => {
  return useContext(TaskDispatchContext);
};
export const useModal = () => {
  return useContext(ModalContext);
};

export { useTasks, useTasksDispatch };

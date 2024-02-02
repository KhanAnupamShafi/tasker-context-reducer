import { useContext } from 'react';
import { ModalContext } from './modalContext';
import { TaskContext } from './taskContext';

const useTasksContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error(
      'useTasksContext must be used within a TaskProvider'
    );
  }
  return context;
};
const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      'useModalContext must be used within a ModalProvider'
    );
  }
  return context;
};

export { useModalContext, useTasksContext };

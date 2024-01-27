import { createContext, useReducer, useState } from 'react';
import { getAllTasks } from '../../data/tasks';
import { taskReducer } from '../../reducers/taskReducer';

export const ModalContext = createContext();
export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);
const data = getAllTasks();

// ModalProvider.js

const TasksProvider = ({ children }) => {
  const initialState = {
    data: data,
    tasks: data,
  };
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const modalContextValue = { modalContent, openModal, closeModal };

  return (
    <TaskContext.Provider value={state}>
      <TaskDispatchContext.Provider value={dispatch}>
        <ModalContext.Provider value={modalContextValue}>
          {children}
          {modalContent}
        </ModalContext.Provider>
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
};

export default TasksProvider;

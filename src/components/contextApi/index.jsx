import ModalProvider from './modalContext';
import TasksProvider from './taskContext';

const ContextsProvider = ({ children }) => {
  return (
    <TasksProvider>
      <ModalProvider>{children}</ModalProvider>
    </TasksProvider>
  );
};

export default ContextsProvider;

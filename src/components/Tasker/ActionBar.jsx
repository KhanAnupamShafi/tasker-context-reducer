import { toast } from 'react-toastify';
import ActionButton from '../Buttons/ActionButton';
import AlertConfirmModal from '../Modal/AlertConfirmModal';

import {
  useModalContext,
  useTasksContext,
} from '../contextApi/contextHooks';
import SearchBar from './SearchBar';

const ActionBar = () => {
  const { tasks, dispatch } = useTasksContext();
  const { isModalOpen, openModal, closeModal } = useModalContext();

  const handleDeleteAll = () => {
    if (tasks.length < 1) {
      return;
    }
    openModal('deleteAllModal');
  };
  const handleConfirmDeleteAll = () => {
    dispatch({
      type: 'deleteAllTask',
      payload: [],
    });
    toast.success(`All tasks deletion success!`);
    closeModal();
  };
  const handleCancelDelete = () => {
    closeModal();
  };
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">
        Your Tasks
      </h2>
      <div className="flex items-center space-x-5">
        <SearchBar />
        <ActionButton
          color="blue"
          text="Add Task"
          onOpenModal={() => openModal('addTaskModal')}
        />
        <ActionButton
          onOpenModal={handleDeleteAll}
          color="red"
          text={`Delete All`}
        />
        {isModalOpen && isModalOpen === 'deleteAllModal' && (
          <AlertConfirmModal
            title="Confirm Delete All"
            content={`Are you sure you want to delete all tasks?`}
            onConfirm={handleConfirmDeleteAll}
            onCancel={handleCancelDelete}
          />
        )}
      </div>
    </div>
  );
};

export default ActionBar;

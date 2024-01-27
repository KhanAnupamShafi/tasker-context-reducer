import { toast } from 'react-toastify';

import Favourite from '../Icons/Favourite';
import NotFavourite from '../Icons/NotFavourite';
import AlertConfirmModal from '../Modal/AlertConfirmModal';
import {
  useModal,
  useTasksDispatch,
} from '../contextApi/useContexts';

const SingleTaskRow = ({ taskItem, onTaskEdit }) => {
  const { modalContent, openModal, closeModal } = useModal();

  const dispatch = useTasksDispatch();

  const tagColors = ['#00D991A1', '#1C92FFB0', '#FE1A1AB5'];

  const handleDeleteTask = () => {
    openModal('delete');

    // dispatch({ type: 'deleteTask', payload: taskId });
  };
  const handleConfirmDelete = () => {
    dispatch({ type: 'deleteTask', payload: taskItem.id });
    closeModal();
    toast.success(`${taskItem.title} deletion success!`);
  };
  const handleCancelDelete = () => {
    closeModal();
  };
  const handleSetFavorite = (taskId) => {
    dispatch({ type: 'toggleFav', payload: taskId });
  };
  return (
    <>
      <tr
        key={taskItem.id}
        className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
        <td>
          <div
            className="cursor-pointer"
            onClick={() => handleSetFavorite(taskItem.id)}>
            {taskItem.isFavorite ? <Favourite /> : <NotFavourite />}
          </div>
        </td>
        <td>{taskItem.title}</td>
        <td>
          <div>{taskItem.description}</div>
        </td>
        <td>
          <ul className="flex justify-center gap-1.5 flex-wrap">
            {taskItem.tags.map((tag, index) => (
              <li key={index}>
                <span
                  className={`inline-block h-5 whitespace-nowrap rounded-[45px] bg-[${
                    tagColors[index % tagColors.length]
                  }] px-2.5 text-sm capitalize text-[#F4F5F6]`}>
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </td>
        <td className="text-center">{taskItem.priority}</td>
        <td>
          <div className="flex items-center justify-center space-x-3">
            <button
              className="text-red-500"
              onClick={() => handleDeleteTask(taskItem.id)}>
              Delete
            </button>
            <button
              onClick={() => onTaskEdit(taskItem)}
              className="text-blue-500">
              Edit
            </button>
            {/* Delete Confirmation Modal */}
            {modalContent && modalContent === 'delete' && (
              <>
                <AlertConfirmModal
                  title="Confirm Delete"
                  content={`Are you sure you want to delete the task?`}
                  onConfirm={handleConfirmDelete}
                  onCancel={handleCancelDelete}
                />
              </>
            )}
          </div>
        </td>
      </tr>
    </>
  );
};

export default SingleTaskRow;

import { useState } from 'react';
import CloseSvg from '../../assets/red-x-line-icon.svg';
const AddTaskModal = ({
  onCloseModal,
  error,
  onValidate,
  onSaveTask,
  initialSelectedTask,
}) => {
  const initialData = {
    title: '',
    description: '',
    tags: [],
    isFavorite: false,
    priority: '',
  };

  const [taskData, setTaskData] = useState(
    initialSelectedTask || initialData
  );
  // eslint-disable-next-line no-unused-vars
  const [isAddMode, setIsAddMode] = useState(
    Object.is(initialSelectedTask, null)
  );

  const handleChange = (evt) => {
    let name = evt.target.name;
    let value = evt.target.value;
    if (name === 'tags') {
      value = value.split(',').map((tag) => tag.trim(' '));
    }
    setTaskData({
      ...taskData,
      [name]: value,
    });
    onValidate(name, value);
  };

  const handleSubmit = (evt, newTask) => {
    evt.preventDefault();

    // Validate all fields before proceeding
    const fieldsToValidate = [
      'title',
      'description',
      'tags',
      'priority',
    ];

    fieldsToValidate.forEach((field) => {
      onValidate(field, newTask[field]);
    });

    if (Object.values(error).some((err) => err !== '')) {
      // There are errors, do not proceed
      console.log('Form has validation errors');
    } else {
      if (
        newTask.title.trim() !== '' &&
        newTask.description.trim() !== '' &&
        newTask.tags.length > 0 &&
        newTask.priority.trim() !== ''
      ) {
        // No errors, proceed with the desired action
        onSaveTask(taskData, isAddMode);
        console.log('Form submitted successfully.');
      }
    }
  };
  return (
    <>
      <div
        className="bg-black backdrop-blur-sm bg-opacity-70 h-full w-full z-10 fixed top-0 left-0"
        onClick={() => {
          onCloseModal();
        }}></div>
      <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 fixed m-auto top-[45%] left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <div
          className="absolute top-4 right-3 rounded-full w-8 h-8 cursor-pointer"
          onClick={() => onCloseModal()}>
          <img src={CloseSvg} alt="" />
        </div>
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isAddMode ? 'Add New' : 'Edit'} Task
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              value={taskData.title}
              onChange={handleChange}
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              required
            />
            {error.title && (
              <p className="text-red-500 text-sm">{error.title}</p>
            )}
          </div>
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              value={taskData.description}
              onChange={handleChange}
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              required></textarea>
            {error.description && (
              <p className="text-red-500 text-sm">
                {error.description}
              </p>
            )}
          </div>
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                value={taskData.tags}
                onChange={handleChange}
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                required
              />
              {error.tags && (
                <p className="text-red-500 text-sm">{error.tags}</p>
              )}
            </div>
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                value={taskData.priority}
                onChange={handleChange}
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                required>
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              {error.priority && (
                <p className="text-red-500 text-sm">
                  {error.priority}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-center lg:mt-20">
          <button
            onClick={(e) => handleSubmit(e, taskData)}
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80">
            {isAddMode ? 'Create new Task' : 'Save Task'}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTaskModal;

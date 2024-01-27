const taskReducer = (state, action) => {
  switch (action.type) {
    case 'addTask': {
      // return [...state, action.payload];
      const newData = [...state.tasks, action.payload];
      return { tasks: newData, data: newData };
    }
    case 'saveTask': {
      const updateData = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
      return { tasks: updateData, data: updateData };
    }
    case 'deleteTask': {
      const data = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      return { data: data, tasks: data };
    }
    case 'searchTask': {
      const data = state.tasks.filter((task) =>
        task.title
          .toLowerCase()
          .includes(action.payload.toLowerCase())
      );
      return { data, tasks: state.tasks };
    }
    case 'deleteAllTask':
      return { data: action.payload, tasks: action.payload };
    case 'toggleFav': {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return { ...task, isFavorite: !task.isFavorite };
        }
        return task;
      });
      console.log(updatedTasks);
      return { tasks: updatedTasks, data: updatedTasks };
    }
    default:
      return state;
  }
};

export { taskReducer };

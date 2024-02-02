const taskReducer = (state, action) => {
  switch (action.type) {
    case 'addTask': {
      const newData = [...state, action.payload];
      return newData;
    }
    case 'saveTask': {
      console.log('data save', action.payload);
      const updateData = state.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
      return updateData;
    }
    case 'deleteTask': {
      const data = state.filter((task) => task.id !== action.payload);
      return data;
    }

    case 'deleteAllTask':
      return action.payload;
    case 'toggleFav': {
      const updatedTasks = state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, isFavorite: !task.isFavorite };
        }
        return task;
      });
      return updatedTasks;
    }
    default:
      return state;
  }
};

export { taskReducer };

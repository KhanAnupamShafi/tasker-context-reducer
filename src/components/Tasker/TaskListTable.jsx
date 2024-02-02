import SearchIcon from '../Icons/SearchIcon';
import SingleTaskRow from './SingleTaskRow';

const TaskListTable = ({ tasks, onTaskEdit }) => {
  let searchMessage = tasks.length > 0 ? '' : 'No Data Available';
  return (
    <div className="overflow-auto">
      {tasks.length === 0 && (
        <div className="flex flex-col items-center justify-center space-y-4 py-5">
          <SearchIcon className="w-16 h-16 text-gray-500 dark:text-gray-400" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
            {searchMessage}
          </h1>
          {searchMessage && (
            <p className="text-lg text-gray-500 dark:text-gray-400">
              We couldn&apos;t find any data for your tasks.
            </p>
          )}
        </div>
      )}
      {tasks.length > 0 && (
        <table className="table-fixed overflow-auto xl:w-full">
          <thead>
            <tr>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                {' '}
                Title{' '}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                {' '}
                Description{' '}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                {' '}
                Tags{' '}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                {' '}
                Priority{' '}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                {' '}
                Options{' '}
              </th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((taskItem) => (
              <SingleTaskRow
                key={taskItem.id}
                taskItem={taskItem}
                onTaskEdit={onTaskEdit}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskListTable;

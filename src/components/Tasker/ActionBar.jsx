import ActionButton from '../Buttons/ActionButton';
import SearchBar from './SearchBar';

const ActionBar = ({ onOpenModal, onSearch }) => {
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">
        Your Tasks
      </h2>
      <div className="flex items-center space-x-5">
        <SearchBar onSearch={onSearch} />
        <ActionButton
          onOpenModal={onOpenModal}
          color="blue"
          text="Add Task"
        />
        <ActionButton color="red" text={`Delete All`} />
      </div>
    </div>
  );
};

export default ActionBar;

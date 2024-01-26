const ActionButton = ({ color, text, onOpenModal }) => {
  return (
    <button
      onClick={onOpenModal}
      className={`rounded-md bg-${color}-500 px-3.5 py-2.5 text-sm font-semibold`}>
      {text}
    </button>
  );
};

export default ActionButton;

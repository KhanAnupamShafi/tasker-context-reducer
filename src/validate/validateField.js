export const validateField = (name, value) => {
  if (name === 'tags') {
    return !value ||
      value.length === 0 ||
      value.every((tag) => tag.trim() === '')
      ? 'Tags cannot be empty'
      : '';
  } else if (name === 'priority' && isEmpty(value)) {
    return 'Must select a Priority';
  } else if (isEmpty(value)) {
    return `${name} cannot be empty`;
  }
  return '';
};

const isEmpty = (val) => {
  return val.trim() === '';
};

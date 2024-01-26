const tasks = [
  {
    id: crypto.randomUUID().toString(),
    title: 'Integration API',
    description:
      'Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.',
    isFavorite: true,
    priority: 'High',
    tags: ['web', 'api', 'database'],
  },
  {
    id: crypto.randomUUID().toString(),
    title: 'Responsive Design Implementation',
    description:
      "Ensure that the application's user interface is responsive and works seamlessly across various devices and screen sizes.",
    isFavorite: false,
    priority: 'Medium',
    tags: ['web', 'frontend', 'design'],
  },
  {
    id: crypto.randomUUID().toString(),
    title: 'User Authentication System',
    description:
      'Implement a secure user authentication system with features like registration, login, and password recovery.',
    isFavorite: false,
    priority: 'High',
    tags: ['web', 'frontend', 'authentication'],
  },
  {
    id: crypto.randomUUID().toString(),
    title: 'State Management Setup',
    description:
      'Configure a state management solution (e.g., Redux, Vuex) to manage and share state across components efficiently.',
    isFavorite: true,
    priority: 'Medium',
    tags: ['web', 'frontend', 'state management'],
  },
  {
    id: crypto.randomUUID().toString(),
    title: 'Optimize Page Load Speed',
    description:
      'Identify and implement optimizations to improve the page load speed for a better user experience.',
    isFavorite: false,
    priority: 'High',
    tags: ['web', 'frontend', 'performance'],
  },
  {
    id: crypto.randomUUID().toString(),
    title: 'Implement Form Validation',
    description:
      'Add client-side form validation to enhance data integrity and provide a better user experience when submitting forms.',
    isFavorite: true,
    priority: 'Medium',
    tags: ['web', 'frontend', 'validation'],
  },
];

function getAllTasks() {
  return tasks;
}

export { getAllTasks };

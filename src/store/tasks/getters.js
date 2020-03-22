export function getTasks(state) {
  let tasks = {};
  Object.keys(state.tasks).forEach(function(key) {
    let task = state.tasks[key];
    if (!task.completed) {
      tasks[key] = task;
    }
  });
  return tasks;
}

export function getTasksCompleted(state) {
  let tasks = {};
  Object.keys(state.tasks).forEach(function(key) {
    let task = state.tasks[key];
    if (task.completed) {
      tasks[key] = task;
    }
  });
  return tasks;
}

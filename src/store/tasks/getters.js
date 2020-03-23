export function tasksFiltered(state) {
  let tasksFiltered = {};
  if (state.search) {
    Object.keys(state.tasks).forEach(function(key) {
      let task = state.tasks[key]
      let taskNameLowerCase = task.name.toLowerCase()
      let searchLowerCase = state.search.toLowerCase()
      if (taskNameLowerCase.includes(searchLowerCase)) {
        tasksFiltered[key] = task;
      }
    });
    return tasksFiltered;
  }
  return state.tasks;
}

export function getTasks(state, getters) {
  let tasksFiltered = getters.tasksFiltered;
  let tasks = {};
  Object.keys(tasksFiltered).forEach(function(key) {
    let task = tasksFiltered[key];
    if (!task.completed) {
      tasks[key] = task;
    }
  });
  return tasks;
}

export function getTasksCompleted(state, getters) {
  let tasksFiltered = getters.tasksFiltered;
  let tasks = {};
  Object.keys(tasksFiltered).forEach(function(key) {
    let task = tasksFiltered[key];
    if (task.completed) {
      tasks[key] = task;
    }
  });
  return tasks;
}

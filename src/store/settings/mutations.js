export function setTwelfthHourTimeFormat(state, value) {
  state.settings.twelfthHourTimeFormat = value;
}
export function setShowTasksInOneList(state, value) {
  state.settings.showTasksInOneList = value;
}

export function setSettings(state, settings) {
  Object.assign(state.settings, settings);
}

import { LocalStorage } from "quasar";

export function setTwelfthHourTimeFormat({ commit, dispatch }, value) {
  commit("setTwelfthHourTimeFormat", value);
  dispatch("saveSettings");
}

export function setShowTasksInOneList({ commit, dispatch }, value) {
  commit("setShowTasksInOneList", value);
  dispatch("saveSettings");
}

export function saveSettings({ state }) {
  LocalStorage.set("settings", state.settings);
}

export function getSettings({ commit }) {
  let settings = LocalStorage.getItem('settings');
  if (settings) {
    commit('setSettings', settings)
  }
}

import { uid } from "quasar";
import { firebaseDb, firebaseAuth } from "boot/firebase";

export function updateTask({ commit }, payload) {
  commit("updateTask", payload);
}

export function deleteTask({ commit }, id) {
  commit("deleteTask", id);
}

export function addTask({ commit }, task) {
  let taskId = uid();
  let payload = {
    id: taskId,
    task: task
  };
  commit("addTask", payload);
}

export function setSearch({ commit }, value) {
  commit("setSearch", value);
}

export function setSort({ commit }, value) {
  commit("setSort", value);
}

export function fbReadData({ commit }) {
  let userId = firebaseAuth.currentUser.uid;
  let userTasks = firebaseDb.ref("tasks/" + userId);

  userTasks.on("child_added", snapshot => {
    let task = snapshot.val();
    let payload = {
      id: snapshot.key,
      task: task
    };

    commit("addTask", payload);
  });

  userTasks.on("child_changed", snapshot => {
    let task = snapshot.val();
    let payload = {
      id: snapshot.key,
      updates: task
    };

    commit("updateTask", payload);
  });

  userTasks.on("child_removed", snapshot => {
    let taskId = snapshot.key

    commit("deleteTask", taskId);
  });
}

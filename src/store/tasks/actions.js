import { uid } from "quasar";
import { firebaseDb, firebaseAuth } from "boot/firebase";

export function updateTask({ dispatch }, payload) {
  dispatch("fbUpdateTask", payload);
}

export function deleteTask({ dispatch }, id) {
  dispatch("fbDeleteTask", id);
}

export function addTask({ dispatch }, task) {
  let taskId = uid();
  let payload = {
    id: taskId,
    task: task
  };
  dispatch("fbAddTask", payload);
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
    let taskId = snapshot.key;

    commit("deleteTask", taskId);
  });
}

export function fbAddTask({}, payload) {
  let userId = firebaseAuth.currentUser.uid;
  let taskRef = firebaseDb.ref("tasks/" + userId + "/" + payload.id);
  taskRef.set(payload.task);
}

export function fbUpdateTask({}, payload) {
  let userId = firebaseAuth.currentUser.uid;
  let taskRef = firebaseDb.ref("tasks/" + userId + "/" + payload.id);
  taskRef.update(payload.updates);
}

export function fbDeleteTask({}, taskId) {
  let userId = firebaseAuth.currentUser.uid;
  let taskRef = firebaseDb.ref("tasks/" + userId + "/" + taskId);
  taskRef.remove();
}

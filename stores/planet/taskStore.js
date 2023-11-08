import { defineStore } from "pinia";
import tasks from "@/data/planet/tasks.json";

export const useTaskStore = defineStore("taskStore", {
  state: () => {
    return {
      tasks,
    };
  },
  getters: {
    getTasksByGroupId: (state) => {
      return (groupId, maximum) => {
        let result = [];

        for (const task of state.tasks) {
          if (task.groupId === groupId) {
            result.push(task);
          }

          if (maximum && result.length >= maximum) {
            break;
          }
        }

        return result;
      };
    },
  },
});

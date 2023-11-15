import { defineStore } from "pinia";
import users from "@/data/planet/users.json";
export const useUserStore = defineStore("userStore", {
  state: () => {
    for (let user of users) {
      user.nameFull = `${user.nameFirst} ${user.nameLast}`;
    }

    return {
      users,
    };
  },
  getters: {
    getUserById: (state) => {
      console.log(state);
      return (userId) => state.users.find((user) => user.id === userId);
    },
  },
});

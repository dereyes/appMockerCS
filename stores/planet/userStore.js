import { defineStore } from "pinia";
import users from "@/data/planet/users.json";
export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      users,
    };
  },
  getters: {
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId);
    },
  },
});

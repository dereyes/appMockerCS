import { defineStore } from "pinia";
import messages from "@/data/planet/messages.json";

export const useMessageStore = defineStore("messageStore", {
  state: () => {
    return {
      messages,
    };
  },
  getters: {
    getMessagesByGroupId: (state) => {
      return (groupId, maximum) => {
        return state.messages
          .find((messages) => messages.groupId === groupId)
          .messages.slice(0, maximum);
      };
    },
  },
});

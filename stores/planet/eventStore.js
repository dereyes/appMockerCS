import { defineStore } from "pinia";
import events from "@/data/planet/events.json";

export const useEventStore = defineStore("eventStore", {
  state: () => {
    return {
      events,
    };
  },
  getters: {
    getEventsByGroupId: (state) => {
      return (groupId, maximum) => {
        return state.events
          .find((events) => events.groupId === groupId)
          .events.slice(0, maximum);
      };
    },
  },
});

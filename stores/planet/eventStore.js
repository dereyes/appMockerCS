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
        let result = [];

        for (const event of state.events) {
          if (event.groupId === groupId) {
            result.push(event);
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

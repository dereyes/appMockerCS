import { defineStore } from "pinia";
import groups from "@/data/planet/groups.json";
import { useUserStore } from "./userStore";
// import { useEventStore } from "./eventStore";

export const useGroupStore = defineStore("groupStore", {
  state: () => {
    // const eventStore = useEventStore();
    const userStore = useUserStore();

    // add calculated properties
    for (let group of groups) {
      group.memberCount = group.userIdsMembers.length;

      //   group.userNameAdmin = () => {
      //     const userAdmin = userStore.getUserById(group.userIdAdmin);
      //     return `${userAdmin.nameFirst} ${userAdmin.nameLast}`;
      //   };

      // console.log(userStore.getUserById(group.userIdAdmin));

        group.userNameAdmin = `
          ${userStore.getUserById(group.userIdAdmin).nameFirst}
          ${userStore.getUserById(group.userIdAdmin).nameLast}
      `;

      //   group.eventCount = eventStore.getEventsByGroupId(group.id).length;
    }

    return {
      groups,
    };
  },
  getters: {
    getGroupById: (state) => {
      return (groupId) => state.groups.find((group) => group.id === groupId);
    },
  },
});

<template>
  <Screen
    specialHeader="hero"
    specialHeaderIconButtonName="ellipsis"
    :specialHeaderBackground="groupMonterey.heroImageURL"
    :specialHeaderHeading="groupMonterey.name"
    :specialHeaderSubheading="`Organized by ${groupMonterey.userNameAdmin} • ${groupMonterey.memberCount} members`"
  >
    <PlanetCard>
      <template v-slot:heading>
        <PlanetTypographyHeadingHighlight
          highlight="7"
          lowlight="New Messages"
          tag="h2"
        />
      </template>
      <PlanetListMessages :messages="groupMontereyMessages" />
      <template v-slot:footer-buttons>
        <PlanetButtonIcon iconName="plus" />
        <PlanetButtonIcon iconName="rightArrow" />
      </template>
    </PlanetCard>

    <PlanetCard>
      <template v-slot:heading>
        <PlanetTypographyHeadingHighlight
          highlight="4"
          lowlight="Upcoming Events"
          tag="h2"
        />
      </template>
      <PlanetListImageText>
        <PlanetListImageTextItem v-for="event in groupMontereyEventList">
          <p>
            <a>{{ event.title }}</a>
          </p>
          <p>{{ event.description }}</p>
          <PlanetChip :text="event.chip.text" :theme="event.chip.theme" />
        </PlanetListImageTextItem>
      </PlanetListImageText>
      <template v-slot:footer-buttons>
        <PlanetButtonIcon iconName="plus" />
        <PlanetButtonIcon iconName="rightArrow" />
      </template>
    </PlanetCard>

    <PlanetCard>
      <template v-slot:heading>
        <PlanetTypographyHeadingHighlight
          highlight="5"
          lowlight="Assigned Tasks"
          tag="h2"
        />
      </template>
      <template v-slot:footer-buttons>
        <PlanetButtonIcon iconName="plus" />
        <PlanetButtonIcon iconName="rightArrow" />
      </template>
    </PlanetCard>

    <PlanetCard>
      <template v-slot:heading>
        <PlanetTypographyHeadingHighlight
          highlight="2"
          lowlight="Unanswered Polls"
          tag="h2"
        />
      </template>
      <template v-slot:footer-buttons>
        <PlanetButtonIcon iconName="plus" />
        <PlanetButtonIcon iconName="rightArrow" />
      </template>
    </PlanetCard>
    <div>
      What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum. Why do we use it? It is a long established fact that a reader
      will be distracted by the readable content of a page when looking at its
      layout. The point of using Lorem Ipsum is that it has a more-or-less
      normal distribution of letters, as opposed to using 'Content here, content
      here', making it look like readable English. Many desktop publishing
      packages and web page editors now use Lorem Ipsum as their default model
      text, and a search for 'lorem ipsum' will uncover many web sites still in
      their infancy. Various versions have evolved over the years, sometimes by
      accident, sometimes on purpose (injected humour and the like). Where does
      it come from? Contrary to popular belief, Lorem Ipsum is not simply random
      text. It has roots in a piece of classical Latin literature from 45 BC,
      making it over 2000 years old. Richard McClintock, a Latin professor at
      Hampden-Sydney College in Virginia, looked up one of the more obscure
      Latin words, consectetur, from a Lorem Ipsum passage, and going through
      the cites of the word in classical literature, discovered the undoubtable
      source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
      Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in
      45 BC. This book is a treatise on the theory of ethics, very popular
      during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
      sit amet..", comes from a line in section 1.10.32. The standard chunk of
      Lorem Ipsum used since the 1500s is reproduced below for those interested.
      Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
      Cicero are also reproduced in their exact original form, accompanied by
      English versions from the 1914 translation by H. Rackham.
    </div>
    <template #bottomNav> bottomNav! </template>
  </Screen>
</template>

<script setup>
import { useEventStore } from "~/stores/planet/eventStore";
import { useGroupStore } from "~/stores/planet/groupStore";
import { useMessageStore } from "~/stores/planet/messageStore";
import { useTaskStore } from "~/stores/planet/taskStore";

const group = "groupMonterey";

const eventStore = useEventStore();
const groupStore = useGroupStore();
const messageStore = useMessageStore();
const taskStore = useTaskStore();

const groupMonterey = groupStore.getGroupById(group);

const groupMontereyEventList = eventStore
  .getEventsByGroupId(group, 3)
  .map((event) => {
    const getChipTheme = (rsvpState) => {
      switch (rsvpState) {
        case "Attending":
          return "confirmed";
        case "Not attending":
          return "warning";
        case "Tentative":
          return "caution";
      }
    };

    const chipTheme = getChipTheme(event.rsvpState);

    return {
      chip: {
        text: event.rsvpState,
        theme: chipTheme,
      },
      description: `${event.date} • ${event.time}`,
      imageURL: "test",
      title: event.name,
    };
  });

const groupMontereyTaskList = taskStore
  .getTasksByGroupId(group, 3)
  .map((task) => {
    return {
      completedState: task.completedState,
      title: task?.title,
    };
  });

const groupMontereyMessages = messageStore.getMessagesByGroupId(group, 3);
</script>

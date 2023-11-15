<template>
  <ul class="list-messages">
    <PlanetListMessagesItem
      v-for="message in messages"
      v-if="messages"
      :text="message.text"
      :userIdSender="message.userIdSender"
    />
  </ul>
</template>

<script setup>
const props = defineProps({
  messages: Array,
});
</script>

<style lang="scss" scoped>
.list-messages {
  @include unstyle-list;
  display: flex;
  flex-flow: column nowrap;
  gap: u(0.75);
  margin: 0 0 u(0.75);
}
</style>

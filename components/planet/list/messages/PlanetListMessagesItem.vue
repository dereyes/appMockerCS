<template>
  <li class="list-messages-item">
    <div class="list-messages-item-avatar"></div>
    <div class="list-messages-item-content">
      <small class="list-messages-item-sender">
        {{ userNameFullSender }}
      </small>
      <p>
        {{ text }}
      </p>
    </div>
  </li>
</template>

<script setup>
import { useUserStore } from "~/stores/planet/userStore";

const userStore = useUserStore();

const props = defineProps({
  text: String,
  userIdSender: String,
});

const userNameFullSender = userStore.getUserById(props.userIdSender).nameFull;
</script>

<style lang="scss" scoped>
$messges-item-size: u(3);

.list-messages-item {
  align-items: start;
  display: flex;
  flex-flow: row nowrap;
  gap: u(0.75);

  &-avatar {
    border: 1px solid color-role("border-dark");
    border-radius: $messges-item-size;
    aspect-ratio: 1 / 1;
    flex: $messges-item-size 0 0;
  }

  &-content {
    display: flex;
    flex-flow: column nowrap;
    padding: u(0.25) 0 0;
  }

  &-sender {
    font-weight: fontWeight("normal");
  }
}
</style>

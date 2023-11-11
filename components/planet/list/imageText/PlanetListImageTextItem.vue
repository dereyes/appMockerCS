<template>
  <li class="list-imageText-item">
    <div class="list-imageText-item-image"></div>
    <div class="list-imageText-item-content">
      <p class="list-imageText-item-title">
        <strong>{{ title }}</strong>
      </p>
      <p class="list-imageText-item-description">{{ description }}</p>
      <slot></slot>
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
  description: String,
  imageURL: String,
  title: String,
});
</script>

<style lang="scss" scoped>
.list-imageText-item {
  align-items: start;
  display: flex;
  flex-flow: row nowrap;
  gap: u(1);

  &-image {
    border: 1px solid color-role("border-dark");
    border-radius: u(0.5);
    aspect-ratio: 1 / 1;
    flex: u(4) 0 0;
  }

  &-content {
    padding: u(0.5) 0 0;
  }
}
</style>

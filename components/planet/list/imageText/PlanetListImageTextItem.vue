<template>
  <li class="list-imageText-item">
    <div class="list-imageText-image"></div>
    <div class="list-imageText-content">
      <p class="list-imageText-title">
        {{ title }}
      </p>
      <p class="list-imageText-description">{{ description }}</p>
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

<style lang="scss" scoped></style>

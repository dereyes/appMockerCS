<template>
  <div class="list-imageText">
    <PlanetListImageTextItem
      v-for="item in list"
      v-if="list"
      :description="item.description"
      :imageURL="item.imageURL"
      :title="item.title"
    />
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  list: Array,
});
</script>

<style lang="scss" scoped>
.list-imageText {
  display: flex;
  flex-flow: column nowrap;
  gap: u(0.75);
}
</style>

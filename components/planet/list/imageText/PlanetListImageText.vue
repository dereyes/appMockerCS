<template>
  <ul class="list-imageText">
    <PlanetListImageTextItem
      v-for="item in list"
      v-if="list"
      :description="item.description"
      :imageURL="item.imageURL"
      :title="item.title"
    />
    <slot></slot>
  </ul>
</template>

<script setup>
const props = defineProps({
  list: Array,
});
</script>

<style lang="scss" scoped>
.list-imageText {
  @include unstyle-list;

  display: flex;
  flex-flow: column nowrap;
  gap: u(0.75);
}
</style>

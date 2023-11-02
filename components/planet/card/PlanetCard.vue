<template>
  <div class="card">
    <div class="card-heading">
      <PlanetButtonIcon :iconName="buttonIconName" />
      <h1>{{ heading }}</h1>
      <p>{{ subheading }}</p>
    </div>
  </div>
</template>

<script setup>
import PlanetButtonIcon from "../button/PlanetButtonIcon.vue";

const props = defineProps({
  buttonIconName: String,
  heading: String,
  subheading: String,
});
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-flow: column nowrap;

  &-heading {
    display: flex;
    flex-flow: column nowrap;
  }
}
</style>

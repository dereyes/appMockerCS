<template>
  <div class="card">
    <div class="card-heading">
      <PlanetButtonIcon :iconName="buttonIconName" />
    </div>
  </div>
</template>

<script setup>
import PlanetButtonIcon from "../button/PlanetButtonIcon.vue";

const props = defineProps({
  buttonIconName: String,
  header: String,
  subheader: String,
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

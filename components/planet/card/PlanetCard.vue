<template>
  <div class="card">
    <div class="card-heading">
      <div class="card-heading-options">
        <PlanetButtonIcon v-if="buttonIconName" :iconName="buttonIconName" />
      </div>
      <h2 v-if="heading">{{ heading }}</h2>
      <slot name="heading"></slot>
      <p v-if="subheading">{{ subheading }}</p>
    </div>
    <slot name="default"></slot>
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
  border: $card-borderWeight solid color-role("border-dark");
  border-radius: u(1.25);
  display: flex;
  flex-flow: column nowrap;
  margin: $card-margin;
  padding: $card-padding;

  &-heading {
    display: flex;
    flex-flow: column nowrap;

    &-options {
      display: flex;
      flex-flow: row nowrap;
      justify-content: end;
    }
  }
}
</style>

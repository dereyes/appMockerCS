<template>
  <div class="card">
    <div class="card-heading">
      <h2 v-if="heading">{{ heading }}</h2>
      <slot name="heading"></slot>
      <p v-if="subheading">{{ subheading }}</p>
    </div>
    <slot name="default"></slot>
    <div class="card-footer">
      <div class="card-footer-buttons">
        <slot name="footer-buttons"></slot>
      </div>
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
  border: $card-borderWeight solid color-role("border-dark");
  border-radius: u(1.25);
  display: flex;
  flex-flow: column nowrap;
  margin: $card-margin;
  padding: $card-padding;

  &-heading {
    display: flex;
    flex-flow: column nowrap;
  }

  &-footer {
    display: flex;
    flex-flow: column nowrap;

    &-buttons {
      display: flex;
      flex-flow: row nowrap;
      gap: u(0.5);
      justify-content: end;
    }
  }
}
</style>

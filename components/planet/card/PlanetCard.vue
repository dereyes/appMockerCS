<template>
  <div :class="['card', `card-${theme}`]">
    <div class="card-header">
      <div class="card-header-buttons">
        <slot name="header-buttons"></slot>
      </div>
    </div>
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
  theme: {
    type: String,
    default: "dark",
  },
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

  &-dark {
    border-color: color-role("border-dark");
    color: color-role("border-dark");
  }

  &-light {
    border-color: color-role("border-light");
    color: color-role("border-light");
  }

  &-header,
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

  &-header {
    margin: 0 0 u(1);
  }

  &-heading {
    display: flex;
    flex-flow: column nowrap;
  }
}
</style>

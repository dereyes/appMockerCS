<template>
  <div :class="['chip', `chip-${theme}`]">
    <p class="chip-text">
      {{ text }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
  theme: {
    theme: "light",
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.chip {
  $chip-minHeight: u(1);
  $chip-borderRadius: $chip-minHeight * 2;

  border: 1px solid color-role("border-dark");
  border-radius: $chip-borderRadius;
  display: inline-grid;
  min-height: $chip-minHeight;
  padding: u(0.5) u(1.25);
  place-items: center;

  &-text {
    font-size: typescale("xsmall");
    margin: 0;
    white-space: nowrap;
  }

  &-caution {
    background: color-semantic("surface-caution");
  }

  &-confirmed {
    background: color-semantic("surface-confirmed");
  }

  &-warning {
    background: color-semantic("surface-warning");
  }
}
</style>

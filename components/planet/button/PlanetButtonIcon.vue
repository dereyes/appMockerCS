<template>
  <button :class="`button-icon button-icon-${theme}`">
    {{ icon(iconName) }}
  </button>
</template>

<script setup>
const props = defineProps({
  iconName: String,
  theme: {
    type: String,
    default: "dark",
  },
});

const icon = (iconName) => {
  if (!iconName) {
    throw "iconName not provided";
  }

  switch (iconName) {
    case "ellipsis":
      return "...";
    case "plus":
      return "+";
  }

  throw "invalid iconName";
};
</script>

<style lang="scss" scoped>
.button-icon {
  @include unstyle-button;

  border-style: solid;
  border-width: 1px;
  border-radius: $button-border-radius;
  height: $button-minHeight;
  width: $button-minHeight;

  &-dark {
    border-color: color-role("border-dark");
    color: color-role("border-dark");
  }

  &-light {
    border-color: color-role("border-light");
    color: color-role("border-light");
  }
}
</style>

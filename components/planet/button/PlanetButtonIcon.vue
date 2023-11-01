<template>
  <button class="button-icon">
    {{ icon(iconName) }}
  </button>
</template>

<script setup>
const props = defineProps({
  iconName: String,
});

const icon = (iconName) => {
  if (!iconName) {
    throw "iconName not provided";
  }

  switch (iconName) {
    case "ellipsis":
      return "...";
      break;
  }

  throw "invalid iconName";
};
</script>

<style lang="scss" scoped>
.button-icon {
  @include unstyle-button;

  border: 1px solid black;
  border-radius: $button-border-radius;
  height: $button-minHeight;
  width: $button-minHeight;
}
</style>

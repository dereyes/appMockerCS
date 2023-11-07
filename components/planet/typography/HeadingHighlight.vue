<template>
  <component :is="tag" class="headingHighlight">
    <span class="headingHighlight-highlight">{{ highlight }}</span
    >&nbsp;<span class="headingHighlight-lowlight">{{ lowlight }}</span>
  </component>
</template>

<script setup>
const props = defineProps({
  content: String,
  highlight: String,
  lowlight: String,
  tag: {
    type: String,
    default: "h1",
  },
});
</script>

<style lang="scss" scoped>
.headingHighlight {
  &-highlight {
  }

  &-lowlight {
    opacity: 0.4;
  }
}
</style>

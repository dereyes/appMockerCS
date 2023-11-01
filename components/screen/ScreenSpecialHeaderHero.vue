<template>
  <div class="screen-specialHeader-hero">
    <ScreenDeadZone />
    <div class="screen-specialHeader-hero-gradient-top">button</div>
    <div class="screen-specialHeader-hero-gradient-bottom">
      <h1>
        {{ heading }}
      </h1>
      <p>
        {{ subheading }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  background: String,
  heading: String,
  subheading: String,
});
</script>

<style lang="scss" scoped>
* {
  border: 1px solid green;
}

$gradient-top-height: u(6);

.screen-specialHeader-hero {
  display: flex;
  flex-flow: column nowrap;

  &-gradient {
    &-top {
      display: flex;
      flex: 0 0 $gradient-top-height;
      flex-flow: column nowrap;
    }

    &-bottom {
      display: flex;
      flex-flow: column nowrap;
    }
  }
}
</style>

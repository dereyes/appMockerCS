<template>
  <div
    class="screen-specialHeader-hero"
    :style="{
      backgroundImage: `url(${background})`,
    }"
  >
    <ScreenDeadZone />
    <div class="screen-specialHeader-hero-gradient-top"></div>
    <div class="screen-specialHeader-hero-gradient-bottom">
      <div class="screen-specialHeader-hero-gradient-bottom-button">
        <PlanetButtonIcon :iconName="buttonIconName" theme="light" />
      </div>
      <h1 class="screen-specialHeader-hero-heading">
        {{ heading }}
      </h1>
      <p class="screen-specialHeader-hero-subheading">
        {{ subheading }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  background: String,
  buttonIconName: String,
  heading: String,
  subheading: String,
});
</script>

<style lang="scss" scoped>
$gradient-color: color.adjust(color-role("surface-dark"), $alpha: -0.33);
$gradient-top-height: u(6);

.screen-specialHeader-hero {
  background-position: center;
  background-size: cover;
  display: flex;
  flex-flow: column nowrap;

  &-gradient {
    &-top {
      flex: $gradient-top-height 0 0;
      background: linear-gradient(transparent, $gradient-color);
    }

    &-bottom {
      background: $gradient-color;
      display: flex;
      flex-flow: column nowrap;
      padding: 0 $card-padding $card-padding;

      &-button {
        display: flex;
        flex-flow: row nowrap;
        justify-content: end;
      }
    }
  }

  &-heading,
  &-subheading {
    color: color-role("text-light");
  }
}
</style>

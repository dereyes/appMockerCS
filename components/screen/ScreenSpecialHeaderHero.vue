<template>
  <div
    class="screen-specialHeader-hero"
    :style="{
      backgroundImage: `url(${background})`,
    }"
  >
    <div class="screen-specialHeader-hero-gradient-top">
      <ScreenDeadZone />
    </div>
    <div class="screen-specialHeader-hero-gradient-bottom">
      <PlanetCard theme="light">
        <template v-slot:header-buttons>
          <PlanetButtonIcon iconName="ellipsis" theme="light" />
        </template>
        <template v-slot:heading>
          <h1 class="screen-specialHeader-hero-heading">{{ heading }}</h1>
          <p class="screen-specialHeader-hero-subheading">{{ subheading }}</p>
        </template>
      </PlanetCard>
      <!-- <div class="screen-specialHeader-hero-gradient-bottom-button">
        <PlanetButtonIcon :iconName="buttonIconName" theme="light" />
      </div>
      <h1 class="screen-specialHeader-hero-heading">
        {{ heading }}
      </h1>
      <p class="screen-specialHeader-hero-subheading">
        {{ subheading }}
      </p> -->
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
$gradient-top-extraHeight: u(1);

.screen-specialHeader-hero {
  background-position: center;
  background-size: cover;
  display: flex;
  flex-flow: column nowrap;

  &-gradient {
    &-top {
      display: flex;
      padding: $gradient-top-extraHeight 0 0;
      flex-flow: column nowrap;
      background: linear-gradient(transparent, $gradient-color);
    }

    &-bottom {
      background: $gradient-color;
      display: flex;
      flex-flow: column nowrap;

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

  &-heading {
    font-size: u(3.25);
  }
}
</style>

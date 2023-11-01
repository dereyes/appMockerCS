<template>
  <div class="screen">
    <div class="screen-superview">
      <ScreenDeadZone v-if="!specialHeader" />
      <ScreenSpecialHeaderHero
        background=""
        :heading="specialHeaderHeading"
        :subheading="specialHeaderSubheading"
      />
      <div class="screen-scrollArea">
        <div class="screen-safeArea">
          <slot></slot>
        </div>
      </div>
      <ScreenDeadZone />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  showBorders: {
    type: Boolean,
    default: false,
  },
  specialHeader: String,
  specialHeaderBackground: String,
  specialHeaderHeading: String,
  specialHeaderSubheading: String,
});
</script>

<style lang="scss" scoped>
* {
  border: 1px solid red;
}

.screen {
  display: flex;
  filter: drop-shadow(0 u(1) u(0.5) rgba(0, 0, 0, 0.5));
  flex-flow: row nowrap;
  height: math.div(2556px, 3); // iPhone 14 height
  margin: u(2);
  transform: scale(0.9);
  width: math.div(1179px, 3); // iPhone 14 width

  &-superview {
    background: blue;
    clip-path: inset(0% 0% 0% 0% round $screenBorderRadius);
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
  }

  &-scrollArea {
    display: flex;
    flex: 1;
    flex-flow: column nowrap;
    overflow-y: scroll;
  }
}
</style>

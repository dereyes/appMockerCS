<template>
  <div class="screen">
    <div class="screen-superview">
      <div class="screen-scrollArea">
        <ScreenDeadZone v-if="!specialHeader" />
        <ScreenSpecialHeaderHero
          v-if="specialHeader"
          :background="specialHeaderBackground"
          :buttonIconName="specialHeaderIconButtonName"
          :heading="specialHeaderHeading"
          :subheading="specialHeaderSubheading"
        />
        <div class="screen-safeArea">
          <slot></slot>
        </div>
      </div>
      <slot name="bottomNav"></slot>
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
  specialHeaderIconButtonName: String,
  specialHeaderHeading: String,
  specialHeaderSubheading: String,
});
</script>

<style lang="scss" scoped>
$screenBezelWidth: u(0.75);

.screen {
  display: flex;
  filter: drop-shadow(
    0 u(1) 0 u(0.5) rgba(0, 0, 0, 0.5)
  ); // TODO: Address lag in Chrome
  flex-flow: row nowrap;
  height: math.div(2556px, 3); // iPhone 14 height
  margin: u(2);
  transform: scale(0.9);
  width: math.div(1179px, 3); // iPhone 14 width

  &-superview {
    background: color-role("surface-light");
    border-radius: $screenBorderRadius;
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    outline: $screenBezelWidth solid color-palette("black");

    > :first-child {
      border-top-left-radius: $screenBorderRadius;
      border-top-right-radius: $screenBorderRadius;
    }

    > :last-child {
      border-top-left-radius: $screenBorderRadius;
      border-top-right-radius: $screenBorderRadius;
    }
  }

  &-scrollArea {
    display: flex;
    flex: 1;
    flex-flow: column nowrap;
    overflow-y: scroll;
  }
}
</style>

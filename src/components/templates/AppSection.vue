<template>
  <section :class="className">
    <div :class="`${className}__wrapper`">
      <slot></slot>
      <div class="left__wrapper" v-if="showLeftWrapper">
        <slot name="left"></slot>
      </div>
      <div class="right__wrapper" v-if="showRightWrapper">
        <slot name="right"></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppSection",
  props: {
    className: {
      type: String,
    },
    showLeftWrapper: {
      type: Boolean,
      default: true,
    },
    showRightWrapper: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

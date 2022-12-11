<template>
  <div
    class="hamburger"
    @click="hamburgerOpen = !hamburgerOpen"
    :class="hamburgerOpen ? 'hamburger--open' : ''"
  >
    <div class="hamburger__item hamburger__item--first"></div>
    <div class="hamburger__item hamburger__item--middle"></div>
    <div class="hamburger__item hamburger__item--last"></div>
  </div>
</template>

<script>
export default {
  name: "HamburgerMenu",
  data() {
    return {
      hamburgerOpen: false,
    };
  },
};
</script>

<template>
  <div class="header">
    <div class="logo">
      <img src="@/images/Git-Icon-Black.png" class="image" alt="" />
    </div>
    <nav class="nav-bar">
      <ul class="menu">
        <li
          class="menu-one"
          v-for="(item, index) in navigationItems"
          :key="index"
        >
          <a class="menu-inner" href="#">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
    <div
      class="hamburger"
      @click="hamburgerOpen = !hamburgerOpen"
      :class="hamburgerOpen ? 'hamburger--is-open' : ''"
    >
      <div class="hamburger__item hamburger__item--first"></div>
      <div class="hamburger__item hamburger__item--middle"></div>
      <div class="hamburger__item hamburger__item--last"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        hamburgerOpen: false,
    
      navigationItems: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Contact",
          link: "/contact",
        },
      ],
    };
  },
};
</script>

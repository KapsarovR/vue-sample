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
    <hamburger-menu />
  </div>
</template>

<script>
import HamburgerMenu from "@/components/HamburgerMenu.vue";

export default {
  components: { HamburgerMenu },
  data() {
    return {
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

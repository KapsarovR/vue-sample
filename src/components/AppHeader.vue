<template>
  <div class="header">
    <div class="header__wrapper">
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
      <hamburger-menu @handleClick="handleSideBar" />
      <app-sidebar v-if="isSidebarOpen">
        <ul class="menu__wrapper">
          <li
            class="menu__wrapper--item"
            v-for="(item, index) in navigationItems"
            :key="index"
          >
            <a class="link" href="#">{{ item.name }}</a>
          </li>
        </ul>
      </app-sidebar>
    </div>
  </div>
</template>

<script>
import HamburgerMenu from "@/components/HamburgerMenu.vue";
import AppSidebar from "@/components/AppSideBar.vue";

export default {
  components: {
    AppSidebar,
    HamburgerMenu,
  },
  data() {
    return {
      isSidebarOpen: false,

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
  methods: {
    handleSideBar(isSidebarOpen) {
      this.isSidebarOpen = isSidebarOpen;
    },
  },
};
</script>

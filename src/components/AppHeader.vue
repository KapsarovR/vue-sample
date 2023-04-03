<template>
  <div class="header">
    <div class="logo">
      <img src="@/images/Git-Icon-Black.png" class="image" alt="" />
    </div>
    <nav class="nav-bar">
      <ul class="menu">
        <li class="menu-one">
          <router-link :to="{ name: 'home' }">Home</router-link>
          <router-link :to="{ name: 'about' }">About</router-link>
          <router-link :to="{ name: 'login' }">Login</router-link>
        </li>
      </ul>
    </nav>
    <hamburger-menu @handleClick="handleSideBar" />
    <app-sidebar v-if="isSidebarOpen">
      <ul class="menu__wrapper">
        <li class="menu__wrapper--item">
          <router-link :to="{ name: 'home' }">Home</router-link>
          <router-link :to="{ name: 'about' }">About</router-link>
          <router-link :to="{ name: 'login' }">Login</router-link>
        </li>
      </ul>
    </app-sidebar>
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

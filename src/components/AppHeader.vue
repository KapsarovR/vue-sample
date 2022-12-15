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
    <hamburger-menu @handleClick="HandleSideBar" />
    <app-side-bar v-if="IsSidebarOpen">
      <ul class="menu__wrapper">
        <li
          class="menu-one"
          v-for="(item, index) in navigationItems"
          :key="index"
        >
          <a class="menu-inner" href="#">{{ item.name }}</a>
        </li>
      </ul>
    </app-side-bar>
  </div>
</template>

<script>
import HamburgerMenu from "@/components/HamburgerMenu.vue";
import AppSideBar from "@/components/AppSideBar.vue";

export default {
  components: {
    AppSideBar,
    HamburgerMenu,
  },
  data() {
    return {
      IsSidebarOpen: false,
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
    HandleSideBar(IsSidebarOpen) {
      this.IsSidebarOpen = IsSidebarOpen;
    },
  },
};
</script>

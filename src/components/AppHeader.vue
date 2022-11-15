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
  </div>
</template>

<script>
export default {
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

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  background: #ff6347cc;
  height: 50px;
}

.menu {
  margin: auto;

  &-one {
    display: inline-block;
    font-size: 20px;
    margin: 10px;
  }

  &-inner {
    text-decoration: none;
    color: #ffffff;
  }
}

.title-content {
  background: #619b6a66;
  margin: 0;
  display: flex;
  gap: 20px;
  place-content: center;
}

.title-inner {
  font-size: 25px;
  font-weight: 600;
  color: #ffffff;
  line-height: normal;
  letter-spacing: 5px;
}
</style>

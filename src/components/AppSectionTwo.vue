<template>
  <div class="section-two">
    <div class="cube" v-for="(item, index) in sectionTwo" :key="index">
      <app-image class="images" :image="item.image" />
      <app-title class="cube-title" :title="item.title" />
      <app-description class="description" :description="item.description" />
    </div>
  </div>
</template>

<script>
import AppTitle from "@/components/AppTitle.vue";
import AppDescription from "@/components/AppDescription.vue";
import AppImage from "@/components/AppImage.vue";
export default {
  components: {
    AppTitle,
    AppDescription,
    AppImage,
  },

  data() {
    return {
      sectionTwo: [
        {
          title: "Monday",
          description: "Lorem ipsum dolar sit amet",
          image:
            "https://funkylife.in/wp-content/uploads/2022/09/good-morning-image-from-funkylife-430.jpg",
        },
        {
          title: "Tuesday",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi",
          image:
            "https://funkylife.in/wp-content/uploads/2022/09/good-morning-image-from-funkylife-442.jpg",
        },
        {
          title: "Wednesday",
          description: "Lorem ipsum dolar sit amet",
          image:
            "https://funkylife.in/wp-content/uploads/2022/09/good-morning-image-from-funkylife-431.jpg",
        },
        {
          title: "Thursday",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui omnis",
          image:
            "https://funkylife.in/wp-content/uploads/2022/08/good-morning-image-funkylife-467.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.cube {
  width: 25%;
  position: relative;
}

.cube-title {
  position: relative;
  color: #ffffff;
}

.images {
  width: 100%;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
}
.description {
  position: relative;
  color: #ffffff;
  font-size: 20px;
}
</style>

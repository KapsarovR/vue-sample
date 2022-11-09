<template>
  <div class="section-two">
    <div class="cube" v-for="(item, index) in inputData" :key="index">
      <app-image class="image__wrapper" :image="item.image" />
      <app-title class="cube-title" :title="item.title" />
      <app-description class="description__wrapper" :description="item.description" />
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
  props: ['inputData']
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

.image__wrapper {
  width: 100%;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
}
.description__wrapper {
  position: relative;
  color: #ffffff;
  font-size: 20px;
}
</style>

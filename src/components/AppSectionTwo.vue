<template>
  <div class="section-two">
    <div class="card-wrapper" v-for="(item, index) in inputData" :key="index">
      <app-image class="image__wrapper" :image="item.image" />
      <app-title class="title__wrapper" :title="item.title" />
      <app-description
        class="description__wrapper"
        :description="item.description"
      />
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
  props: ["inputData"],
};
</script>

<style lang="scss" scoped>

</style>

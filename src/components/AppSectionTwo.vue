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
.section-two {
  display: flex;
  .card-wrapper {
    width: 25%;
    position: relative;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .title {
      &__wrapper {
        position: relative;
        color: #ffffff;
      }
    }

    .image {
      &__wrapper {
        width: 100%;
        height: 400px;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .description__wrapper {
      position: relative;
      color: #ffffff;
      font-size: 20px;
    }
  }
}
</style>

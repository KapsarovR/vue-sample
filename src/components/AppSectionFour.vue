<template>
  <div class="section-four">
    <div class="card-wrapper" v-for="(item, index) in inputData" :key="index">
      <app-image :image="item.image" />
      <app-button 
        @handleClick="like" 
        :buttonTitle="'Like'" 
        :index="index" />
      <app-description :description="item.counter" />
    </div>
  </div>
</template>

<script>
import AppImage from "@/components/AppImage.vue";
import AppDescription from "@/components/AppDescription.vue";
import AppButton from "@/components/AppButton.vue";
export default {
  components: {
    AppImage,
    AppDescription,
    AppButton,
  },
  props: ["inputData"],

  methods: {
    like(index) {
      this.$emit("like", index);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

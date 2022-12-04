<template>
  <div class="section-three">
    <div class="card-wrapper" v-for="(item, index) in inputData" :key="index">
      <div class="card-wrapper__top">
        <app-title class="title__wrapper" :title="item.title" />
      </div>
      <div class="card-wrapper__bottom">
        <app-button
          @handleClick="dislike"
          :buttonTitle="'DisLike'"
          :index="index"
        />
        <app-button 
          @handleClick="like" 
          :buttonTitle="'Like'" 
          :index="index" />
        <app-description
          class="description__wrapper"
          :description="'Like ' + item.counter"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppTitle from "@/components/AppTitle.vue";
import AppDescription from "@/components/AppDescription.vue";
import AppButton from "@/components/AppButton.vue";
export default {
  components: {
    AppTitle,
    AppDescription,
    AppButton,
  },
  props: ["inputData"],

  methods: {
    like(index) {
      this.$emit("like", index);
    },

    dislike(index) {
      this.$emit("disLike", index);
    },
  },
};
</script>

<style lang="scss" scoped>


@media only screen and (max-width: 425px) {
  .section-three > .card-wrapper {
    width: 100%;
  }
}
</style>

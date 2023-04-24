<template>
  <app-section
    className="section-three"
    :showLeftWrapper="false"
    :showRightWrapper="false"
  >
    <app-card
      v-for="(item, index) in inputData"
      :key="index"
      :title="item.title"
      :description="'Like' + '' + '' + count"
    >
      <template v-slot:button>
        <!-- <app-button
          @handleClick="dislike"
          :buttonTitle="'DisLike'"
          :index="index"
        >
          DisLike
        </app-button>
        <app-button @handleClick="like" :buttonTitle="'Like'" :index="index">
          Like
        </app-button> -->
        <button @click="DisLike">disLike</button>
        <button @click="Like">Like</button>
      </template>
    </app-card>
  </app-section>
</template>

<script>
import AppCard from "@/components/templates/AppCard.vue";
import AppSection from "@/components/templates/AppSection.vue";
// import AppButton from "@/components/AppButton.vue";
export default {
  components: {
    AppCard,
    // AppButton,
    AppSection,
  },
  props: ["inputData"],

  computed: {
    count() {
      return this.$store.getters.getCount;
    },
    disLike() {
      return this.$store.getters.getDislikes;
    },
  },
  methods: {
    Like() {
      this.$store.dispatch("increment", 1);
    },
    DisLike() {
      this.$store.dispatch("disLikes", 1);
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

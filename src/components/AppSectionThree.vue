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
      :description="'Like' + '' + '' + item.counter"
    >
      <template v-slot:button>
        <app-button
          @handleClick="dislike"
          :buttonTitle="'DisLike'"
          :index="index"
        >
          DisLike
        </app-button>
        <app-button @handleClick="like" :buttonTitle="'Like'" :index="index">
          Like
        </app-button>
      </template>
    </app-card>
  </app-section>
</template>

<script>
import AppCard from "@/components/templates/AppCard.vue";
import AppSection from "@/components/templates/AppSection.vue";
import AppButton from "@/components/AppButton.vue";
export default {
  components: {
    AppCard,
    AppButton,
    AppSection,
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

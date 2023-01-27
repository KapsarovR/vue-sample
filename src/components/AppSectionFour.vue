<template>
  <app-section
    :className="'section-four'"
    :showLeftWrapper="false"
    :showRightWrapper="false"
  >
    <app-card
      v-for="(item, index) in inputData"
      :key="index"
      :image="item.image"
      :description="item.counter"
    >
      <template v-slot:button>
        <app-button @handleClick="like" 
        :buttonTitle="'Like'" 
        :index="index"
          >Like</app-button
        >
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
    AppSection,
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

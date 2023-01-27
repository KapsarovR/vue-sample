<template>
  <app-section :className="'section-two'">
    <app-card
      v-for="(item, index) in inputData"
      :key="index"
      :image="item.image"
      :title="item.title"
      :description="item.description"
    >
    </app-card>
  </app-section>
</template>

<script>
import AppCard from "@/components/templates/AppCard.vue";
import AppSection from "@/components/templates/AppSection.vue";

export default {
  components: {
    AppCard,
    AppSection,
  },
  props: ["inputData"],
};
</script>

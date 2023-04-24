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
      :description="count"
    >
      <template v-slot:button>
        <button @click="like(index)">Like</button>
      </template>
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
  // data() {
  //   return {
  //     inputData: [],
  //   };
  // },
  computed: {
    count() {
      return this.$store.getters.getCount;
    },
  },
  methods: {
    like(index) {
      this.$store.dispatch("increment", 1);
      this.inputData[index].count;
    },
  },
};
</script>

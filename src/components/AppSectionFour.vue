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
        <app-button
          @handleClick="like"
          :buttonTitle="'Like'"
          :index="index"
        >
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
import { mapState, mapActions } from "vuex";

export default {
  components: {
    AppCard,
    AppButton,
    AppSection,
  },
  props: ["inputData"],
  computed: {
    ...mapState(["sectionFour"]),
  },
  methods: {
    ...mapActions(["incrementSectionFour"]),
    like(index) {
      this.incrementSectionFour(index);
    },
  },
};
</script>

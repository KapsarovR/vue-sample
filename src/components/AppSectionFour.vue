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
      :description="item.count"
    >
      <template v-slot:button>
        <app-button @handleClick="like(index)" :buttonTitle="'Like'">
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
    AppSection,
    AppButton,
  },
  data() {
    return {
      inputData: [
        {
          image:
            "https://funkylife.in/wp-content/uploads/2022/08/good-morning-image-funkylife-468.jpg",
          count: 0,
        },
        {
          image:
            "https://funkylife.in/wp-content/uploads/2022/09/good-morning-image-from-funkylife-436.jpg",
          count: 0,
        },
        {
          image:
            "https://funkylife.in/wp-content/uploads/2022/09/good-morning-image-from-funkylife-435.jpg",
          count: 0,
        },
      ],
    };
  },
  // props: ["inputData"],
  computed: {
    count() {
      return this.$store.getters.getCount;
    },
  },
  methods: {
    like(index) {
      this.$store.dispatch("increment", 1);
      this.inputData[index].count += 1;
    },
  },
};
</script>

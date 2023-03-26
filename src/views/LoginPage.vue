<template>
  <nav>
    <app-header />
    <app-section-five :inputData="sectionFive" />
    <app-footer />
  </nav>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppSectionFive from "@/components/AppSectionFive.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppSectionFive,
    AppFooter,
  },
  data() {
    return {
      sectionFive: [
        {
          message: "Enter your ",
        },
      ],
    };
  },
};
</script>

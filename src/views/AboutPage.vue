<template>
  <nav>
    <app-header />
    <app-section-two :inputData="sectionTwo" />
    <app-footer />
  </nav>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppSectionTwo from "@/components/AppSectionTwo.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  name: "AboutPage",
  components: {
    AppHeader,
    AppSectionTwo,
    AppFooter,
  },
  data() {
    return {
      sectionTwo: [
        {
          title: "Monday",
          description: "Lorem ipsum dolar sit amet",
          image:
            "https://funkylife.in/wp-content/uploads/2022/09/good-morning-image-from-funkylife-430.jpg",
        },
        {
          title: "Tuesday",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi",
          image:
            "https://funkylife.in/wp-content/uploads/2022/09/good-morning-image-from-funkylife-442.jpg",
        },
        {
          title: "Wednesday",
          description: "Lorem ipsum dolar sit amet",
          image:
            "https://funkylife.in/wp-content/uploads/2022/09/good-morning-image-from-funkylife-431.jpg",
        },
        {
          title: "Thursday",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui omnis",
          image:
            "https://funkylife.in/wp-content/uploads/2022/08/good-morning-image-funkylife-467.jpg",
        },
      ],
    };
  },
};
</script>

<template>
  <nav>
    <app-header />

    <app-section-one :input-data="sectionOne" />

    <app-section-two :inputData="sectionTwo" />

    <app-section-three/>

    <app-section-four />

    <app-section-five :inputData="sectionFive" />

    <app-section-six />

    <app-section-seven />

    <app-section-eight />

    <app-footer />
  </nav>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppSectionOne from "@/components/AppSectionOne.vue";
import AppSectionTwo from "@/components/AppSectionTwo.vue";
import AppSectionThree from "@/components/AppSectionThree.vue";
import AppSectionFour from "@/components/AppSectionFour.vue";
import AppSectionFive from "@/components/AppSectionFive.vue";
import AppSectionSix from "@/components/AppSectionSix.vue";
import AppSectionSeven from "@/components/AppSectionSeven.vue";
import AppSectionEight from "@/components/AppSectionEight.vue";

export default {
  name: "HomePage",
  components: {
    AppHeader,
    AppFooter,
    AppSectionOne,
    AppSectionTwo,
    AppSectionThree,
    AppSectionFour,
    AppSectionFive,
    AppSectionSix,
    AppSectionSeven,
    AppSectionEight,
  },
  data() {
    return {
      sectionOne: [
        {
          text: "Learn",
          items: [
            {
              title: "Everyday",
            },
            {
              title: "Everywhere",
            },
            {
              title: "Anytime",
            },
          ],
        },
        {
          text: "Live",
          items: [
            {
              title: "Full",
            },
            {
              title: "No regreats",
            },
            {
              title: "As you want",
            },
          ],
        },
        {
          text: "Love",
          items: [
            {
              title: "Deep",
            },
            {
              title: "Purely",
            },
            {
              title: "Life",
            },
          ],
        },
        {
          text: "Sport",
          items: [
            {
              title: "Nba",
            },
            {
              title: "Football",
            },
            {
              title: "Handball",
            },
          ],
        },
      ],
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
      // sectionThree: [
      //   {
      //     title: "Friday",
      //     count: 0,
      //   },
      //   {
      //     title: "Saturday",
      //     count: 0,
      //   },
      //   {
      //     title: "Sunday",
      //     count: 0,
      //   },
      // ],
      // sectionFour: [
      //   {
      //     image:
      //       "https://funkylife.in/wp-content/uploads/2022/08/good-morning-image-funkylife-468.jpg",
      //     count: 0,
      //   },
      //   {
      //     image:
      //       "https://funkylife.in/wp-content/uploads/2022/09/good-morning-image-from-funkylife-436.jpg",
      //     count: 0,
      //   },
      //   {
      //     image:
      //       "https://funkylife.in/wp-content/uploads/2022/09/good-morning-image-from-funkylife-435.jpg",
      //     count: 0,
      //   },
      // ],
      sectionFive: [
        {
          message: "Enter your ",
        },
      ],
    };
  },
  // methods: {
  //   handleLike(index) {
  //     this.sectionFour[index].counter += 1;
  //   },

  //   handleLikeThree(index) {
  //     this.sectionThree[index].counter += 1;
  //   },
  //   disLikeThree(index) {
  //     if (this.sectionThree[index].counter > 0) {
  //       this.sectionThree[index].counter -= 1;
  //     }
  //   },
  // },
};
</script>

<style lang="scss">
@import "@/assets/scss/global.scss";
</style>

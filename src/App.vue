<template>
  <div id="app">
    <app-header />

    <app-section-one :input-data="sectionOne" />

    <app-section-two :inputData="sectionTwo" />

    <app-section-three
      :inputData="sectionThree"
      @like="handleLikeThree"
      @disLike="disLikeThree"
    />

    <app-section-four :inputData="sectionFour" @like="handleLike" />

    <app-section-five :inputData="sectionFive" />

    <app-footer />
  </div>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppSectionOne from "@/components/AppSectionOne.vue";
import AppSectionTwo from "@/components/AppSectionTwo.vue";
import AppSectionThree from "@/components/AppSectionThree.vue";
import AppSectionFour from "@/components/AppSectionFour.vue";
import AppSectionFive from "@/components/AppSectionFive.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppSectionOne,
    AppSectionTwo,
    AppSectionThree,
    AppSectionFour,
    AppSectionFive,
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
      sectionThree: [
        {
          title: "Friday",
          counter: 0,
        },
        {
          title: "Saturday",
          counter: 0,
        },
        {
          title: "Sunday",
          counter: 0,
        },
      ],
      sectionFour: [
        {
          image:
            "https://funkylife.in/wp-content/uploads/2022/08/good-morning-image-funkylife-468.jpg",
          counter: 0,
        },
        {
          image:
            "https://funkylife.in/wp-content/uploads/2022/09/good-morning-image-from-funkylife-436.jpg",
          counter: 0,
        },
        {
          image:
            "https://funkylife.in/wp-content/uploads/2022/09/good-morning-image-from-funkylife-435.jpg",
          counter: 0,
        },
      ],
      sectionFive: [
        {
          message: "Enter your ",
        },
      ],
    };
  },
  methods: {
    handleLike(index) {
      this.sectionFour[index].counter += 1;
    },

    handleLikeThree(index) {
      this.sectionThree[index].counter += 1;
    },
    disLikeThree(index) {
      if (this.sectionThree[index].counter > 0) {
        this.sectionThree[index].counter -= 1;
      }
    },
  },
};
</script>

<style lang="css">
body {
  margin: 0;
}
h2,
p {
  margin: 0;
}

.cube {
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.section-two,
.section-three {
  display: flex;
}

.section-buuton {
  display: flex;
  justify-content: space-around;
  padding: 1%;
}

.btn {
  padding: 8px 12px;
  text-align: center;
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  .content-menu {
    font-size: 16px;
  }

  .header {
    height: 40px;
  }

  .section-one {
    display: flex;
    flex-direction: column;
  }

  .section-two > .cube,
  .section-three > .cube {
    width: 100%;
  }

  .section-two,
  .section-three {
    flex-wrap: wrap;
  }

  .content-left,
  .content-right {
    width: 100%;
  }

  .content-text {
    font-size: 25px;
  }

  .option {
    width: 60%;
  }

  .content-inner {
    font-size: 20px;
  }

  .content-menu {
    font-size: 15px;
  }

  .footer {
    font-size: 13px;
    font-weight: 700;
  }
}
</style>

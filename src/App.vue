<template>
  <div id="app">
    <app-header />

    <app-section-one />

    <app-section-two/>

    <app-section-three/>

    <app-section-four/>

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

export default {
  name: "App",
  components: { AppHeader, AppFooter, AppSectionOne, AppSectionTwo, AppSectionThree, AppSectionFour },
  data() {
    return {

    };
  },
  methods: {
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

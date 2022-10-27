<template>
  <div class="section-three">
    <div class="cube" v-for="(item, index) in sectionThree" :key="index">
      <app-title class="cube-title" :title="item.title" />
      <div>
        <button class="btn" @click="likeSectionThree(index)">Like</button>
        <button class="btn" @click="dislikeSectionThree(index)">disLike</button>
        Likes {{ item.counter }}
      </div>
    </div>
  </div>
</template>

<script>
import AppTitle from "@/components/AppTitle.vue";
export default {
  components: {
    AppTitle,
  },
  data() {
    return {
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
    };
  },
  methods: {
    likeSectionThree(index) {
      this.sectionThree[index].counter += 1;
    },

    dislikeSectionThree(index) {
      if (this.sectionThree[index].counter > 0) {
        this.sectionThree[index].counter -= 1;
      }
    },
  },
};
</script>

<style lang="css" scoped>
.cube-title {
  text-align: center;
  color: #ffffff;
}

.section-three > .cube {
  width: 33.3%;
}

.section-three > .cube:nth-child(1) {
  background: #7fff00;
}

.section-three > .cube:nth-child(2) {
  background: #008000;
}

.section-three > .cube:nth-child(3) {
  background-color: #0000ff;
}
</style>

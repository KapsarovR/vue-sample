<template>
  <div class="section-three">
    <div class="cube" v-for="(item, index) in sectionThree" :key="index">
      <h2 class="cube-title">{{ item.title }}</h2>
      <div>
        <button class="btn" @click="likeSectionThree(index)">Like</button>
        <button class="btn" @click="dislikeSectionThree(index)">disLike</button>
        Likes {{ item.counter }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sectionThree: [
        {
          title: "Title",
          counter: 0,
        },
        {
          title: "Title",
          counter: 0,
        },
        {
          title: "Title",
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
  }
};
</script>

<style lang="css">
.section-three > .cube > .cube-title {
  text-align: center;
  color: #ffffff;
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

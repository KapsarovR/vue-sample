<template>
  <div class="section-three">
    <div class="cube" v-for="(item, index) in inputData" :key="index">
      <app-title class="title__wrapper" :title="item.title" />
      <div>
        <button class="btn" @click="dislikeSectionThree(index)">disLike</button>
        <button class="btn" @click="likeSectionThree(index)">Like</button>
        <App-description
          class="description__wrapper"
          :description="'Like ' + item.counter"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppTitle from "@/components/AppTitle.vue";
import AppDescription from "@/components/AppDescription.vue";
export default {
  components: {
    AppTitle,
    AppDescription,
  },
  props: ["inputData"],

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
.title__wrapper {
  text-align: center;
  color: #ffffff;
}

.description__wrapper {
  display: flex;
  justify-content: center;
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

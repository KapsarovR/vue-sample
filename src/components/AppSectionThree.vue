<template>
  <div class="section-three">
    <div class="cube" v-for="(item, index) in inputData" :key="index">
      <app-title class="title__wrapper" :title="item.title" />
      <div>
        <button class="btn" @click="dislike(index)">disLike</button>
        <button class="btn" @click="like(index)">Like</button>
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
    like(index) {
      this.$emit("like", index);
    },

    dislike(index) {
      this.$emit("disLike", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.title__wrapper {
  text-align: center;
  color: #ffffff;
}

.description__wrapper {
  display: flex;
  justify-content: center;
}
.section-three {
  .cube {
    width: 33.3%;

    &:nth-child(1) {
      background: #7fff00;
    }

    &:nth-child(2) {
      background: #008000;
    }

    &:nth-child(3) {
      background-color: #0000ff;
    }
  }
}
@media only screen and (max-width: 425px) {
  .section-three > .cube {
    width: 100%;
  }
}
</style>

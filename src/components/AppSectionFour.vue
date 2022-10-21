<template>
  <div class="section-four">
    <div class="first-image" v-for="(item, index) in sectionFour" :key="index">
      <img class="image" :src="item.images" alt="" />
      <button @click="like(index)">Like</button>
      <p>{{ item.counter }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sectionFour: [
        {
          images:
            "https://funkylife.in/wp-content/uploads/2022/08/good-morning-image-funkylife-468.jpg",
          counter: 0,
        },
        {
          images:
            "https://funkylife.in/wp-content/uploads/2022/09/good-morning-image-from-funkylife-436.jpg",
          counter: 0,
        },
        {
          images:
            "https://funkylife.in/wp-content/uploads/2022/09/good-morning-image-from-funkylife-435.jpg",
          counter: 0,
        },
      ],
    };
  },
  methods: {
    like(index) {
      this.sectionFour[index].counter += 1;
    },
  }
};
</script>

<style lang="css">
.section-four {
  display: flex;
  align-items: flex-start;
}

.first-image {
  display: flex;
  width: 33.3%;
  flex-wrap: wrap;
}
</style>

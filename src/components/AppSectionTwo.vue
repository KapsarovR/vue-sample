<template>
  <div class="section-two">
    <div class="cube" v-for="(item, index) in sectionTwo" :key="index">
      <img src="@/images/Card.png" class="images" alt="" />
      <div class="cube-title">
        <h2>{{ item.title }}</h2>
      </div>
      <div class="cube-description">
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sectionTwo: [
        {
          title: "Title",
          description: "Lorem ipsum dolar sit amet",
        },
        {
          title: "Title",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi",
        },
        {
          title: "Title",
          description: "Lorem ipsum dolar sit amet",
        },
        {
          title: "Title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui omnis",
        },
      ],
    };
  },
};
</script>

<style lang="css">
.section-two > .cube {
  width: 25%;
  position: relative;
}

.cube > .images {
  width: 100%;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
}

.section-three > .cube {
  width: 33.3%;
}

.section-two > .cube > .cube-title {
  position: relative;
  color: #ffffff;
}

.cube-description {
  position: relative;
  color: #ffffff;
  font-size: 20px;
}
</style>

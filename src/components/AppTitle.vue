<template>
  <div class="cube-title section-three">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
    name: "AppTitle",
    props: ["title"]
}
</script>

<style lang="css" scoped>
.cube-title {
  position: relative;
  color: #ffffff;
}

.section-three > .cube > .cube-title {
  text-align: center;
  color: #ffffff;
}
</style>
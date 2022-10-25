<template>
      <div class="cube-description">
        <p>{{ description }}</p>
      </div>
</template>

<script>
export default {
    name : "AppDescription",
    props: ["description"]
}
</script>

<style lang="css" scoped>
.cube-description {
  position: relative;
  color: #ffffff;
  font-size: 20px;
}
</style>
<template>
  <img class="image" :src="image" alt="" />
</template>

<script>
export default {
  name: "AppImage",
  props: ["image"],
};
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  height: 100%;
}
</style>

<template>
     <div class="section-four">
    <div class="first-image" >
      <img class="image" :src="image" alt="" />
    </div>
  </div>

</template>

<script>
export default {
  name: "AppImage",
  props: ["image"]
};
</script>

<style lang="css" scoped>
 .first-image {
  display: flex;
  width: 33.3%;
  flex-wrap: wrap;
}

</style>

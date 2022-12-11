<template>
  <img class="image" :src="image" alt="" />
</template>

<script>
export default {
  name: "AppImage",
  props: ["image"],
};
</script>

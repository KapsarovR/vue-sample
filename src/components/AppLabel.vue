<template>
  <label class="label__wrapper">
    {{ label }}
  </label>
</template>

<script>
export default {
  name: "AppLabel",
  props: ["label"],
};
</script>

<style lang="scss" scoped>
.label__wrapper {
  padding: 1%;
  color: #ff7f50;
}
</style>

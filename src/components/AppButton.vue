<template>
  <button class="btn" @click="handleClick(index)">{{ buttonTitle }}</button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    buttonTitle: {
      type: String,
      default: "Button Title",
    },
    index: {
      type: Number,
    },
  },
  methods: {
    handleClick(index) {
      this.$emit("handleClick", index);
    },
  },
};
</script>

<style lang="scss">
.btn {
  padding: 10px 50px !important;
  background: transparent;
  border: 1px solid #4a87a4;
  transition: 0.7s all ease-in-out;
  cursor: pointer;

  &:hover {
    background: #30a5e0;
    color: #ffffff;
  }
}
</style>

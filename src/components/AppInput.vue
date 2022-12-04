<template>
    <input
      :type="type"
      :name="name"
      v-model="inputData"
      :placeholder="placeholder"
      @input="onChange"
    />
</template>

<script>
export default {
name: "AppInput",
props: {
  name: {
    type: String,
  },
  type: {
      type: String,
  },
  placeholder: {
      type: String,
  }
},
data() {
  return {
      inputData: null ,
  };
},
methods: {
  onChange() {
      this.$emit('onInput', this.inputData)
  }
}
};
</script>

<style lang="scss">

</style>

<template>
  <div :class="open ? 'faq open' : 'faq'" @click="toggleOpen">
    <div class="question">{{ faq.question }}</div>
    <div class="answer">{{ faq.answer }}</div>
  </div>
</template>

<script>
export default {
  name: "AppAccordion",
  props: ["faq", "index", "open"],
  methods: {
    toggleOpen() {
      this.$emit("toggleOpen", this.index);
    },
  },
};
</script>

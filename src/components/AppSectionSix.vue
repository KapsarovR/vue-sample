<template>
  <app-section :className="'section-six'">
    <template v-slot:left>
      <h3>This is a graet Message</h3>
      <button v-on:click="reverseMessage">Reverse Message</button>
      <input v-model="message" />
      <p>{{ message }}</p>
    </template>
    <template v-slot:right>
      <input v-model="message" :placeholder="'edit me'" />
      <p>Message is: {{ message }}</p>
      <app-label :label="message" />
    </template>
  </app-section>
</template>

<script>
import AppSection from "@/components/templates/AppSection.vue";
import AppLabel from "@/components/AppLabel.vue";
export default {
  components: {
    AppSection,
    AppLabel,
  },
  props: ["inputData"],
  data() {
    return {
      message: "",
    };
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
};
</script>

<style lang="scss"></style>

<template>
  <section class="section-six">
    <div class="wrapper__test">
    <h3>This is a graet Message</h3>
    <button v-on:click="reverseMessage">Reverse Message</button>
    <input v-model="message" />
    <p>{{ message }}</p>
    </div>
    <div class="wrapper__test">
    <input v-model="message" :placeholder="'edit me'" />
    <p>Message is: {{ message }}</p>
    <app-label :label="message " />
  </div>
</section>
</template>

<script>
import AppLabel from "@/components/AppLabel.vue";
export default {
  components: {
    AppLabel
  },
  props: ["inputData"],
  data() {
    return {
        message: ''
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
};
</script>

<style lang="scss">

</style>

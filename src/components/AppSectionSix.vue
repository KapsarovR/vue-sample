<!-- <template>
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
</script> -->
<template>
  <app-section :className="'section-six'">
    <template v-slot:left>
      <h3>This is a graet Message</h3>
      <button v-on:click="reverseMessage">Reverse Message</button>
      <input v-model="message" @input="updateMessage"  />
      <p>{{ message }}</p>
    </template>
    <template v-slot:right>
      <input v-model="message" :placeholder="'edit me'" @input="updateMessage" />
      <p>Message is: {{ message }}</p>
      <app-label :label="message" />
    </template>
  </app-section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import AppSection from "@/components/templates/AppSection.vue";
import AppLabel from "@/components/AppLabel.vue";
export default {
  components: {
    AppSection,
    AppLabel,
  },
  computed: {
    ...mapState(["message"]),
  },
  methods: {
    ...mapMutations(["reverseMessage", "setMessage"]),
    updateMessage(event) {
      this.setMessage(event.target.value);
    },
  },
};
</script>

<style lang="scss"></style>

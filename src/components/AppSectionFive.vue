<!-- <template>
  <app-section :className="'section-five'">
    <form v-for="(item, index) in inputData" :key="index">
      <app-label :label="item.message + 'Frst Name'" />
      <app-input
        @onInput="setFirstName"
        :type="'text'"
        :name="'First Name'"
        :placeholder="'Enter your Frst Name'"
      />
      <app-label :label="item.message + 'Last Name'" />
      <app-input
        @onInput="setLastName"
        :type="'text'"
        :name="'Last Name'"
        :placeholder="'Enter your Last Name'"
      />
      <app-label :label="item.message + 'Email'" />
      <app-input
        @onInput="setEmail"
        :type="'email'"
        :name="'email'"
        :placeholder="'Enter your Email'"
      />
    </form>
    <app-button @handleClick="submit" :buttonTitle="'Submit'" />
  </app-section>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
import AppSection from "@/components/templates/AppSection.vue";
import AppLabel from "@/components/AppLabel.vue";
import AppInput from "@/components/AppInput.vue";
export default {
  components: {
    AppButton,
    AppSection,
    AppLabel,
    AppInput,
  },
  props: ["inputData"],
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
      },
    };
  },
  methods: {
    submit() {
      if (
        this.form.firstName === "" ||
        this.form.lastName === "" ||
        this.form.email === ""
      ) {
        return false;
      }
      alert(
        this.form.firstName + " " + this.form.lastName + " " + this.form.email
      );
    },
    setFirstName(firstName) {
      this.form.firstName = firstName;
    },
    setLastName(lastName) {
      this.form.lastName = lastName;
    },
    setEmail(email) {
      this.form.email = email;
    },
  },
};
</script> -->
<template>
  <app-section :className="'section-five'">
    <form v-for="(item, index) in inputData" :key="index">
      <app-label :label="item.message + 'Frst Name'" />
      <app-input
        @input="setFirstName"
        :type="'text'"
        :name="'First Name'"
        :placeholder="'Enter your Frst Name'"
      />
      <app-label :label="item.message + 'Last Name'" />
      <app-input
        @input="setLastName"
        :type="'text'"
        :name="'Last Name'"
        :placeholder="'Enter your Last Name'"
      />
      <app-label :label="item.message + 'Email'" />
      <app-input
        @input="setEmail"
        :type="'email'"
        :name="'email'"
        :placeholder="'Enter your Email'"
      />
    </form>
    <app-button @click="submit" :buttonTitle="'Submit'" />
  </app-section>
</template>
<script>
import { mapState, mapActions } from "vuex";
import AppButton from "@/components/AppButton.vue";
import AppSection from "@/components/templates/AppSection.vue";
import AppLabel from "@/components/AppLabel.vue";
import AppInput from "@/components/AppInput.vue";

export default {
  components: {
    AppButton,
    AppSection,
    AppLabel,
    AppInput,
  },
  props: ["inputData"],
  computed: {
    ...mapState({
      form: (state) => state.form,
    }),
  },
  methods: {
    ...mapActions(["setFirstName", "setLastName", "setEmail", "submit"]),
    submit() {
      alert(
        this.form.firstName + " " + this.form.lastName + " " + this.form.email
      );
    },
    setFirstName(event) {
      this.$store.commit("setFirstName", event.target.value);
    },
    setLastName(event) {
      this.$store.commit("setLastName", event.target.value);
    },
    setEmail(event) {
      this.$store.commit("setEmail", event.target.value);
    },
  },
};
</script>

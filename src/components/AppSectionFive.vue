<template>
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
</script>

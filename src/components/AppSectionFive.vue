<template>
  <section class="contact">
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
  </section>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
import AppLabel from "@/components/AppLabel.vue";
import AppInput from "@/components/AppInput.vue";
export default {
  components: {
    AppButton,
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

<style lang="scss" scoped>
.contact {
  background: #f8f8ff;
  width: 50%;
  margin: auto;
  text-align: center;
  padding: 10px;
  margin-top: 25px;
}

input {
  width: 50%;
  border-radius: none;
  padding: 10px;
  border: 2px solid #e9967a;
  margin: 0 auto 10px auto;
  display: block;
}

button {
  padding: 10px 30px;
  border: 2px solid #e9967a;
  color: #e9967a;
  background: #ffffff;
  font-size: 15px;
  border-radius: none;

  &:hover {
    background: #e9967a;
    color: #ffffff;
  }
}
</style>

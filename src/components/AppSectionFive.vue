<template>
  <div class="contact">
    <form v-for="(item, index) in inputData" :key="index">
      <app-description :description="item.message + 'Frst Name'" />
      <input
        type="text"
        v-model="form.firstName"
        name="First Name"
        placeholder="Enter your Frst Name"
      />
      <app-description :description="item.message + 'Last Name'" />
      <input
        type="text"
        v-model="form.lastName"
        name="Last Name"
        placeholder="Enter your Last Name"
      />
      <app-description :description="item.message + 'Email'" />
      <input
        type="email"
        v-model="form.email"
        name="email"
        placeholder="Enter your Email"
      />
    </form>
    <app-button 
      @handleClick="submit" 
      :buttonTitle="'Submit'" />
  </div>
</template>

<script>
import AppDescription from "@/components/AppDescription.vue";
import AppButton from "./AppButton.vue";
export default {
  components: {
    AppDescription,
    AppButton,
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
  margin-bottom: 10px;
  border-radius: none;
  padding: 10px;
  border: 2px solid #e9967a;
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

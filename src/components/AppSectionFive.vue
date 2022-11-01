<template>
  <div class="contact">
    <form v-for="(item, index) in inputData" :key="index">
      <app-description :description="item.message + 'Frst Name'" />
      <input
        type="text"
        v-model="firstName"
        name="First Name"
        placeholder="Enter your Frst Name" required
      />
      <app-description :description="item.message + 'Last Name'" />
      <input
        type="text"
        v-model="lastName"
        name="Last Name"
        placeholder="Enter your Last Name" required
      />
      <app-description :description="item.message + 'Email'" />
      <input
        type="email" 
        v-model="email"
        name="email"
        placeholder="Enter your Email" required
      />
      <app-description :description="item.message + 'Password'" />
      <input
        type="password"
        v-model="message"
        name="password"
        placeholder="Enter your Password"
      />
      <br />
      <button @click="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import AppDescription from "@/components/AppDescription.vue";
export default {
  components: {
    AppDescription,
  },
  props: ["inputData"],
  methods:{
  submit() {
    alert(this.firstName + ' ' + this.lastName + ' ' + this.email)
  },
}
};
</script>

<style lang="css" scoped>
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
  border-radius: 10px;
  padding: 10px;
  border: 2px solid #e9967a;
}

button {
  padding: 10px 30px;
  border: 2px solid #e9967a;
  color: #e9967a;
  background: #ffffff;
  font-size: 15px;
  border-radius: 5px;
}
</style>

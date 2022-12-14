<template>
  <ol class="content-inner">
    <li class="option" v-for="(item, index) in inputData" :key="index">
      {{ item.text }}
      <ul
        class="content-menu"
        v-for="(subItem, subIndex) in item.items"
        :key="subIndex"
      >
        <li class="option">
          <app-description :description="subItem.title" />
        </li>
      </ul>
    </li>
  </ol>
</template>

<script>
import AppDescription from "./AppDescription.vue";
export default {
  name: "AppList",
  components: {
    AppDescription,
  },
  props: {
    inputData: {
      type: Array,
    },
  },
};
</script>
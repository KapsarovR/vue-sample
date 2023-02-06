<template>
  <app-section :className="'section-one'">
    <template v-slot:left>
      <img src="@/images/Happy monday.jpg" class="image" alt="" />
  </template>
    <template v-slot:right>
    <app-title class="content-text" :title="'My kind of life'" />
      <app-list :inputData="inputData" />
  </template>
</app-section>
</template>

<script>
import AppSection from "@/components/templates/AppSection.vue";
import AppTitle from "@/components/AppTitle.vue";
import AppList from "@/components/AppList.vue";
export default {
  components: {
    AppSection,
    AppTitle,
    AppList,
  },
  props: ["inputData"],
};
</script>


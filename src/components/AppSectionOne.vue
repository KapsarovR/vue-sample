<template>
  <div class="section-one">
    <div class="content-left">
      <img src="@/images/Happy monday.jpg" class="image" alt="" />
    </div>
    <div class="content-right">
      <app-title class="content-text" :title="'My kind of life'" />
      <app-list :inputData="inputData" />
    </div>
  </div>
</template>

<script>
import AppTitle from "@/components/AppTitle.vue";
import AppList from "@/components/AppList.vue";
export default {
  components: {
    AppTitle,
    AppList,
  },
  props: ["inputData"],
};
</script>

<style lang="css">
.section-one {
  display: flex;
}

.content-left {
  width: 50%;
}

.image {
  width: 100%;
  height: 100%;
}

.content-text {
  text-align: center;
}

.content-right {
  width: 50%;
  background-color: #ff6347;
  padding: 2%;
}
</style>

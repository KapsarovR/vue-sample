<template>
  <div class="description__wrapper">
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "AppDescription",
  props: ["description"],
};
</script>

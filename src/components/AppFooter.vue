<template>
  <footer class="footer">
    <p class="footer-title">{{ footerTitle }}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerTitle: "Kapsar , Copyright © 2022",
    };
  },
};
</script>

<style lang="css">
.footer {
  display: flex;
  justify-content: center;
  background-color: #ff6347cc;
  text-align: center;
  color: #000000;
  font-size: 16px;
  font-weight: 700;
  padding: 10px;
}
</style>

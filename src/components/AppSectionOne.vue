<template>
  <div class="section-one">
    <div class="content-left">
      <img src="@/images/Happy monday.jpg" class="image" alt="" />
    </div>
    <div class="content-right">
      <h1 class="content-text">My kind of life</h1>
      <ol class="content-inner">
        <li class="option" v-for="(item, index) in inputData" :key="index">
          {{ item.text }}
          <ul
            class="content-menu"
            v-for="(subItem, subIndex) in item.items"
            :key="subIndex"
          >
            <li class="option">{{ subItem.title }}</li>
          </ul>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
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
}

.content-inner {
  font-size: 25px;
  padding: 1%;
}

.content-menu {
  font-size: 25px;
}

.option {
  width: 45%;
  margin: auto;
  padding: 3px;
}
</style>

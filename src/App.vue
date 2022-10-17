<template>
  <div id="app">
    <app-header />

    <div class="section-one">
      <div class="content-left">
        <img src="@/images/Happy monday.jpg" class="image" alt="" />
      </div>
      <div class="content-right">
        <h1 class="content-text">My kind of life</h1>
        <ol class="content-inner">
          <li class="option" v-for="(item, index) in sectionOne" :key="index">
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

    <div class="section-two">
      <div class="cube" v-for="(item, index) in sectionTwo" :key="index">
        <img src="@/images/Card.png" class="images" alt="" />
        <div class="cube-title">
          <h2>{{ item.title }}</h2>
        </div>
        <div class="cube-description">
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>

    <div class="section-three">
      <div class="cube" v-for="(item, index) in sectionThree" :key="index">
        <h2 class="cube-title">{{ item.title }}</h2>
        <div>
          <button class="btn" @click="likeSectionThree(index)">Like</button>
          <button class="btn" @click="dislikeSectionThree(index)">
            disLike
          </button>
          Likes {{ item.counter }}
        </div>
      </div>
    </div>

    <div class="section-four">
      <div
        class="first-image"
        v-for="(item, index) in sectionFour"
        :key="index"
      >
        <img class="image" :src="item.images" alt="" />
        <button @click="like(index)">Like</button>
        <p>{{ item.counter }}</p>
      </div>
    </div>

    <app-footer />
  </div>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "App",
  components: { AppHeader, AppFooter },
  data() {
    return {
      sectionOne: [
        {
          text: "Learn",
          items: [
            {
              title: "Everyday",
            },
            {
              title: "Everywhere",
            },
            {
              title: "Anytime",
            },
          ],
        },
        {
          text: "Live",
          items: [
            {
              title: "Full",
            },
            {
              title: "No regreats",
            },
            {
              title: "As you want",
            },
          ],
        },
        {
          text: "Love",
          items: [
            {
              title: "Deep",
            },
            {
              title: "Purely",
            },
            {
              title: "Life",
            },
          ],
        },
        {
          text: "Sport",
          items: [
            {
              title: "Nba",
            },
            {
              title: "Football",
            },
            {
              title: "Handball",
            },
          ],
        },
      ],
      sectionTwo: [
        {
          title: "Title",
          description: "Lorem ipsum dolar sit amet",
        },
        {
          title: "Title",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi",
        },
        {
          title: "Title",
          description: "Lorem ipsum dolar sit amet",
        },
        {
          title: "Title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui omnis",
        },
      ],
      sectionThree: [
        {
          title: "Title",
          counter: 0,
        },
        {
          title: "Title",
          counter: 0,
        },
        {
          title: "Title",
          counter: 0,
        },
      ],
      sectionFour: [
        {
          images:
            "https://funkylife.in/wp-content/uploads/2022/08/good-morning-image-funkylife-468.jpg",
          counter: 0,
        },
        {
          images:
            "https://funkylife.in/wp-content/uploads/2022/09/good-morning-image-from-funkylife-436.jpg",
          counter: 0,
        },
        {
          images:
            "https://funkylife.in/wp-content/uploads/2022/09/good-morning-image-from-funkylife-435.jpg",
          counter: 0,
        },
      ],
      // footerTitle: "Kapsar , Copyright © 2022",
    };
  },
  methods: {
    likeSectionThree(index) {
      this.sectionThree[index].counter += 1;
    },

    dislikeSectionThree(index) {
      if (this.sectionThree[index].counter > 0) {
        this.sectionThree[index].counter -= 1;
      }
    },

    like(index) {
      this.sectionFour[index].counter += 1;
    },
  },
};
</script>

<style lang="css">
body {
  margin: 0;
}
h2,
p {
  margin: 0;
}

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

.cube {
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.section-two > .cube {
  width: 25%;
  position: relative;
}

.cube > .images {
  width: 100%;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
}

.section-three > .cube {
  width: 33.3%;
}

.section-two > .cube > .cube-title {
  position: relative;
  color: #ffffff;
}

.cube-description {
  position: relative;
  color: #ffffff;
  font-size: 20px;
}

.section-three > .cube > .cube-title {
  text-align: center;
  color: #ffffff;
}

.section-two,
.section-three {
  display: flex;
}

.section-three > .cube:nth-child(1) {
  background: #7fff00;
}

.section-three > .cube:nth-child(2) {
  background: #008000;
}

.section-three > .cube:nth-child(3) {
  background-color: #0000ff;
}

.section-four {
  display: flex;
  align-items: flex-start;
}

.first-image {
  display: flex;
  width: 33.3%;
  flex-wrap: wrap;
}

.section-buuton {
  display: flex;
  justify-content: space-around;
  padding: 1%;
}

.btn {
  padding: 8px 12px;
  text-align: center;
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  .content-menu {
    font-size: 16px;
  }

  .header {
    height: 40px;
  }

  .section-one {
    display: flex;
    flex-direction: column;
  }

  .section-two > .cube,
  .section-three > .cube {
    width: 100%;
  }

  .section-two,
  .section-three {
    flex-wrap: wrap;
  }

  .content-left,
  .content-right {
    width: 100%;
  }

  .content-text {
    font-size: 25px;
  }

  .option {
    width: 60%;
  }

  .content-inner {
    font-size: 20px;
  }

  .content-menu {
    font-size: 15px;
  }

  .footer {
    font-size: 13px;
    font-weight: 700;
  }
}
</style>

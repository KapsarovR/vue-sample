<template>
  <div id="app">
    <div class="header">
      <div class="logo">
        <img src="@/images/Git-Icon-Black.png" class="image" alt="" />
      </div>
      <nav class="nav-bar">
        <ul class="menu">
          <li
            class="menu-one"
            v-for="(item, index) in navigationItems"
            :key="index"
          >
            <a class="menu-inner" href="#">{{ item.name }}</a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="section-one">
      <div class="content-left">
        <img src="@/images/Happy monday.jpg" class="image" alt="" />
      </div>
      <div class="content-right">
        <h1 class="content-text">My kind of life</h1>
        <ol class="content-inner">
          <li class="option" v-for="(item, index) in sectionOne" :key="index">
            {{ item.text }}
            <ul class="content-menu">
              <li class="option">{{ item.test }}</li>
              <li class="option">{{ item.test1 }}</li>
              <li class="option">{{ item.test2 }}</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>

    <div class="section-two">
      <div class="cube" v-for="(item, index) in sectionTwo" :key="index">
        <img src="@/images/Card.png" class="images" alt="" />
        <div class="cube-title">
          <h2>{{ item.titleOne }}</h2>
        </div>
        <div class="cube-description">
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>

    <div class="section-three">
      <div class="cube" v-for="(item, index) in sectionThree" :key="index">
        <h2 class="cube-title">{{ item.title }}</h2>
      </div>
    </div>

    <footer class="footer">
      <p class="footer-title">{{ footerTitle }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      navigationItems: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Contact",
          link: "/contact",
        },
      ],
      sectionOne: [
        {
          text: "Learn",
          test: "Everyday",
          test1: "Everywhere",
          test2: "Anytime",
        },
        {
          text: "Live",
          test: "Full",
          test1: "No regreats",
          test2: "As you want",
        },
        {
          text: "Love",
          test: "Deep",
          test1: "Purely",
          test2: "Life",
        },
        {
          text: "Sport",
          test: "Nba",
          test1: "Football",
          test2: "Handball",
        },
      ],
      sectionTwo: [
        {
          titleOne: "Title",
          description: "Lorem ipsum dolar sit amet",
        },
        {
          titleOne: "Title",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi",
        },
        {
          titleOne: "Title",
          description: "Lorem ipsum dolar sit amet",
        },
        {
          titleOne: "Title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui omnis",
        },
      ],
      sectionThree: [
        {
          title: "Title",
        },
        {
          title: "Title",
        },
        {
          title: "Title",
        },
      ],
      footerTitle: "Kapsar , Copyright © 2022",
    };
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

.header {
  display: flex;
  justify-content: space-between;
  background: #ff6347cc;
  height: 50px;
}

.menu {
  margin: auto;
}

.menu-one {
  display: inline-block;
  font-size: 20px;
  margin: 10px;
}

.menu-inner {
  text-decoration: none;
  color: #ffffff;
}

.title-content {
  background: #619b6a66;
  margin: 0;
  display: flex;
  gap: 20px;
  place-content: center;
}

.title-inner {
  font-size: 25px;
  font-weight: 600;
  color: #ffffff;
  line-height: normal;
  letter-spacing: 5px;
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

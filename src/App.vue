<template>
  <div id="app">
    <div class="header">
      <div class="logo">
        <img src="@/images/Git-Icon-Black.png" class="image" alt="" />
      </div>
      <nav class="nav-bar">
        <ul class="menu">
          <li class="menu-one">
            <a class="menu-inner" href="#">Home</a>
          </li>
          <li class="menu-one">
            <a class="menu-inner" href="#">About</a>
          </li>
          <li class="menu-one">
            <a class="menu-inner" href="#">Contact</a>
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
          <li class="option">Learn</li>
          <ul class="content-menu">
            <li class="option">Everyday</li>
            <li class="option">Everywhere</li>
            <li class="option">Anytime</li>
          </ul>
          <li class="option">Live</li>
          <ul class="content-menu">
            <li class="option">Full</li>
            <li class="option">No regreats</li>
            <li class="option">As you want</li>
          </ul>
          <li class="option">Love</li>
          <ul class="content-menu">
            <li class="option">Deep</li>
            <li class="option">Purely</li>
            <li class="option">Life</li>
          </ul>
          <li class="option">Sport</li>
          <ul class="content-menu">
            <li class="option">Nba</li>
            <li class="option">Football</li>
            <li class="option">Handball</li>
          </ul>
        </ol>
      </div>
    </div>

    <div class="section-two">
      <div class="cube">
        <img src="@/images/Card.png" alt="" />
        <div class="cube-title">
          <h2>Paragraph</h2>
        </div>
        <div class="cube-second">
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div class="cube">
        <img src="@/images/Card.png" alt="" />
        <div class="cube-title">
          <h2>Paragraph</h2>
        </div>
        <div class="cube-second">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            odio maxime
          </p>
        </div>
      </div>
      <div class="cube">
        <img src="@/images/Card.png" alt="" />
        <div class="cube-title">
          <h2>Paragraph</h2>
        </div>
        <div class="cube-second">
          <p>Lorem ipsum dolor sit amet, consectetur</p>
        </div>
      </div>
      <div class="cube">
        <img src="@/images/Card.png" alt="" />
        <div class="cube-title">
          <h2>Paragraph</h2>
        </div>
        <div class="cube-second">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui omnis
            sapiente
          </p>
        </div>
      </div>
    </div>

    <div class="section-three">
      <div class="cube">
        <h2 class="cube-title">Paragraph</h2>
      </div>
      <div class="cube">
        <h2 class="cube-title">Paragraph</h2>
      </div>
      <div class="cube">
        <h2 class="cube-title">Paragraph</h2>
      </div>
    </div>

    <footer class="footer">
      <p class="footer-title">Kapsar , Copyright © 2022</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
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
  width: 25%;
  margin: auto;
  padding: 3px;
}

.cube {
  height: 400px;
}

.section-two > .cube {
  width: 25%;
  position: relative;
}

.cube > img {
  width: 100%;
  display: block;
  height: 400px;
  flex-wrap: wrap;
}

.section-three > .cube {
  width: 33.3%;
}

.section-two > .cube > .cube-title {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  color: #ffffff;
}

.cube-second {
  position: absolute;
  bottom: 0;
  left: 0%;
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
  width: 100%;
  height: 100%;
}

.cube-image {
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.images {
  width: 100%;
  height: 400px;
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
    width: 40%;
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

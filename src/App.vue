<template>
  <div id="app">
    <div class="header">
      <div class="logo">
        <img src="@/images/Git-Icon-Black.png" class="image-git" alt="">
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
        <img src="@/images/Happy monday.jpg" class="image-happy" alt="">
      </div>
      <div class="content-right">
        <h1 class="content-text">My kind of life</h1>
        <ol class="content-inner">
          <li class="option">Learn</li>
          <!-- </ol> -->
          <ul class="content-menu">
            <li class="option">Everyday</li>
            <li class="option">Everywhere</li>
            <li class="option">Anytime</li>
          </ul>
          <!-- <ol class="content-inner"> -->
          <li class="option">Live</li>
          <!-- </ol> -->
          <ul class="content-menu">
            <li class="option">Full</li>
            <li class="option">No regreats</li>
            <li class="option">As you want</li>
          </ul>
          <!-- <ol class="content-inner"> -->
          <li class="option">Love</li>
          <!-- </ol> -->
          <ul class="content-menu">
            <li class="option">Deep</li>
            <li class="option">Purely</li>
            <li class="option">Life</li>
          </ul>
          <!-- <ol class="content-inner"> -->
          <li class="option">Sport</li>
          <!-- </ol> -->
          <ul class="content-menu">
            <li class="option">Nba</li>
            <li class="option">Football</li>
            <li class="option">Handball</li>
          </ul>
        </ol>
      </div>
    </div>


    <div class="section-two">
      <div class="cube-one">
        <p class="cube-title">Paragraph</p>
      </div>
      <div class="cube-two">
        <p class="cube-title">Paragraph</p>
      </div>
      <div class="cube-three">
        <p class="cube-title">Paragraph</p>
      </div>
      <div class="cube-four">
        <p class="cube-title">Paragraph</p>
      </div>
    </div>

    <div class="section-three">
      <div class="cube-five">
        <p class="cube-title">Paragraph</p>
      </div>
      <div class="cube-six">
        <p class="cube-title">Paragraph</p>
      </div>
      <div class="cube-seven">
        <p class="cube-title">Paragraph</p>
      </div>
    </div>


    <footer class="footer">
      <p class="footer-title">Kapsar , Copyright © 2022</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="css">
.header {
  display: flex;
  justify-content: space-between;
  background: #ff6347cc;
  width: 100%;
  height: 50px;
  margin: 0;
}

.image-git {
  width: 100%;
  height: 100%;
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
  color: white;
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
  color: white;
  line-height: normal;
  letter-spacing: 5px;
}

.section-one {
  display: flex;
}

.content-left {
  width: 50%;
}

.image-happy {
  width: 100%;
  display: block;
  height: 100%;
  /* object-fit: contain; */
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

.section-two,
.section-three {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
}

.cube-one,
.cube-two,
.cube-three,
.cube-four {
  padding: 7%;
  margin: 2%;
  border: 1px solid black;
}

.cube-five,
.cube-six,
.cube-seven {
  padding: 7%;
  margin: 2%;
  border: 1px solid black;
}

.cube-one {
  background: red;
}

.cube-two {
  background: #ff6347;
}

.cube-three {
  background-color: aqua;
}

.cube-four {
  background: darkslateblue;
}

.cube-five {
  background: chartreuse;
}

.cube-six {
  background: green;
}

.cube-seven {
  background: blue;
}

.cube-title {
  text-align: center;
  color: white;
}

.footer {
  display: flex;
  justify-content: center;
  background-color: #ff6347cc;
  text-align: center;
  color: black;
  font-size: 16px;
  font-weight: 700;
}

@media only screen and (max-width: 768px) {
  .content-menu {
    font-size: 16px;
  }

  .cube-one,
  .cube-two,
  .cube-three,
  .cube-four {
    padding: 5%;
    margin: 2%;
    border: 1px solid black;
  }

  .cube-five,
  .cube-six,
  .cube-seven {
    padding: 5%;
    margin: 2%;
    border: 1px solid black;
  }
}

@media screen and (max-width: 425px) {
  .header {
    height: 40px;
  }

  .section-one {
    display: flex;
    flex-flow: column;
  }

  .section-two,
  .section-three {
    display: block;
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

<template>
  <div id="app">
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



    <header class="title">
      <div class="title-content">
        <h2 class="title-inner">Happy Monday</h2>
      </div>
    </header>



    <div class="content">
      <div class="content-left">
        <img src="@/images/Happy monday.jpg" class="happy" alt="">
      </div>
      <div class="content-right">
        <h1 class="content-text">My kind of life</h1>
        <ol class="content-inner">
          <li class="option">Learn</li>
        </ol>
        <ul class="content-menu">
          <li class="option">Everyday</li>
          <li class="option">Everywhere</li>
          <li class="option">Anytime</li>
        </ul>
        <ol class="content-inner">
          <li class="option">Live</li>
        </ol>
        <ul class="content-menu">
          <li class="option">Full</li>
          <li class="option">No regreats</li>
          <li class="option">As you want</li>
        </ul>
        <ol class="content-inner">
          <li class="option">Love</li>
        </ol>
        <ul class="content-menu">
          <li class="option">Deep</li>
          <li class="option">Purely</li>
          <li class="option">Life</li>
        </ul>
        <ol class="content-inner">
          <li class="option">Sport</li>
        </ol>
        <ul class="content-menu">
          <li class="option">Nba</li>
          <li class="option">Football</li>
          <li class="option">Handball</li>
        </ul>
      </div>
    </div>


    <footer class="end-content">
      <div class="end">
        <p class="end-title">Kapsar , Copyright © 2022</p>
      </div>
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
body {
  margin: 0;
}

.nav-bar {
  background: #ff6347cc;
  width: 100%;
  height: 50px;
  margin: 0;

}

.menu {
  list-style: none;
  margin: 0;
  padding: 0;
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

/* Nav bar */

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

/* Hover */

.content {
  display: flex;
}

.content-left {
  width: 50%;
}

.happy {
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
}

.content-menu {
  font-size: 18px;
}

.option {
  width: 25%;
  margin: auto;
}

/* Conten end */

.end {
  background-color: #ff6347cc;
  text-align: center;
  padding: 0.5%;
  color: black;
  font-size: 15px;
}

/* End */
@media only screen and (max-width: 768px) {}

@media screen and (max-width: 425px) {
  .menu {
    text-align: center;
  }

  .content-text {
    font-size: 20px;
  }

  .option {
    width: 60%;
  }
  .content-inner{
    font-size: 18px;
  }

  .content-menu{
    font-size: 14px;
  }
}
</style>

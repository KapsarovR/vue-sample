<template>
  <div id="app">
    <div class="nav-bar">
        <nav>
          <ul>
            <li>
                <a href="#">Home</a></li>
            <li>
                <a href="#">About</a></li>
            <li>
                <a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
<!--Navbar-->

      <header>
        <div class="hover-1">
          <h2>Happy Monday</h2>
        </div>
      </header>

<!--Heder end-->

      <div class="conten">
        <div class="conten-left">
            <img src="src/images/Happy monday.jpg" alt="">
        </div>
        <div class="conten-right">
            <h1 class="conten-text">My kind of life</h1>
            <ol>
                <li>Learn</li>
            </ol>
            <ul>
                <li>Everyday</li>
                <li>Everywhere</li>
                <li>Anytime</li>
            </ul>
            <ol>
                <li>Live</li>
             </ol>
            <ul>
                <li>Full</li>
                <li>No regreats</li>
                <li>As you want</li>
            </ul>
            <ol>
                <li>Love</li>
            </ol>
            <ul>
                <li>Deep</li>
                <li>Purely</li>
                <li>Life</li>
            </ul>
            </div>
        </div>
    <!--conten end-->
    <footer>
        <div class="end">
            <p>Kapsar , Copyright © 2022</p>
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

<style lang="scss">
body{
    margin: 0;
}
.nav-bar{
    background: rgba(255, 99, 71, 0.8);
    width: 100%;
    height: 50px;
    margin: 0;

  }
.nav-bar nav ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
.nav-bar nav ul li {
    display: inline-block;
    font-size: 20px;
    margin: 10px;
  }
.nav-bar nav a{
    text-decoration: none;
    color: white;
  }
  
  /* Nav bar */

.hover-1 {
    background: rgba(97, 155, 106, 0.4);
    margin: 0;
    display: grid;
    gap: 20px;
    place-content: center;
}
.hover-1 h2 {
    --s: 0.1em;   /* the thickness of the line */
    --c: #1095c1; /* the color */
    
    padding-bottom: var(--s);
    background: 
       linear-gradient(var(--c) 0 0) no-repeat
       calc(var(--_p,0%) - 20%) 100%/calc(var(--_p,0%) + 10%) var(--s);
    transition: .3s, background-position .4s .3s;
 }
.hover-1 h2:hover {
    --_p: 70%;
    color: var(--c);
    transition: .25s .5s, background-position .4s cubic-bezier(0, 1.25, 1, 1.8);
  }
.hover-1 h2 {
    font-family: system-ui, sans-serif;
    font-size: 3rem;
    cursor: pointer;
    color: white;
}

/* Hover */

.conten {
    display: flex;
}
.conten-left{
    width: 50%;
}
.conten-left img{
    width: 100%;
    display: block;
  }
.conten-right h1{
    text-align: center;
    padding-top: 10%;
  }
.conten-right{
    width: 50%;
    background-color: tomato;
 }
.conten-right ol{
    margin-left: 40%;
    font-size: 20px;
  }
.conten-right ul{
    margin-left: 45%;
    font-size: 20px;
  } 
 
  /* Conten end */

  .end {
    background-color: rgba(255, 99, 71, 0.8);
    text-align: center;
    padding: 0.5%;
    color: black;
    font-size: 15px;
  }
  /* End */

</style>

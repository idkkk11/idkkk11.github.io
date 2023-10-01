<template>
  <div class="navbar">

    <div class='logo'>
      <router-link to="/">
        michael widjaya.
      </router-link>
    </div>
        
    <div class='navigation-buttons'>
        <li class='navigation-items'>
          <router-link to="/about">
            about me
          </router-link>
        </li>
        <li class='navigation-items'>
          <a href="https://www.linkedin.com/in/michaelwidjaya/" target="_blank" rel="noopener noreferrer">
            linkedin
          </a>
        </li>
        <li class='navigation-items'>
          <a href="https://github.com/idkkk11" target="_blank"> github </a>
        </li>
    </div>

    <div class="hamburger-navigation">
      <SidebarMenu></SidebarMenu>
    </div>

  </div>
  <router-view/>
</template>

<style>

@import  './assets/fonts.css';

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  width: 100%;
}

/* nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */

.logo {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    font-size: max(min(2vw, 40px), 24px);
    color: #FFFFFF;
}

.navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 92vw;
    left: 4vw;
    top: 4vh;
    z-index: 999;
}

.navigation-buttons {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 2vw;
}

.navigation-items {
    list-style: none;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    font-size: 1vw;
    color: #FFFFFF;
}

a { 
    color: #FFFFFF;
    text-decoration: none;
}

.navigation-items {
  display: inline-block;
  position: relative;
  color: #FFFFFF;
}

.navigation-items::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #0087ca;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.navigation-items:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

/* Media query for landscape orientation */
@media screen and (orientation: landscape) {
  .hamburger-navigation {
    display: none; /* Hide hamburger navigation */
  }
}

/* Media query for portrait orientation */
@media screen and (orientation: portrait) {
  .navigation-buttons {
    display: none; /* Hide navigation buttons */
  }
}

</style>

<script>
import SidebarMenu from './components/SidebarMenu.vue';
// import SidebarMenu from './components/SidebarMenu.vue';

export default {
    components: {
    SidebarMenu
}
}
</script>



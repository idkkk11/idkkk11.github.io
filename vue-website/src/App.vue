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
            linkedin
        </li>
        <li class='navigation-items'>
            github
        </li>
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

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

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
</style>



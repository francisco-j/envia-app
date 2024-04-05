<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/cart">Cart</router-link>
  </nav>
  <div class="view">
    <router-view/>
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }

  .view {
    max-width: 1024px;
    margin: auto;
  }

  /* normalize */
  h1 {
    margin: 0;
  }
  button {
    box-shadow: none;
    border-radius: 4px;
    outline-width: 0;
    display: inline-block;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
    padding: 8px 4px;
    border-width: 0;
    font-weight: normal;
    text-decoration: none;
    cursor: pointer;
  }
</style>

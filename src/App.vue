<template>
  <div>
    <div class="parent">
      <nav class="top-navbar">
        <a href="/">
          <img src="./assets/logo.png" id="logo-image" alt="kemboijs organization logo" />
        </a>
        <a href="/">About Us</a>
        <a href="/">Get Started</a>
        <a href="/">Guide</a>
        <a href="/">FAQs</a>
        <a href="/">Community</a>
        <a href="/">
          <img src="./assets/github.svg" alt="kemboijs organization logo" />
        </a>
      </nav>
    </div>
    <div class="app-layout">
      <div class="left-navbar">
        <input placeholder="Type to search" id="search-item" />
        <p>Introduction</p>
        <p>Basic Tutorial</p>
        <p>Routing</p>
        <p>Middlewares</p>
        <p>validations</p>
        <p>Advanced Totorial</p>
      </div>
      <div class="main-page" id="app">
        <HomePage msg="Welcome to KemboiJS Organization" code="const kemboi = Kemboijs();" />
      </div>
      <div class="right-navbar">
        <p>Related Articles</p>
        <p>Documentation</p>
        <p>Read More</p>
        <p>Get Help</p>
        <p>Contribute</p>
      </div>
    </div>
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";

export default {
  name: "app",
  components: {
    HomePage
  }
};
</script>

<style>
.app-layout {
  display: flex;
}

.left-navbar {
  background-color: #fafafa;
  display: flex;
  width: 20%;
  height: 100vh;
  flex-direction: column;
  padding-left: 20px;
  border-right: 1px solid rgba(0, 0, 0, 0.07);
  margin-right: 10px;
}
.right-navbar {
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  padding-left: 20px;
  padding-top: 20px;
  width: 15%;
  border-left: 1px solid rgba(0, 0, 0, 0.07);
  background-color: #fafafa;
  margin-left: 10px;
}
.main-page {
  width: 65%;
  border-top: 1px solid rgba(0, 0, 0, 0.07);
}
.top-navbar {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
}
.top-navbar a {
  text-decoration: none;
  display: inline;
}
.top-navbar img {
  height: 30px;
}

#search-item {
  height: 30px;
  margin: 5px;
}

a {
  color: #42b983;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

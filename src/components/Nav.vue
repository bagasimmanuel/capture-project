<template>
  <div>
    <nav class="nav">
      <h1>
        <router-link id="logo" to="/">Capture</router-link>
      </h1>
      <ul>
        <li>
          <router-link class="link" to="/">1. Home</router-link>
        </li>
        <li>
          <router-link class="link" to="/our-work">2. Our Work</router-link>
        </li>
        <li>
          <router-link class="link" to="/contact">3. Contact Us</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  .link {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    li {
      padding-left: 10rem;
      position: relative;
    }
  }
  #logo {
    font-size: 2rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
}
</style>

<script setup></script>

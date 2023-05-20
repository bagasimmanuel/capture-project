<template>
  <div class="work">
    <div class="movie">
      <h2>The Athlete</h2>
      <div class="line"></div>
      <router-link to="">
        <img :src="athlete" alt="" />
      </router-link>
    </div>
    <div class="movie">
      <h2>The Racer</h2>
      <div class="line"></div>
      <router-link to="">
        <img :src="theracer" alt="" />
      </router-link>
    </div>
    <div class="movie">
      <h2>Good Times</h2>
      <div class="line"></div>
      <router-link to="">
        <img :src="goodtimes" alt="" />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.work {
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: white;
  h2 {
    padding: 1rem 0rem;
  }
  .movie {
    padding-bottom: 10rem;
    .line {
      height: 0.5rem;
      background: #cccccc;
      margin-bottom: 3rem;
    }
    img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
    }
  }
}
</style>

<script setup>
import { RouterLink } from 'vue-router'
import athlete from '../assets/images/athlete-small.png'
import theracer from '../assets/images/theracer-small.png'
import goodtimes from '../assets/images/goodtimes-small.png'
</script>

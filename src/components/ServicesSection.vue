<template>
  <div class="services">
    <div class="description">
      <h2>High <span>quality</span> services</h2>
      <div class="cards">
        <!-- first card -->
        <div class="card">
          <div class="icon">
            <img :src="clock" alt="" />
            <h3>Efficient</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <!-- second card -->
        <div class="card">
          <div class="icon">
            <img :src="teamwork" alt="" />
            <h3>Teamwork</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <!-- third card -->
        <div class="card">
          <div class="icon">
            <img :src="diaphragm" alt="" />
            <h3>Diaphragm</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <!-- fourth card -->
        <div class="card">
          <div class="icon">
            <img :src="money" alt="" />
            <h3>Affordable</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
    <div class="image">
      <img :src="home2" alt="" />
    </div>
  </div>
</template>

<script setup>
import clock from '../assets/images/clock.svg'
import money from '../assets/images/money.svg'
import diaphragm from '../assets/images/diaphragm.svg'
import teamwork from '../assets/images/teamwork.svg'
import home2 from '../assets/images/home2.png'
</script>

<style lang="scss" scoped>
.services {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  .description {
    flex: 1;
    padding-right: 5rem;
    h2 {
      font-weight: lighter;
      padding-bottom: 5rem;
    }
    p {
      width: 70%;
      padding: 2rem 0rem 4rem 0rem;
    }

    .cards {
      display: flex;
      flex-wrap: wrap;

      .card {
        flex-basis: 15rem;
        .icon {
          display: flex;
          align-items: center;

          h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
          }
        }
      }
    }

    .title {
      .hide {
        overflow: hidden;
      }
    }
  }

  .image {
    flex: 1;
    overflow: hidden;
    img {
      width: 100%;
      height: 80vh;
      object-fit: cover;
    }
  }
}
</style>

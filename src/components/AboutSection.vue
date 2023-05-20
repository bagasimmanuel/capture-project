<template>
  <div class="about">
    <div class="description">
      <div class="title">
        <div class="hide">
          <h2>We work to make</h2>
        </div>
        <div class="hide">
          <h2>your <span>dreams</span></h2>
        </div>
        <div class="hide">
          <h2>come true.</h2>
        </div>
      </div>
      <p>
        Contact us for any photography or videography ideas that you have. We have professionals
        with Amazing skills
      </p>
      <button>Contact Us</button>
    </div>
    <div class="image">
      <img :src="home1" alt="" />
    </div>
  </div>
</template>

<script setup>
import home1 from '../assets/images/home1.png'
</script>

<style lang="scss" scoped>
.about {
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

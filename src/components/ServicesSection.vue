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

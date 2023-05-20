<template>
  <div class="faq">
    <h2>Any Questions <span>FAQ</span></h2>
    <!-- Question 1 -->
    <div class="question">
      <h4>How do I start?</h4>
      <div class="answer">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
      </div>
      <div class="faq-line"></div>
    </div>
    <!-- Question 2 -->
    <div class="question">
      <h4>Daily schedule</h4>
      <div class="answer">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
      </div>
      <div class="faq-line"></div>
    </div>
    <!-- Question 3 -->
    <div class="question">
      <h4>Different payment methods</h4>
      <div class="answer">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
      </div>
      <div class="faq-line"></div>
    </div>
    <!-- Question 4 -->
    <div class="question">
      <h4>What products do you offer?</h4>
      <div class="answer">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
      </div>
      <div class="faq-line"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.faq {
  min-height: 90vh;
  display: block;
  padding: 5rem 10rem;
  color: white;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
}
</style>

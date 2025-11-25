<template>
  <header>
    <div class="container">
      <div class="logo">
        <!-- Le logo sera une image plus tard -->
        <img src="../assets/logo.png" alt="Cooking Delight Logo" class="logo"/>
      </div>

      <nav class="main-nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Recipes</a></li>
          <li><a href="#">Cooking Tips</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>

      <button class="subscribe-btn">Subscribe</button>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.logo img {
  height: 50px;
}
</style>

<template>
  <header class="site-header">
    <div class="header-wrapper">
      <!-- Logo -->
      <div class="logo">
        <img src="../assets/logo.png" alt="Cooking MMI Logo" />
      </div>

      <!-- Navigation -->
      <nav class="header-nav">
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">RECIPES</a></li>
          <li><a href="#">COOKING TIPS</a></li>
          <li><a href="#">ABOUT US</a></li>
        </ul>
      </nav>

      <!-- Subscribe -->
      <div class="header-cta">
        <button>SUBSCRIBE</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.logo img {
  height: 50px;
}

.site-header {
  background-color: #fff7ec; 
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

/* Conteneur principal du header */
.header-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}
</style>

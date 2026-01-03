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
          <li><a href="/RecipesView">RECIPES</a></li>
          <li><a href="#">COOKING TIPS</a></li>
          <li><a href="/AboutView">ABOUT US</a></li>
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

/* NAVIGATION */
.header-nav ul {
  display: flex;
  align-items: center;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.header-nav a {
  text-decoration: none;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #4b4b4b;
}

.header-nav a:hover {
  color: #000000;
}

/* BOUTON SUBSCRIBE */
.header-cta button {
  padding: 10px 24px;
  border-radius: 999px;
  border: none;
  background-color: #000000;
  color: #ffffff;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  cursor: pointer;
}

.header-cta button:hover {
  opacity: 0.9;
}

</style>

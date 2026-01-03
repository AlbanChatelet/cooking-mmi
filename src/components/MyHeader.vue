<template>
  <header class="c-header">
    <div class="l-container c-header__inner">
      <RouterLink to="/" class="c-header__brand">
        <img class="c-header__logo" src="../assets/logo.png" alt="Cooking MMI Logo" />
      </RouterLink>

      <nav class="c-header__nav">
        <ul class="c-header__list">
          <li><RouterLink class="c-header__link" to="/">HOME</RouterLink></li>
          <li><RouterLink class="c-header__link" to="/recipes">RECIPES</RouterLink></li>
          <li><a class="c-header__link" href="#">COOKING TIPS</a></li>
          <li><RouterLink class="c-header__link" to="/about">ABOUT US</RouterLink></li>
        </ul>
      </nav>

      <div class="c-header__cta">
        <button class="c-btn">SUBSCRIBE</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

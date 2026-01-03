<template>
  <header class="c-header">
    <div class="l-container c-header__inner">
      <RouterLink to="/" class="c-header__brand">
        <img class="c-header__logo" src="../assets/logo.png" alt="Cooking MMI Logo" />
      </RouterLink>

      <!-- Burger (mobile) -->
      <button
        class="c-burger"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-label="Open menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="c-burger__line"></span>
        <span class="c-burger__line"></span>
        <span class="c-burger__line"></span>
      </button>

      <!-- Nav (desktop + mobile panel) -->
      <nav class="c-header__nav" :class="{ 'is-open': isMenuOpen }">
        <ul class="c-header__list">
          <li><RouterLink class="c-header__link" to="/" @click="closeMenu">HOME</RouterLink></li>
          <li>
            <RouterLink class="c-header__link" to="/recipes" @click="closeMenu"
              >RECIPES</RouterLink
            >
          </li>
          <li><a class="c-header__link" href="#" @click="closeMenu">COOKING TIPS</a></li>
          <li>
            <RouterLink class="c-header__link" to="/about" @click="closeMenu"
              >ABOUT US</RouterLink
            >
          </li>
        </ul>

        <!-- CTA dans le panel mobile -->
        <div class="c-header__cta c-header__cta--mobile">
          <button class="c-btn" type="button">SUBSCRIBE</button>
        </div>
      </nav>

      <!-- CTA desktop -->
      <div class="c-header__cta c-header__cta--desktop">
        <button class="c-btn" type="button">SUBSCRIBE</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isMenuOpen = ref(false)

function closeMenu() {
  isMenuOpen.value = false
}

// Ferme le menu quand on change de page
const route = useRoute()
watch(
  () => route.fullPath,
  () => closeMenu(),
)
</script>

<template>
  <footer class="c-footer">
    <div class="l-container c-footer__inner">
      <nav class="c-footer__nav">
        <ul class="c-footer__list">
          <li><RouterLink class="c-footer__link" to="/">HOME</RouterLink></li>
          <li><RouterLink class="c-footer__link" to="/recipes">RECIPES</RouterLink></li>
          <li><a class="c-footer__link" href="#">COOKING TIPS</a></li>
          <li><RouterLink class="c-footer__link" to="/about">ABOUT US</RouterLink></li>
        </ul>
      </nav>

      <hr class="c-footer__rule" />

      <p class="c-footer__copy">© 2024 COOKING MMI.</p>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

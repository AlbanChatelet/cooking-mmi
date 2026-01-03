<template>
  <footer class="site-footer">
    <div class="footer-wrapper">
      <nav class="footer-nav">
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">RECIPES</a></li>
          <li><a href="#">COOKING TIPS</a></li>
          <li><a href="#">ABOUT US</a></li>
        </ul>
      </nav>

      <hr />

      <p class="copyright">© 2024 COOKING MMI.</p>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.site-footer {
  background-color: #1d1b18; /* noir légèrement teinté */
  color: #e8e6e3; /* blanc/beige doux comme la maquette */
  padding: 40px 20px;
  width: 100%;
}

.footer-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}
</style>

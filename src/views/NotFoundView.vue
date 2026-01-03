<script setup lang="ts">
import Header from '@/components/MyHeader.vue'
import Footer from '@/components/MyFooter.vue'
</script>

<template>
  <main>
    <Header />

    <section style="padding: 24px;">
      <h1>404</h1>
      <p>Cette page n’existe pas.</p>

      <p>
        <RouterLink to="/">Retour à l’accueil</RouterLink>
      </p>
    </section>

    <Footer />
  </main>
</template>

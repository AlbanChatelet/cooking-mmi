<script setup lang="ts">
import Header from '@/components/MyHeader.vue'
import Footer from '@/components/MyFooter.vue'
</script>

<template>
  <main>
    <Header />

    <section style="padding: 24px;">
      <h1>About</h1>

      <p>
        Cooking MMI is a simple recipe project made to practice Vue, routing,
        and API integration.
      </p>

      <p>
        <RouterLink to="/recipes">Browse recipes</RouterLink>
      </p>
    </section>

    <Footer />
  </main>
</template>

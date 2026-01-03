<script setup lang="ts">
import Header from '@/components/MyHeader.vue'
import Footer from '@/components/MyFooter.vue'
import RecipeList from '@/components/RecipeList.vue'
import { useRecipes } from '@/composables/useRecipes'

const { recipes, error, loading } = useRecipes()
</script>

<template>
  <main>
    <Header />

    <section style="padding: 24px;">
      <h1>Recipes</h1>

      <p v-if="loading">Chargement...</p>
      <p v-else-if="error">Erreur : {{ error }}</p>

      <RecipeList v-else :recipes="recipes" />
    </section>

    <Footer />
  </main>
</template>

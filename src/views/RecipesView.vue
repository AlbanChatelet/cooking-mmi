<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Header from '@/components/MyHeader.vue'
import Footer from '@/components/MyFooter.vue'
import RecipeList from '@/components/RecipeList.vue'

type Recipe = {
  recipe_id: number
  title: string
  cuisine_name: string | null
}

const recipes = ref<Recipe[]>([])
const error = ref<string | null>(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3000/api/recipes')
    const json = await res.json()

    if (!json.success) {
      throw new Error(json.error || 'API error')
    }

    recipes.value = json.data
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Unknown error'
  } finally {
    loading.value = false
  }
})
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

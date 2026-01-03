<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Header from '@/components/MyHeader.vue'
import Footer from '@/components/MyFooter.vue'
import RecipeList from '@/components/RecipeList.vue'

type Recipe = {
  recipe_id: number
  title: string
  cuisine_name: string | null
  image_url?: string
}

const recipes = ref<Recipe[]>([])
const error = ref<string | null>(null)
const loading = ref(true)

const API_URL = import.meta.env.VITE_API_URL

onMounted(async () => {
  try {
    const res = await fetch(`${API_URL}/api/recipes`)
    const json = await res.json()
    if (!json.success) throw new Error(json.error || 'API error')
    recipes.value = json.data
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Unknown error'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <main class="l-page">
    <Header />

    <div class="l-main">
      <section class="l-section">
        <div class="l-container">
          <h1 class="u-title">Recipes</h1>

          <p v-if="loading" class="u-muted">Chargement...</p>
          <p v-else-if="error">Erreur : {{ error }}</p>

          <RecipeList v-else :recipes="recipes" />
        </div>
      </section>
    </div>

    <Footer />
  </main>
</template>

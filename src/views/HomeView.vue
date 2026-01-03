<script setup lang="ts">
import Footer from '@/components/MyFooter.vue'
import Header from '@/components/MyHeader.vue'

import { onMounted, ref } from 'vue'

type Recipe = {
  recipe_id: number
  title: string
  description: string
  image_url: string
  cuisine_name: string | null
  goal_name: string | null
  diet_name: string | null
  allergy_name: string | null
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
      <h1>Recettes</h1>

      <p v-if="loading">Chargement...</p>
      <p v-else-if="error">Erreur : {{ error }}</p>

      <ul v-else>
        <li v-for="r in recipes" :key="r.recipe_id">
          <strong>{{ r.title }}</strong> — {{ r.cuisine_name }}
        </li>
      </ul>
    </section>

    <Footer />
  </main>
</template>

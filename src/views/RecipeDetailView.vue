<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@/components/MyHeader.vue'
import Footer from '@/components/MyFooter.vue'

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

const route = useRoute()
const recipe = ref<Recipe | null>(null)
const error = ref<string | null>(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const id = route.params.id
    const res = await fetch(`http://localhost:3000/api/recipes/${id}`)
    const json = await res.json()

    if (!json.success) {
      throw new Error(json.error || 'API error')
    }

    recipe.value = json.data
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
      <p v-if="loading">Chargement...</p>
      <p v-else-if="error">Erreur : {{ error }}</p>

      <div v-else-if="recipe">
        <h1>{{ recipe.title }}</h1>
        <p>{{ recipe.description }}</p>

        <ul>
          <li><strong>Cuisine:</strong> {{ recipe.cuisine_name }}</li>
          <li><strong>Goal:</strong> {{ recipe.goal_name }}</li>
          <li><strong>Diet:</strong> {{ recipe.diet_name }}</li>
          <li><strong>Allergy:</strong> {{ recipe.allergy_name }}</li>
        </ul>

        <p>
          <RouterLink to="/recipes">← Retour aux recettes</RouterLink>
        </p>
      </div>
    </section>

    <Footer />
  </main>
</template>

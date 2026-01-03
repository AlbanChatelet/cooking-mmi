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

const API_URL = import.meta.env.VITE_API_URL

function onImgError(e: Event, id: number) {
  ;(e.target as HTMLImageElement).src = `https://picsum.photos/seed/recipe-${id}/900/650`
}

onMounted(async () => {
  try {
    const id = route.params.id
    const res = await fetch(`${API_URL}/api/recipes/${id}`)
    const json = await res.json()
    if (!json.success) throw new Error(json.error || 'API error')
    recipe.value = json.data
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
          <p v-if="loading" class="u-muted">Chargement...</p>
          <p v-else-if="error">Erreur : {{ error }}</p>

          <div v-else-if="recipe" class="c-detail">
            <div class="c-detail__media">
              <img
                class="c-detail__img"
                :src="`${API_URL}/images/${recipe.image_url}`"
                :alt="recipe.title"
                @error="(e) => onImgError(e, recipe.recipe_id)"
              />
            </div>

            <div class="c-detail__panel">
              <h1 class="c-detail__h1">{{ recipe.title }}</h1>
              <p class="c-detail__desc">{{ recipe.description }}</p>

              <ul class="c-detail__list">
                <li><strong>Cuisine:</strong> {{ recipe.cuisine_name }}</li>
                <li><strong>Goal:</strong> {{ recipe.goal_name }}</li>
                <li><strong>Diet:</strong> {{ recipe.diet_name }}</li>
                <li><strong>Allergy:</strong> {{ recipe.allergy_name }}</li>
              </ul>

              <RouterLink class="c-detail__back" to="/recipes">
                ← Retour aux recettes
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </main>
</template>

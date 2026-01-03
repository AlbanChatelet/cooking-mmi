<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
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

/* --- Filtrage par cuisine --- */
const selectedCuisine = ref('all')

const cuisines = computed(() => {
  const set = new Set<string>()
  for (const r of recipes.value) {
    if (r.cuisine_name) set.add(r.cuisine_name)
  }
  return Array.from(set).sort()
})

const filteredRecipes = computed(() => {
  if (selectedCuisine.value === 'all') return recipes.value
  return recipes.value.filter((r) => r.cuisine_name === selectedCuisine.value)
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

          <div v-else>
            <!-- Filtre -->
            <label>
              Cuisine :
              <select v-model="selectedCuisine">
                <option value="all">Toutes</option>
                <option v-for="c in cuisines" :key="c" :value="c">
                  {{ c }}
                </option>
              </select>
            </label>

            <!-- Liste filtrée -->
            <RecipeList :recipes="filteredRecipes" />
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </main>
</template>

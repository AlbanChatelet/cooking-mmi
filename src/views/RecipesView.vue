<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import Header from '@/components/MyHeader.vue'
import Footer from '@/components/MyFooter.vue'
import RecipeList from '@/components/RecipeList.vue'

type Recipe = {
  recipe_id: number
  title: string
  cuisine_name: string | null
  diet_name: string | null
  goal_name: string | null
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

/* --- Filtres --- */
const searchQuery = ref('')
const selectedCuisine = ref('all')
const selectedDiet = ref('all')
const selectedGoal = ref('all')

const cuisines = computed(() => {
  const set = new Set<string>()
  for (const r of recipes.value) {
    if (r.cuisine_name) set.add(r.cuisine_name)
  }
  return Array.from(set).sort()
})

const diets = computed(() => {
  const set = new Set<string>()
  for (const r of recipes.value) {
    if (r.diet_name) set.add(r.diet_name)
  }
  return Array.from(set).sort()
})

const goals = computed(() => {
  const set = new Set<string>()
  for (const r of recipes.value) {
    if (r.goal_name) set.add(r.goal_name)
  }
  return Array.from(set).sort()
})

const filteredRecipes = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()

  return recipes.value.filter((r) => {
    const matchesSearch = q === '' || r.title.toLowerCase().includes(q)

    const matchesCuisine =
      selectedCuisine.value === 'all' || r.cuisine_name === selectedCuisine.value

    const matchesDiet =
      selectedDiet.value === 'all' || r.diet_name === selectedDiet.value

    const matchesGoal =
      selectedGoal.value === 'all' || r.goal_name === selectedGoal.value

    return matchesSearch && matchesCuisine && matchesDiet && matchesGoal
  })
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
            <!-- Recherche -->
            <label>
              Recherche :
              <input v-model="searchQuery" type="text" placeholder="Ex: chicken..." />
            </label>

            <!-- Cuisine -->
            <label>
              Cuisine :
              <select v-model="selectedCuisine">
                <option value="all">Toutes</option>
                <option v-for="c in cuisines" :key="c" :value="c">
                  {{ c }}
                </option>
              </select>
            </label>

            <!-- Diet -->
            <label>
              Diet :
              <select v-model="selectedDiet">
                <option value="all">Toutes</option>
                <option v-for="d in diets" :key="d" :value="d">
                  {{ d }}
                </option>
              </select>
            </label>

            <!-- Goal -->
            <label>
              Goal :
              <select v-model="selectedGoal">
                <option value="all">Tous</option>
                <option v-for="g in goals" :key="g" :value="g">
                  {{ g }}
                </option>
              </select>
            </label>

            <!-- Aucun résultat -->
            <p v-if="filteredRecipes.length === 0">Aucune recette trouvée.</p>

            <!-- Liste filtrée -->
            <RecipeList v-else :recipes="filteredRecipes" />
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </main>
</template>

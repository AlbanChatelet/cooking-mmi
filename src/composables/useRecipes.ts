import { onMounted, ref, watch } from 'vue'
import type { Ref } from 'vue'

export type RecipeDetail = {
  recipe_id: number
  title: string
  description: string
  image_url: string
  cuisine_name: string | null
  goal_name: string | null
  diet_name: string | null
  allergy_name: string | null
}

export function useRecipe(id: Ref<string | string[] | undefined>) {
  const recipe = ref<RecipeDetail | null>(null)
  const error = ref<string | null>(null)
  const loading = ref(true)

  const API_URL = import.meta.env.VITE_API_URL

  async function fetchRecipe() {
    loading.value = true
    error.value = null
    recipe.value = null

    try {
      const recipeId = Array.isArray(id.value) ? id.value[0] : id.value
      if (!recipeId) throw new Error('Missing recipe id')

      const res = await fetch(`${API_URL}/api/recipes/${recipeId}`)
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
  }

  onMounted(fetchRecipe)
  watch(id, fetchRecipe)

  return { recipe, error, loading }
}

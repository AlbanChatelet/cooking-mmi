import { onMounted, ref } from 'vue'

export type Recipe = {
  recipe_id: number
  title: string
  description?: string
  image_url?: string
  cuisine_name: string | null
  goal_name?: string | null
  diet_name?: string | null
  allergy_name?: string | null
}

export function useRecipes() {
  const recipes = ref<Recipe[]>([])
  const error = ref<string | null>(null)
  const loading = ref(true)

  const API_URL = import.meta.env.VITE_API_URL

  onMounted(async () => {
    try {
      const res = await fetch(`${API_URL}/api/recipes`)
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

  return { recipes, error, loading }
}

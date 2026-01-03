<script setup lang="ts">
type Recipe = {
  recipe_id: number
  title: string
  cuisine_name: string | null
  image_url?: string
}

defineProps<{
  recipes: Recipe[]
}>()

const API_URL = import.meta.env.VITE_API_URL
</script>

<template>
  <ul style="list-style: none; padding: 0; margin: 0;">
    <li v-for="r in recipes" :key="r.recipe_id" style="margin-bottom: 16px;">
      <img
  :src="`${API_URL}/images/${r.image_url}`"
  :alt="r.title"
  width="160"
  @error="(e) => (e.target as HTMLImageElement).src = `https://picsum.photos/seed/recipe-${r.recipe_id}/160/120`"
/>



      <div>
        <RouterLink :to="`/recipes/${r.recipe_id}`">
          <strong>{{ r.title }}</strong>
        </RouterLink>
        — {{ r.cuisine_name }}
      </div>
    </li>
  </ul>
</template>

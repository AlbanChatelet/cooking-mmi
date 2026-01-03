<script setup lang="ts">
type Recipe = {
  recipe_id: number
  title: string
  cuisine_name: string | null
  image_url?: string
}

defineProps<{ recipes: Recipe[] }>()

const API_URL = import.meta.env.VITE_API_URL

function imgSrc(r: Recipe) {
  return `${API_URL}/images/${r.image_url}`
}

function onImgError(e: Event, id: number) {
  ;(e.target as HTMLImageElement).src = `https://picsum.photos/seed/recipe-${id}/600/450`
}
</script>

<template>
  <ul class="c-recipes">
    <li v-for="r in recipes" :key="r.recipe_id">
      <RouterLink class="c-recipeCard" :to="`/recipes/${r.recipe_id}`">
        <div class="c-recipeCard__media">
          <img
            class="c-recipeCard__img"
            :src="imgSrc(r)"
            :alt="r.title"
            @error="(e) => onImgError(e, r.recipe_id)"
          />
        </div>

        <div class="c-recipeCard__body">
          <h3 class="c-recipeCard__title">{{ r.title }}</h3>
          <p class="c-recipeCard__meta">{{ r.cuisine_name }}</p>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

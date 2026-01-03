<script setup lang="ts">
import { RouterLink } from 'vue-router'

type Recipe = {
  recipe_id: number
  title: string
  cuisine_name: string | null
}

defineProps<{
  recipes: Recipe[]
}>()
</script>

<template>
  <ul>
    <li v-for="r in recipes" :key="r.recipe_id">
      <RouterLink :to="`/recipes/${r.recipe_id}`">
  <strong>{{ r.title }}</strong>
</RouterLink>
 — {{ r.cuisine_name }}
    </li>
  </ul>
</template>

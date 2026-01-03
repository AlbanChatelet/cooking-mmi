<script setup lang="ts">
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
      <strong>{{ r.title }}</strong> — {{ r.cuisine_name }}
    </li>
  </ul>
</template>

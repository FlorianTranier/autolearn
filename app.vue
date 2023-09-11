<script setup lang="ts">
const { data } = await useFetch('/api/user', {
  method: "post"
})
</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

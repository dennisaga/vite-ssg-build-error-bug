<script setup lang="ts">
import { useClient } from 'villus'

useClient({
  url: 'http://localhost:3002/graphql',
})

useHead({
  title: 'Code',
  meta: [
    { name: 'description', content: 'Code' },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>

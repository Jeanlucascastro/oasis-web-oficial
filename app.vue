<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Oasis',
  meta: [
    { name: 'Plataforma Oasis', content: 'Aprenda de verdade' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>
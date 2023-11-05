<script setup lang="ts">
const route = useRoute()

console.log("ts video => ", route.params.id)
</script>

<template>
    <h2> {{ route.params.id }}</h2>
</template>
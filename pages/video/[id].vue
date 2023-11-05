<script setup lang="ts">
import apiService from '../../services/apiService.vue';

const route = useRoute()
const data = apiService.request("/video/" + route.params.id)
console.log("ts video => ", data)

</script>

<template>
    <h2> {{ route.params.id }}</h2>
</template>

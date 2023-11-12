<template>
    <header>
      <nav>
        <ul>
          <h1>USUARIO LOGADO </h1>
          <p>{{ token }}</p>
          <li><NuxtLink to="/video/1">Post 1</NuxtLink></li>
          <li><NuxtLink to="/video/2">Post 2</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </template>

<script lang="ts">

definePageMeta({
  middleware: 'auth'
})

// const tokenSalvo = useState('token') || ''

export default {

data() {
  return {
    usuario: "",
    token: 'tokenSalvo.value ||' 
  };
},


mounted() {
    // Acessando um valor diretamente no estado global

    // Acessando um valor em um módulo chamado 'auth'
    const token = this.$store.getters.auth.token;

  }

}
</script>
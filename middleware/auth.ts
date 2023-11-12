export default defineNuxtRouteMiddleware((to, from) => {

    const auth = useState('auth')
    console.log('auth', auth.value)
    if (auth.value === undefined) {
      return navigateTo('/')
    }
  })
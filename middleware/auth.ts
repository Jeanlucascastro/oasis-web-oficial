export default defineNuxtRouteMiddleware((to, from) => {

  // var data = sessionStorage.getItem("token");
  //   if (data) {
  //   console.log("token", data)
  // }

    const auth = useState('auth')
    console.log('auth', auth.value)
    // if (auth.value === undefined) {
    //   return navigateTo('/')
    // }
  })
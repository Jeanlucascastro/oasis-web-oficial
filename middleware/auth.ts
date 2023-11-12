export default defineNuxtRouteMiddleware((to, from) => {

  var data = sessionStorage.getItem("token");
    if (data) {
    console.log("token", data)
  }


    if (!data) {
      return navigateTo('/')
    }
  })
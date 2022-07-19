import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserLoginStore = defineStore('userLogin', () => {
  /**
   * Current name of the user.
   */
  const isLogin = ref(false)
  const address = ref('')

  // const usedNames = computed(() => Array.from(previousNames.value))
  // const otherNames = computed(() => usedNames.value.filter(name => name !== savedName.value))

  /**
   * Changes the current name of the user and saves the one that was used
   * before.
   *
   * @param name - new name to set
   */
  function userLogin() {
    isLogin.value = true
  }
  function userLogout() {
    isLogin.value = false
  }

  return {
    userLogin,
    userLogout,
    isLogin,
    address,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))

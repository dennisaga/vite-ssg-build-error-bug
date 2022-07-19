<script lang="ts" setup>
const userLogin = useUserLoginStore()
const isLogin = ref(userLogin.isLogin)
const router = useRouter()
const login = () => {
  router.push('/dashboard')
  userLogin.userLogin()
}
watchEffect(() => {
  isLogin.value = userLogin.isLogin
})
</script>

<template>
  <div
    class="
  sticky top-0 z-30 flex h-22 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100
  bg-base-100 text-base-content shadow-sm
  "
  >
    <nav class="navbar w-full bg-sky-100 py-4 px-8">
      <div class="flex flex-1 md:gap-1 lg:gap-2">
        <span class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]" data-tip="Menu">

          <label for="my-drawer" class="btn btn-square btn-ghost drawer-button lg:hidden">
            <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          <div v-if="!isLogin" class="gap-2 hidden w-full max-w-sm lg:flex">
            <a href="/" aria-current="page" aria-label="Homepage" class="flex-0 px-2 ">
              <div class="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl">
                <span
                  class="w-24 hover:scale-105 hover:cursor-pointer"
                /></div>
            </a>
          </div>
        </span>
      </div>
      <div v-if="!isLogin" class="flex-0">
        <div class="gap-2 hidden w-full max-w-sm lg:flex">
          <button class="btn btn-ghost btn-sm px-4 normal-case p-0" :class="$style.btn" @click="login()">
            Login
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="gap-2 iconify iconify--material-symbols" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m10 17l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5Zm2 4v-2h7V5h-7V3h7q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z" /></svg>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<style module lang="scss">
@import '../styles/conversion.scss';
.bg {
  box-shadow: 0 8px 13px 0 rgba(0, 0, 0, 0.25);
  background-color: #0081c5;
}
.btn {
  width: tovw(120);
  height: tovw(50);
  object-fit: contain;
  border-radius: tovw(18);
  -webkit-backdrop-filter: blur(4px);
  color: white;
  backdrop-filter: blur(4px);
  background-color: #2350a9;
}
</style>

    <!-- <div class="flex-1">
      <div class="w-24 hover:scale-105 hover:cursor-pointer">
        <img :src="Logo">
      </div>
    </div>
    <div class="flex-none">
      <button class="btn btn-ghost btn-sm px-4 normal-case" @click="login()">
        Login
      </button>
      <div v-if="isLogin" class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people">
          </div>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div> -->

<template>
  <div class="bg-base-100 drawer drawer-mobile">
    <input id="my-drawer" type="checkbox" class="drawer-toggle">
    <div class="drawer-content" style="scroll-behavior: smooth; scroll-padding-top: 5rem;">
      <RouterView />
    </div>
    <div class="drawer-side">
      <DrawerSide />
    </div>
    <!-- <Footer />
    <div class="mt-5 mx-auto text-center opacity-75 text-sm">
      [DApp Layout]
    </div> -->
  </div>
</template>

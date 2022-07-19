<script lang="ts" setup>
import { SideNavItems } from '../repository/SideNavItems'
</script>

<template>
  <label for="my-drawer" class="drawer-overlay" />
  <aside class="bg-base-200 w-80">
    <div class="z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 hidden lg:flex">
      <a aria-current="page" aria-label="Homepage" class="flex-0 btn btn-ghost px-2">
        <a class="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl" />
      </a>
    </div>
    <div class="h-4" />
    <ul class="menu menu-compact flex flex-col p-0 px-4">
      <li>
        <a id="" sveltekit:prefetch="" class="flex gap-4   ">
          <span class="flex-none" v-html="SideNavItems.navItems.DASHBOARD.iconUrl" />
          <span class="flex-1">{{ SideNavItems.navItems.DASHBOARD.title }}</span>
        </a>
      </li>
    </ul>
    <ul class="menu menu-compact flex flex-col p-0 px-4">
      <li />
      <li class="menu-title">
        <span>{{ SideNavItems.navItems.CONTRACT.title }}</span>
      </li>
      <li v-for="(item, i) in SideNavItems.navItems.CONTRACT.contents" :key="i">
        <a id="" sveltekit:prefetch="" class="flex gap-4">
          <span class="flex-none" v-html="item.iconUrl" />
          <span class="flex-1">{{ item.title }}</span>
        </a>
      </li>
    </ul>
    <ul class="menu menu-compact flex flex-col p-0 px-4">
      <li />
      <li class="menu-title">
        <span>{{ SideNavItems.navItems.SETTINGS.title }}</span>
      </li>
      <li v-for="(item, i) in SideNavItems.navItems.SETTINGS.contents" :key="i">
        <a id="" sveltekit:prefetch="" class="flex gap-4">
          <span class="flex-none" v-html="item.iconUrl" />
          <span class="flex-1">{{ item.title }}</span>
        </a>
      </li>
    </ul>
    <ul class="menu menu-compact flex flex-col p-0 px-4" />
    <!-- <div class="from-base-200 pointer-events-none sticky bottom-0 flex h-20 bg-gradient-to-t to-transparent" /> -->
  </aside>
</template>

<style module lang="scss">
</style>

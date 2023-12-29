<template>
  <div class="mt-4 flex gap-4 relative">
    <div class="flex flex-1"></div>
    <div class="flex flex-1 justify-end md:justify-center">
      <nav class="pointer-events-auto hidden md:block">
        <ul
          class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          <li v-for="(el, idx) in navigation" :key="idx">
            <nuxt-link class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
              :to="el.href">{{ el.name }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex flex-1 justify-end"></div>
  </div>
</template>

<script setup>
const navigation = [
  { name: "About", href: "/" },
  { name: "Blog", href: "/blog" },
];
</script>

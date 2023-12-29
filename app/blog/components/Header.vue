<template>
  <div class="py-4 flex gap-4 justify-center bg-gray-300">
    <nuxt-link v-for="(el, idx) in navigation" :key="idx" :to="el.href">{{ el.name }}</nuxt-link>
  </div>

</template>

<script setup>
const navigation = [
  { name: "About", href: "/" },
  { name: "Blog", href: "/blog" },
];
</script>

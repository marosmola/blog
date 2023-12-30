<template>
  <div v-bind:class="{ dark: dark }" class="flex min-h-screen w-full ">
    <div class="relative flex w-full flex-col dark:bg-zinc-800">
      <Header :dark="dark" @update:dark="updateDarkValue" />
      <slot />
      <Footer />
    </div>
  </div>
</template>


<script setup lang="ts">
const dark = ref<Boolean>(false)

function updateDarkValue(value: Boolean): void {
  dark.value = value;
}

onMounted(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    dark.value = true
  } else {
    dark.value = false
  }
})
</script>
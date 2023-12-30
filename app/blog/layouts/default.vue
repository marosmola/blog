<template>
  <div class="flex min-h-screen w-full">
    <div class="relative flex w-full flex-col dark:bg-zinc-800">
      <Header />
      <slot />
      <Footer />
    </div>
  </div>
</template>

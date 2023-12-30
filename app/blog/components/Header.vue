<template>
  <div class="relative mt-4 flex gap-4">
    <div class="flex flex-1"></div>
    <div class="flex flex-1 justify-end md:justify-center">
      <nav class="pointer-events-auto">
        <ul
          class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          <li v-for="(el, idx) in navigation" :key="idx">
            <nuxt-link
              class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
              :to="el.href"
              active-class="text-teal-500">
              {{ el.name }}
              <!-- only active link -->
              <span
                v-if="el.href == route.path"
                class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex flex-1 justify-end">
      <div>
        <button
          @click="switchMode"
          class="group mx-6 rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
          <svg
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            class="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600">
            <path
              d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
            <path
              d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
              fill="none"></path>
          </svg>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500">
            <path
              d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRef } from "vue"

const props = defineProps({
  dark: Boolean,
})
const emit = defineEmits(["update:dark"])
const dark = toRef(props, "dark")

const route = useRoute()

function switchMode() {
  emit("update:dark", !dark.value)
}

const navigation = [
  { name: "About", href: "/" },
  { name: "Blog", href: "/blog" },
]
</script>

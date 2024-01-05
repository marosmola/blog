<template>
  <div class="mx-auto mt-12 max-w-2xl px-6">
    <h2 class="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
      Writing on software design, software development and software
      architecture.
    </h2>
    <p class="mt-2 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
      Here, you can explore my in-depth insights on programming, leadership,
      product design, and various other topics. These thoughts are organized
      chronologically for your convenience.
    </p>

    <!-- <pre>{{ data }}</pre> -->

    <div
      class="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 dark:border-zinc-700/40">
      <div
        v-for="post in data"
        :key="post._id"
        class="flex max-w-xl flex-col items-start justify-between">
        <div class="flex items-center gap-x-4 text-xs">
          <time :datetime="post.datetime" class="text-gray-500">
            {{ post.date }}
          </time>
        </div>
        <div class="group relative">
          <h3
            class="mt-2 text-lg font-semibold leading-6 text-zinc-800 group-hover:text-gray-600 dark:text-zinc-100">
            <nuxt-link :to="post._path">
              <span class="absolute inset-0" />
              {{ post.title }}
            </nuxt-link>
          </h3>
          <p
            class="mt-3 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-zinc-400">
            {{ post.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = await queryContent('blog')
  .only(['_id', 'title', '_path', 'date', 'description'])
  .where({ draft: { $ne: true } })
  .sort({ date: -1 })
  .find()

// const { data } = await useAsyncData('navigation', () => fetchContentNavigation())
// const { data } = await useAsyncData('blog', () => {
//   queryContent('blog').find()
// })
</script>

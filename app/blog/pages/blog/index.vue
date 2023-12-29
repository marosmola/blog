<template>
  <div class="mx-auto mt-24 max-w-2xl px-6">
    <h2 class="text-3xl font-bold tracking-tight text-zinc-800">
      Writing on software design, software development and software
      architecture.
    </h2>
    <p class="mt-2 text-lg leading-8 text-zinc-600">
      Here, you can explore my in-depth insights on programming, leadership,
      product design, and various other topics. These thoughts are organized
      chronologically for your convenience.
    </p>
    <div
      class="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
      <article
        v-for="post in posts"
        :key="post.id"
        class="flex max-w-xl flex-col items-start justify-between">
        <div class="flex items-center gap-x-4 text-xs">
          <time :datetime="post.datetime" class="text-gray-500">
            {{ post.date }}
          </time>
        </div>
        <div class="group relative">
          <h3
            class="mt-3 text-lg font-semibold leading-6 text-zinc-800 group-hover:text-gray-600">
            <a :href="post.href">
              <span class="absolute inset-0" />
              {{ post.title }}
            </a>
          </h3>
          <p
            class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {{ post.description }}
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    id: 1,
    title: "Example blog post",
    href: "/blog/example",
    description:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    date: "Dec 27, 2023",
    datetime: "2023-12-27",
  },
  {
    id: 2,
    title: "Second blog post",
    href: "/blog/second",
    description:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    date: "Dec 28, 2023",
    datetime: "2023-12-28",
  },
]
</script>

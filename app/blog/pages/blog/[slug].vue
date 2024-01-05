<template>
  <div class="mt-8 max-w-2xl px-6 md:mx-auto">
    <article>
      <ContentDoc />
    </article>
  </div>
</template>

<style lang="postcss">
article {
  h1 {
    @apply pb-3 pt-6 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100;
  }

  h2, h2 > a{
    @apply pb-3 pt-6 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100;
  }

  p {
    @apply my-7 text-base text-zinc-600 dark:text-zinc-400;
  }

  ol {
    @apply list-inside list-decimal text-zinc-600 dark:text-zinc-400;
  }

  li {
    @apply my-2
  }

  strong {
    @apply text-zinc-800 dark:text-zinc-100;
  }

  pre {
    @apply my-3 block overflow-x-scroll whitespace-pre rounded-lg border border-zinc-300 bg-zinc-100 p-3 dark:bg-black;
  }

  a {
    @apply text-teal-500 dark:text-teal-400
  }
}
</style>

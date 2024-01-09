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

  h2,
  h2 > a {
    @apply pb-3 pt-6 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100;
  }

  p {
    @apply my-6 text-base text-zinc-600 dark:text-zinc-400;
  }

  ol {
    @apply list-inside list-decimal text-zinc-600 dark:text-zinc-400;
  }

  li {
    @apply my-2;
  }

  strong {
    @apply text-zinc-800 dark:text-zinc-100;
  }

  code {
    @apply rounded-md border border-zinc-300 bg-zinc-100 p-1 text-xs dark:border-zinc-700 dark:bg-zinc-900;
  }

  pre > code {
    @apply my-3 block overflow-x-auto whitespace-pre p-3 text-sm;
  }

  a {
    @apply text-teal-dark dark:text-teal-dark;
  }
}
</style>

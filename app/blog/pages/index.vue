<template>
  <div class="mx-auto mt-24 max-w-2xl px-6">
    <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
      I’m Marek. I live in Košice city, where I design innovative solutions.
    </h1>
    <div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
      <p>
        With over 5 years in software development and a recent role as an
        Architect, I've led small development teams in designing and
        implementing innovative solutions. My expertise lies in crafting
        containerized applications, mastering Docker and Kubernetes, and
        advocating for seamless DevOps practices.
      </p>
      <p>
        I specialize in: Development Practices, Messaging Architectures,
        Stateful/Stateless API Services, Streaming Applications,
        Containerization (Docker), Orchestration (Kubernetes), Machine Learning
        Operations
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "marosmola.com",
  meta: [
    {
      name: "description",
      content:
        "I’m Marek. I live in Košice city, where I design the innovatve solutions.",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
})
</script>

<script setup lang="ts">
const { data, refresh } = await useFetch('/api/count', {
  lazy: true,
})
</script>

<template>
  <div class="p-8 max-w-5xl mx-auto text-center prose dark:prose-invert">
    <NuxtLoadingIndicator />  
    <h1>Hi! This is a simple Nuxt 3 app</h1>
    <h2>Deploy Nuxt 3 app with universal rendering on Azure Static Web Apps</h2>
    <div class="space-y-4 mt-4">
      <div class="grid grid-cols-2 gap-4">
        <UCard class="not-prose">
          <template #header>
            <span class="text-xl font-bold">Server state API</span>
          </template>
          <UButton @click="refresh()" size="xl" color="gray" variant="solid">
            Click or refresh to increase server count
          </UButton>
          <p class="mt-2">Current server count: {{ data?.count }}</p>
        </UCard>
        <UCard class="not-prose">
          <template #header>
            <span class="text-xl font-bold">Server rendered content</span>
          </template>
          <UButton to="/hello" target="_blank" size="xl" color="gray" variant="solid">
              Visit API Route
          </UButton>
        </UCard>
        <h2 class="col-span-2">Learn more</h2>
        <UCard class="relative text-left hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50">
          <NuxtLink to="https://docs.microsoft.com/azure/static-web-apps/deploy-nuxtjs" target="_blank">
            <span class="absolute inset-0" />
          </NuxtLink>
          <div class="flex flex-col items-start gap-2 text-2xl">
            <UIcon name="i-simple-icons-microsoftazure" />
            <span class="font-bold">Azure Static Web Apps docs</span>
            <span class="text-base">Learn more about Azure Static Web Apps in the Microsoft Azure documentation</span>
          </div>
        </UCard>
        <UCard class="relative text-left hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50">
          <NuxtLink to="https://nuxt.com/docs" target="_blank">
            <span class="absolute inset-0" />
          </NuxtLink>
          <div class="flex flex-col items-start gap-2 text-2xl">
            <UIcon name="i-simple-icons-nuxtdotjs" />
            <span class="font-bold">Nuxt docs</span>
            <span class="text-base">Learn more about Nuxt in the Nuxt documentation</span>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<template>
  <h1>welcome to my blog</h1>
  <div>
    <p>版本:{{ runTimeConfig.version }}</p>
    <p>更新时间:{{ runTimeConfig.updateTime }}</p>
    <p>{{ JSON.stringify(data) }}</p>
  </div>
  <BlogFooter></BlogFooter>
</template>

<script setup>
const runTimeConfig = useRuntimeConfig()
const { data } = await useFetch('/api/test')
console.log(runTimeConfig.version, 'ddd');
</script>

<style>
</style>
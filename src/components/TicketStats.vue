<template>
  <div class="grid md:grid-cols-4 gap-4 mb-8">
    <div class="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
      <p class="text-slate-400 text-sm mb-2">Total Tickets</p>
      <p class="text-3xl font-bold text-white">{{ stats.total }}</p>
    </div>
    <div class="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
      <p class="text-slate-400 text-sm mb-2">Open</p>
      <p class="text-3xl font-bold text-green-400">{{ stats.open }}</p>
    </div>
    <div class="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
      <p class="text-slate-400 text-sm mb-2">In Progress</p>
      <p class="text-3xl font-bold text-blue-400">{{ stats.inProgress }}</p>
    </div>
    <div class="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
      <p class="text-slate-400 text-sm mb-2">Closed</p>
      <p class="text-3xl font-bold text-red-400">{{ stats.closed }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  stats: Object
})
</script>

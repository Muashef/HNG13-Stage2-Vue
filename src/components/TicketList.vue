<template>
  <div class="space-y-4">
    <div v-if="tickets.length === 0" class="text-center py-12">
      <p class="text-slate-400 text-lg">No tickets found. Create one to get started!</p>
    </div>

    <div
      v-for="ticket in tickets"
      :key="ticket.id"
      class="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition"
    >
      <div class="flex justify-between items-start mb-4">
        <div class="flex-1">
          <h3 class="text-lg font-semibold text-white mb-2">{{ ticket.title }}</h3>
          <p class="text-slate-400">{{ ticket.description }}</p>
        </div>
        <div class="flex gap-2">
          <button
            @click="$emit('edit-ticket', ticket)"
            class="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
          >
            Edit
          </button>
          <button
            @click="$emit('delete-ticket', ticket.id)"
            class="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm"
          >
            Delete
          </button>
        </div>
      </div>

      <div class="flex gap-4 flex-wrap">
        <span :class="['px-3 py-1 rounded-full text-sm font-semibold', getStatusColor(ticket.status)]">
          {{ ticket.status }}
        </span>
        <span :class="['px-3 py-1 rounded-full text-sm font-semibold', getPriorityColor(ticket.priority)]">
          {{ ticket.priority }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  tickets: Array
})

defineEmits(['edit-ticket', 'delete-ticket'])

const getStatusColor = (status) => {
  const colors = {
    'open': 'bg-green-900 text-green-200',
    'in-progress': 'bg-blue-900 text-blue-200',
    'closed': 'bg-red-900 text-red-200'
  }
  return colors[status] || 'bg-slate-700 text-slate-200'
}

const getPriorityColor = (priority) => {
  const colors = {
    'low': 'bg-slate-700 text-slate-200',
    'medium': 'bg-yellow-900 text-yellow-200',
    'high': 'bg-orange-900 text-orange-200'
  }
  return colors[priority] || 'bg-slate-700 text-slate-200'
}
</script>

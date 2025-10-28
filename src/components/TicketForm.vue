<template>
  <div class="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 mb-8">
    <h2 class="text-xl font-semibold text-white mb-4">Create New Ticket</h2>
    
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-slate-300 mb-2">Title</label>
          <input
            v-model="form.title"
            type="text"
            class="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition"
            placeholder="Ticket title"
          />
          <span v-if="errors.title" class="text-red-400 text-sm mt-1 block">{{ errors.title }}</span>
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-300 mb-2">Priority</label>
          <select
            v-model="form.priority"
            class="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-slate-300 mb-2">Description</label>
        <textarea
          v-model="form.description"
          class="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition"
          placeholder="Ticket description"
          rows="3"
        ></textarea>
        <span v-if="errors.description" class="text-red-400 text-sm mt-1 block">{{ errors.description }}</span>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-slate-300 mb-2">Status</label>
          <select
            v-model="form.status"
            class="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition"
          >
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        <div class="flex items-end">
          <button
            type="submit"
            class="w-full py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition font-semibold cursor-pointer"
          >
            Create Ticket
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { validateTicketTitle, validateTicketDescription } from '../utils/validation'

const emit = defineEmits(['add-ticket'])

const form = ref({
  title: '',
  description: '',
  priority: 'medium',
  status: 'open'
})

const errors = ref({})

const handleSubmit = () => {
  errors.value = {}
  
  if (!validateTicketTitle(form.value.title)) {
    errors.value.title = 'Title must be at least 3 characters'
    return
  }
  
  if (!validateTicketDescription(form.value.description)) {
    errors.value.description = 'Description must be at least 10 characters'
    return
  }

  emit('add-ticket', { ...form.value })
  form.value = { title: '', description: '', priority: 'medium', status: 'open' }
}
</script>

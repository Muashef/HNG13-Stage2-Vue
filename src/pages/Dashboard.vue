<template>
  <div class="min-h-screen bg-slate-950">
  
    <header class="bg-slate-900 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-cyan-400">TicketZen</h1>
        <button
          @click="handleLogout"
          class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition cursor-pointer"
        >
          Logout
        </button>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-6 py-8">
     
      <TicketStats :stats="stats" />

      <div class="flex gap-4 mb-8 flex-wrap">
        <button
          v-for="status in ['all', 'open', 'in-progress', 'closed']"
          :key="status"
          @click="filterStatus = status"
          :class="[
            'px-4 py-2 rounded-lg transition font-semibold',
            filterStatus === status
              ? 'bg-cyan-500 text-white'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          ]"
        >
          {{ status.charAt(0).toUpperCase() + status.slice(1) }}
        </button>
      </div>

      <TicketForm @add-ticket="addTicket" />

      <TicketList
        :tickets="filteredTickets"
        @edit-ticket="editTicket"
        @delete-ticket="deleteTicket"
      />
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import TicketForm from '../components/TicketForm.vue'
import TicketList from '../components/TicketList.vue'
import TicketStats from '../components/TicketStats.vue'
import { ticketStorage, sessionStorage } from '../utils/Storage'

const router = useRouter()
const tickets = ref([])
const filterStatus = ref('all')
const currentUser = ref(null)

onMounted(() => {
  const user = sessionStorage.getCurrentUser()
  if (!user) {
    router.push('/login')
    return
  }
  
  currentUser.value = user
  loadTickets()
})

const loadTickets = () => {
  tickets.value = ticketStorage.getUserTickets(currentUser.value.id)
}

const addTicket = (ticket) => {
  const newTicket = ticketStorage.add(ticket, currentUser.value.id)
  tickets.value.push(newTicket)
}

const editTicket = (updatedTicket) => {
  ticketStorage.update(updatedTicket.id, updatedTicket)
  const index = tickets.value.findIndex(t => t.id === updatedTicket.id)
  if (index !== -1) {
    tickets.value[index] = { ...tickets.value[index], ...updatedTicket }
  }
}

const deleteTicket = (id) => {
  ticketStorage.delete(id)
  tickets.value = tickets.value.filter(t => t.id !== id)
}

const filteredTickets = computed(() => {
  if (filterStatus.value === 'all') return tickets.value
  return tickets.value.filter(t => t.status === filterStatus.value)
})

const stats = computed(() => ({
  total: tickets.value.length,
  open: tickets.value.filter(t => t.status === 'open').length,
  inProgress: tickets.value.filter(t => t.status === 'in-progress').length,
  closed: tickets.value.filter(t => t.status === 'closed').length
}))

const handleLogout = () => {
  sessionStorage.clearCurrentUser()
  router.push('/')
}
</script>

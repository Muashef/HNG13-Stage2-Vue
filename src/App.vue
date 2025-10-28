<template>
  <div class="min-h-screen bg-slate-950">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  const user = localStorage.getItem('currentUser')
  const isAuthPage = router.currentRoute.value.path === '/login' || 
    router.currentRoute.value.path === '/signup' ||
    router.currentRoute.value.path === '/'
  
  if (!user && !isAuthPage) {
    router.push('/login')
  }
})
</script>

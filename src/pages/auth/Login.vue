<template>
  <div class="min-h-screen bg-linear-to-b from-slate-950 to-slate-900 flex items-center justify-center px-4">
    <div class="w-full max-w-md">
      <div class="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8">
         <router-link
            to="/"
            className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8 block"
          >
            TicketZen
          </router-link>
        <h1 class="text-3xl font-bold text-white mb-2">Welcome Back</h1>
        <p class="text-slate-400 mb-8">Sign in to your account to continue</p>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-300 mb-2">Email</label>
            <input
              v-model="email"
              type="email"
              class="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
              placeholder="you@example.com"
            />
            <span v-if="errors.email" class="text-red-400 text-sm mt-1 block">{{ errors.email }}</span>
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-300 mb-2">Password</label>
            <input
              v-model="password"
              type="password"
              class="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
              placeholder="••••••••"
            />
            <span v-if="errors.password" class="text-red-400 text-sm mt-1 block">{{ errors.password }}</span>
          </div>

          <button
            type="submit"
            class="w-full py-3 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 cursor-pointer disabled:opacity-50 rounded-lg font-semibold text-white transition"
          >
            Sign In
          </button>
        </form>

        <p class="text-center text-slate-400 mt-6">
          Don't have an account?
          <router-link to="/signup" class="text-cyan-400 hover:text-cyan-300 font-medium">Sign up</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { validateEmail, validatePassword } from '../../utils/Validation'
import { userStorage, sessionStorage } from '../../utils/Storage'

const router = useRouter()
const email = ref('')
const password = ref('')
const errors = ref({})

const handleLogin = () => {
  errors.value = {}
  
  if (!validateEmail(email.value)) {
    errors.value.email = 'Please enter a valid email'
    return
  }
  
  if (!validatePassword(password.value)) {
    errors.value.password = 'Password must be at least 6 characters'
    return
  }

  const user = userStorage.findByEmail(email.value)
  
  if (!user || user.password !== password.value) {
    errors.value.email = 'Invalid email or password'
    return
  }

  sessionStorage.setCurrentUser({ id: user.id, email: user.email })
  router.push('/dashboard')
}
</script>

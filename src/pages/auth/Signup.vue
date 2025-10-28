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
        <h1 class="text-3xl font-bold text-white mb-2">Create Account</h1>
        <p class="text-slate-400 mb-8">Join TicketZen and start managing tickets</p>

        <form @submit.prevent="handleSignup" class="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
              <input
                type="text"
                v-model="name"
                
                class="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
                placeholder="Your name"
              />
              <span v-if="errors.name" class="text-red-400 text-sm mt-1 block">{{ errors.name }}</span>
            </div>
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

          <div>
            <label class="block text-sm font-medium text-slate-300 mb-2">Confirm Password</label>
            <input
              v-model="confirmPassword"
              type="password"
              class="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
              placeholder="••••••••"
            />
            <span v-if="errors.confirmPassword" class="text-red-400 text-sm mt-1 block">{{ errors.confirmPassword }}</span>
          </div>

          <button
            type="submit"
            class="w-full py-3 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 rounded-lg cursor-pointer font-semibold text-white transition mt-6"
          >
            Create Account
          </button>
        </form>

        <p class="text-center text-slate-400 mt-6">
          Already have an account?
          <router-link to="/login" class="text-cyan-400 hover:text-cyan-300 font-medium cursor-pointer">Sign in</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { validateEmail, validatePassword, validateName  } from '../../utils/Validation'
import { userStorage, sessionStorage } from '../..//utils/Storage'

const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errors = ref({})

const handleSignup = () => {
  errors.value = {}

   if (!validateName(name.value)) {
    errors.value.name = 'Name must not be less 3'
    return
  }
  
  if (!validateEmail(email.value)) {
    errors.value.email = 'Please enter a valid email'
    return
  }
  
  if (!validatePassword(password.value)) {
    errors.value.password = 'Password must be at least 6 characters'
    return
  }

  if (password.value !== confirmPassword.value) {
    errors.value.confirmPassword = 'Passwords do not match'
    return
  }

  if (userStorage.findByEmail(email.value)) {
    errors.value.email = 'Email already registered'
    return
  }

  const newUser = userStorage.add({ email: email.value, password: password.value })
  sessionStorage.setCurrentUser({ id: newUser.id, email: newUser.email })
  
  router.push('/dashboard')
}
</script>

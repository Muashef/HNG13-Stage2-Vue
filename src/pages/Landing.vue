<template>
  <div class="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
   
    <div class="fixed inset-0 pointer-events-none">
      <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <defs>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </defs>
        <path d="M0,300 Q360,200 720,300 T1440,300 L1440,0 L0,0 Z" fill="rgba(6, 182, 212, 0.1)" filter="url(#blur)" />
        <path d="M0,400 Q360,350 720,400 T1440,400 L1440,900 L0,900 Z" fill="rgba(59, 130, 246, 0.05)" filter="url(#blur)" />
      </svg>
      
      <div class="absolute top-20 left-10 w-32 h-32 bg-cyan-500 rounded-full opacity-10 blur-3xl"></div>
      <div class="absolute top-40 right-20 w-40 h-40 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      <div class="absolute bottom-20 left-1/3 w-48 h-48 bg-cyan-400 rounded-full opacity-5 blur-3xl"></div>
    </div>

    <div class="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
 
      <nav class="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div class="text-2xl font-bold text-cyan-400">TicketZen</div>
        <div class="flex gap-4">
          <router-link to="/login" class="px-4 py-2 text-slate-300 hover:text-white transition cursor-pointer">Login</router-link>
          <router-link to="/signup" class="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition font-medium cursor-pointer">Sign Up</router-link>
        </div>
        </div>
      </nav>

      <div class="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        
        <div class="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Manage Your Tickets
            <br />
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Effortlessly
            </span>
          </h1>
          <p class="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
             A modern ticket management system designed for teams that value simplicity and efficiency. Track, organize,
            and resolve tickets with ease.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/signup" class="px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold text-lg transition transform hover:scale-105 cursor-pointer">
              Get Started
            </router-link>
            <router-link to="/login" class="px-8 py-4 border-2 border-slate-500 hover:border-slate-300 rounded-lg font-semibold text-lg transition cursor-pointer">
              Login
            </router-link>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose TicketFlow?</h2>
        <div className="grid md:grid-cols-3 gap-8">
        <div class="p-6 bg-slate-800/50 backdrop-blur rounded-xl border border-slate-700 hover:border-cyan-500 transition">
            <div class="text-3xl mb-4">✨</div>
            <h3 class="text-xl font-semibold text-white mb-2">Easy Management</h3>
            <p class="text-slate-400">Create, edit, and organize tickets with an intuitive interface.</p>
          </div>
          <div class="p-6 bg-slate-800/50 backdrop-blur rounded-xl border border-slate-700 hover:border-cyan-500 transition">
            <div class="text-3xl mb-4">⚡</div>
            <h3 class="text-xl font-semibold text-white mb-2">Real-time Stats</h3>
            <p class="text-slate-400">Track ticket status and get insights at a glance.</p>
          </div>
          <div class="p-6 bg-slate-800/50 backdrop-blur rounded-xl border border-slate-700 hover:border-cyan-500 transition">
            <div class="text-3xl mb-4">🔒</div>
            <h3 class="text-xl font-semibold text-white mb-2">Secure & Fast</h3>
            <p class="text-slate-400">Your data is safe and the app runs lightning fast.</p>
          </div>
        </div>
      </div>
      </div>
    </div>

      <footer className="border-t border-slate-700 py-8 px-6 text-center text-slate-400">
        <p>TicketZen - Hackathon Stage 2 | Built with Vue & Tailwind CSS</p>
      </footer>
  </div>
</template>

<script setup>
</script>

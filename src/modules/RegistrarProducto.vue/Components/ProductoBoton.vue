<template>
    <!-- From Uiverse.io by 00Kubi --> 
<button
  class="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
  @click="handleClick"
  >
  <div
    class="absolute inset-0 bg-gradient-to-br from-indigo-800  to-blue-600   rounded-full transition-all duration-300 group-hover:scale-110 animate-gradient group-hover:from-indigo-900  group-hover:to-blue-800"
  ></div>

  <div
    class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-5 transition-opacity  duration-300 bg-gray-300 blur-lg"
  ></div>

  <div class="absolute inset-0 overflow-hidden rounded-full">
    <div class="glitter-container">
      <div class="glitter"></div>
      <div class="glitter"></div>
      <div class="glitter"></div>
    </div>
  </div>

  <div class="absolute inset-0 rounded-full overflow-hidden">
    <div class="wave"></div>
  </div>

  <span class="relative z-10 flex items-center gap-2">
    <span class="tracking-wider">Click me!</span>
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      class="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M13 7l5 5m0 0l-5 5m5-5H6"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
    <span
      class="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
    ></span>
  </span>
</button>

</template>

<script setup>
const emit = defineEmits(['click'])
const handleClick = () => {
  emit('click')
}
</script>
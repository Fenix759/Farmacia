<!-- Modal.vue -->
<template>
  <div
    v-if="visible"
    class="fixed inset-0 bg-[rgba(55,65,81,0.3)] bg-opacity-70 shadow-2xl flex items-center justify-center "
    @click.self="close"
  >
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <slot></slot>
        <button @click="emitClose" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-bold">
          Cancelar
        </button>

    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'


const props = defineProps({
  visible: Boolean
})

const emit = defineEmits(['close'])

function emitClose() {
  emit('close')
}

</script>

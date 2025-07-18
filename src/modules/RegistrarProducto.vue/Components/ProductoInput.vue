<template>
  <!-- From Uiverse.io by seyed-mohsen-mousavi -->
  <div class="relative mb-4">
    <label :for="NombreProducto" class="block text-white font-bold ml-4 mb-2">{{
      NombreProducto
    }}</label>
    <input
      :class="[
        'input shadow-lg border focus:border-2 bg-white border-gray-300  px-5 py-3 rounded-xl w-full xl:w-100 md:w-80  sm:w-60  transition-all focus:xl:w-110 focus:md:w-90  focus:sm:w-70 focus:bg-white outline-none',
        inputError ? 'border-red-500 ring-red-500' : 'border-gray-300',
      ]"
      :id="InputName"
      :name="InputName"
      :placeholder="Placeholder"
      :type="TipoInput"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <label v-if="inputError" class="pt-1 pl-3 block text-red-500 font-bold">{{ props.inputError }}</label>
  </div>
</template>

<script setup>
const props = defineProps({
  NombreProducto: {
    type: String,
    default: 'Nombre de input',
  },
  TipoInput: {
    type: String,
    default: 'number',
  },
  Placeholder: {
    type: String,
    default: 'Search...',
  },
  InputName: {
    type: String,
  },
  modelValue: {
    type: [String, Number],
  },
  inputError: {
    type: [String, Number],
  },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <!-- From Uiverse.io by seyed-mohsen-mousavi -->
  <div class="relative mb-4">
    <label :for="NombreProducto" class="block text-gray-800 font-bold ml-4 mb-2 ">{{
      NombreProducto
    }}</label>
    <input
      :placeholder="props.Placeholder"
      class="input shadow-lg focus:border-2 bg-white border-gray-300 px-5 py-3 rounded-xl w-100 transition-all focus:w-115 focus:border-gray-500 focus:bg-white outline-none"
      :name="InputName"
      :type="TipoInput"
      :id="NombreProducto"
      @input="$emit('update:modelValue', $event.target.value)"
    />
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
})


</script>

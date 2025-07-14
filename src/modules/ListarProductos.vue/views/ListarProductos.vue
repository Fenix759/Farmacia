<template>
  <div class="p-6 max-w-xl mx-auto">
    <h2 class="text-xl font-semibold text-blue-700 mb-2">Productos registrados</h2>
    <ul class="space-y-2">
<li
  v-for="(Farmacia, index) in FarmaciasOrdenadas"
  :key="index"
  class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 flex justify-between items-center"
  :class="{ 'border border-blue-200': index % 2 === 0 }"
>
  <div>
    <strong class="text-blue-800">{{ Farmacia.Nombre }}</strong>
    <span class="text-gray-600"> - {{ Farmacia.Precio }}</span>
    <span class="text-green-600"> - {{ Farmacia.Cantidad }}</span>
  </div>
    <button
    @click="borrarUno(index)"
    class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
  >
    Eliminar
  </button>
</li>

    </ul>
  </div>
</template>


<script setup >
import { computed } from 'vue'
import { ProductoFarmacia } from '../../../stores/counter'


const TiendaFarmacia = ProductoFarmacia()

const FarmaciasOrdenadas = computed(() => {
  return [...TiendaFarmacia.Farmacias].sort((b, a) => {
    return Number(a.Cantidad) - Number(b.Cantidad)
  })
})

function borrarUno(index) {
  TiendaFarmacia.removeProducto(index)
}
</script>


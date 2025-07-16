<template>
  <form @submit.prevent class="flex flex-col items-center justify-cente bg-blue-100 p-15 radius rounded-2xl shadow-lg">
    <ProductoInput
      NombreProducto="Nombre de Producto"
      Placeholder="Nombre"
      InputName="Nombre"
      TipoInput="text"
      v-model="InfoFormulario.Nombre"
    />
    <ProductoInput
      NombreProducto="Precio"
      Placeholder="COP 0.00"
      InputName="Precio"
      v-model="InfoFormulario.Precio"
    />
    <ProductoInput
      NombreProducto="Cantidad en Stock"
      Placeholder="1 ,2 . . . etc"
      InputName="Cantidad"
      v-model="InfoFormulario.Cantidad"
    />
    <ProductoBoton @click="handlesubmit" />
  </form>
</template>

<script setup>
import ProductoInput from '../Components/ProductoInput.vue'
import ProductoBoton from '../Components/ProductoBoton.vue'
import { reactive } from 'vue'

import { ProductoFarmacia } from '@/stores/counter'

const ProductFarmacia = ProductoFarmacia()

const InfoFormulario = reactive({
  Nombre: '',
  Precio: '',
  Cantidad: '',
})

function handlesubmit() {
  ProductFarmacia.addProducto({ ...InfoFormulario })

  // Limpiar los campos
  Object.assign(InfoFormulario, {...InfoFormulario})
}
</script>

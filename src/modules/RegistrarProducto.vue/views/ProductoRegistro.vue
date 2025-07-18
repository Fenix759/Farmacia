<template>
  <form @submit.prevent class=" bg-gradient-to-br from-indigo-800 to-blue-500 p-10 radius rounded-2xl shadow-lg border-3 border-gray-600">
    <div class="bg-gradient-to-br from-indigo-500 to-blue-300 rounded-2xl p-10 flex flex-col items-center justify-center shadow-2xs">
    <ProductoInput
      NombreProducto="Nombre de Producto"
      Placeholder="Nombre"
      InputName="Nombre"
      TipoInput="text"
      v-model="InfoFormulario.Nombre"
      :input-error="errors.Nombre"
    />
    <ProductoInput
      NombreProducto="Precio"
      Placeholder="COP 0.00"
      InputName="Precio"
      v-model="InfoFormulario.Precio"
      :input-error="errors.Precio"
    />
    <ProductoInput
      NombreProducto="Cantidad en Stock"
      Placeholder="1 ,2 . . . etc"
      InputName="Cantidad"
      v-model="InfoFormulario.Cantidad"
      :input-error="errors.Cantidad"
    />
    <ProductoBoton class="my-5"  @click="handlesubmit" />
    <p class="text-white w-auto"> * asegurate de que los nombres de los productos no se repitan</p>
  </div>


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
  Precio: 0,
  Cantidad: 0,
})

const errors = reactive({
  Nombre: '',
  Precio: 0,
  Cantidad: 0,
})

function handlesubmit() {
    let valid = true

  if (!InfoFormulario.Nombre.trim()) {
    valid = false
    errors.Nombre = 'Nombre de producto es requerido'
  } else {
    errors.Nombre = ''
  }

  if (InfoFormulario.Precio <= 0) {
    valid = false
    errors.Precio = 'El precio debe ser mayor que 0.'
  } else {
    errors.Precio = ''
  }

  if (InfoFormulario.Cantidad <= 0) {
    valid = false
    errors.Cantidad = 'La cantidad debe ser mayor que 0.'
  } else {
    errors.Cantidad = ''
  }


  if(valid) {
  ProductFarmacia.addProducto({ ...InfoFormulario })

  // Limpiar el formulario:
  Object.assign(InfoFormulario, {
    Nombre: '',
    Precio: 0,
    Cantidad: 0,
  })
}}
</script>



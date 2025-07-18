<template>
  <div class="p-8 sm:p-25  text-left flex-non flex-row justify-around sm:flex sm:mb-3 ">
    <div>
      <h1 class="text-3xl font-bold text-blue-700 mb-4 ">
        Bienvenido al Sistema de Inventario de Farmacia
      </h1>
      <p class="text-gray-700 text-3xl">
        Administra tus productos de manera eficiente y sencilla. Desde esta plataforma puedes
        registrar, visualizar y controlar el inventario de medicamentos y productos disponibles en
        tu farmacia.
      </p>
      <p class="mt-4 text-gray-600 mb-6 text-3xl sm:mb-0">
        Utiliza los botones para comenzar a agregar productos o consultar el stock actual.
      </p>
    </div>
    <div class=" flex flex-col gap-15 ">
      <RouterLink
        to="/RegistrarProductos"
        class="rounded-md p-5  h-min text-lg bg-indigo-900 font-semibold text-gray-100 hover:bg-blue-950 hover:text-white transition-all duration-300 ease-in-out"
        >Agrega Productos</RouterLink
      >
      <RouterLink
        to="/ListarProductos"
        class="rounded-md p-5  h-min  text-lg bg-indigo-900 font-semibold text-gray-100 hover:bg-blue-950 hover:text-white transition-all duration-300 ease-in-out"
        >Revisa Tus Productos</RouterLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

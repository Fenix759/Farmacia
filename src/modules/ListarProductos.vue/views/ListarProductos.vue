<template>
  <div class="flex flex-col w-auto items-center p-4">
    <p
      class="text-xl p-3 mb-5 font-bold border-2 border-indigo-300 rounded-xl bg-sky-50 text-gray-800"
    >
      Productos registrados
    </p>
    <ul class="flex flex-row gap-3.5 flex-wrap">
      <li
        v-for="(Farmacia, index) in FarmaciasOrdenadas"
        :key="index"
        class="bg-indigo-100 shadow-md my-2 p-4 hover:shadow-lg transition-shadow duration-300 flex flex-row justify-between items-center rounded-md border-2 border-t-10 border-blue-900"
      >
        <div class="flex flex-col gap-3 w-auto m-3">
          <div class="flex flex-row flex-wrap gap-3.5">
            <div class="w-auto">
              <div class="bg-blue-800 text-white p-2 font-bold rounded-t-xl">
                Nombre de producto
              </div>
              <div>
                <p
                  class="text-blue-700 text-2xl p-2 bg-blue-50 rounded-b-xl border-t-blue-800 border-4 font-bold text-center"
                >
                  {{ Farmacia.Nombre }}
                </p>
              </div>
            </div>
            <div class="w-auto">
              <div class="bg-orange-500 text-white p-2 font-bold rounded-t-xl">
                Precio de producto
              </div>
              <div>
                <p
                  class="text-orange-400 text-2xl p-2 bg-orange-50 rounded-b-xl border-t-orange-500 border-4 font-bold text-center"
                >
                  {{ Farmacia.Precio }}
                </p>
              </div>
            </div>
            <div class="w-auto">
              <div class="bg-green-700 text-white p-2 font-bold rounded-t-xl">
                Cantidad de producto
              </div>
              <div>
                <p
                  class="text-green-600 text-2xl p-2 bg-green-50 rounded-b-xl border-t-green-700 border-4 font-bold text-center"
                >
                  {{ Farmacia.Cantidad }}
                </p>
              </div>
            </div>
          </div>
          <div>
            <!-- Borrar -->

            <button
              @click="abrirModalEliminar(Farmacia)"
              class="px-4 py-2 bg-red-600 font-bold text-white rounded hover:bg-red-700"
            >
              Eliminar
            </button>
            <Modal1
              :visible="productoAEliminar?.Nombre === Farmacia.Nombre"
              @close="cerrarModalEliminar"
            >
              <h2 class="text-xl font-bold mb-2">
                Estas seguro que deseas borrar el producto {{ Farmacia.Nombre }}
              </h2>
              <button
                @click="borrarProducto"
                class="bg-red-500 text-white px-4 py-2 font-bold rounded hover:bg-red-600 transition-colors mr-5"
              >
                Eliminar
              </button>
            </Modal1>
            <!-- actualizar -->

            <button
              @click="abrirModalCantidad(Farmacia)"
              class="px-4 py-2 ml-2 text-white bg-yellow-500 font-bold rounded hover:bg-yellow-600"
            >
              Editar Cantidad
            </button>
<Modal1 :visible="productoSeleccionado?.Nombre === Farmacia.Nombre" @close="cerrarModalCantidad">
              <h2 class="text-lg font-bold mb-3">
                Cambiar cantidad de: {{ productoSeleccionado?.Nombre }}
              </h2>
              <input
                v-model.number="nuevaCantidad"
                type="number"
                placeholder="Nueva cantidad"
                class="input shadow-lg mb-5 border focus:border-0 bg-white border-gray-100 px-5 py-3 rounded-xl w-full xl:w-90 md:w-80 sm:w-60 transition-all focus:xl:w-100 focus:md:w-90 focus:sm:w-70 focus:bg-white outline-none"
              />
              <button
                @click="guardarCantidad"
                class="bg-yellow-500 font-bold text-white px-4 py-2 mr-3 rounded hover:bg-yellow-600"
              >
                Guardar
              </button>
            </Modal1>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ProductoFarmacia } from '../../../stores/counter'
import Modal1 from '../Components/Modal1.vue'

const productoAEliminar = ref(null)
const productoSeleccionado = ref(null)
const nuevaCantidad = ref(0)

function abrirModalEliminar(producto) {
  productoAEliminar.value = producto
}

function cerrarModalEliminar() {
  productoAEliminar.value = null
}

function borrarProducto() {
  if (productoAEliminar.value) {
    TiendaFarmacia.removeProducto(productoAEliminar.value.Nombre)
    cerrarModalEliminar()
  }
}

function abrirModalCantidad(producto) {
  productoSeleccionado.value = producto
  nuevaCantidad.value = producto.Cantidad
}

function cerrarModalCantidad() {
  productoSeleccionado.value = null
  nuevaCantidad.value = 0
}

function guardarCantidad() {
  if (productoSeleccionado.value && nuevaCantidad.value > 0) {
    TiendaFarmacia.actualizarCantidadPorNombre(
      productoSeleccionado.value.Nombre,
      nuevaCantidad.value,
    )
    cerrarModalCantidad()
  }
}

const showModal = ref(false)

const TiendaFarmacia = ProductoFarmacia()

const FarmaciasOrdenadas = computed(() => {
  return [...TiendaFarmacia.Farmacias].sort((a, b) => {
    return Number(a.Cantidad) - Number(b.Cantidad)
  })
})

function borrarUno(Nombre) {
  TiendaFarmacia.removeProducto(Nombre)
}
</script>

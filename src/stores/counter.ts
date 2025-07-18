import { defineStore } from 'pinia'

const ProductoFarmacia = defineStore('Farmacia', {
  state: () => ({
    Farmacias: [] as any[],
  }),
  actions: {
    addProducto(Farmacia: any) {
      this.Farmacias.push(Farmacia)
    },
    removeProducto(Nombre: string) {
      const index = this.Farmacias.findIndex((f) => f.Nombre === Nombre)
      if (index !== -1) {
        this.Farmacias.splice(index, 1)
      }
    },
    ConfCantidad(Cantidad: number) {
      this.Farmacias.push(Cantidad)
    },
    actualizarCantidadPorNombre(nombreProducto: string, nuevaCantidad: number) {
      const producto = this.Farmacias.find((p) => p.Nombre === nombreProducto)
      if (producto) {
        producto.Cantidad = nuevaCantidad
      }
    },
  },
})

export { ProductoFarmacia }

import { defineStore } from 'pinia'

const ProductoFarmacia = defineStore('Farmacia', {
  state: () => ({
    Farmacias: [] as any[],
  }),
  actions: {
    addProducto(Farmacia: any){
      this.Farmacias.push(Farmacia)
    },
    removeProducto(index: any){
    this.Farmacias.splice(index)
  }
  }
})

export { ProductoFarmacia }


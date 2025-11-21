class CarritoCompra{
    constructor(){
        this.carrito = []
    }

    agregarProductos(producto){
        this.carrito.push(producto)
        return 'producto agregado con exito'
    }

    calcularTotal(){
        return this.carrito.reduce( (acum, producto) => {
            return acum = acum + producto.precio
        },0)
    }

    aplicarDescuento(porcentaje){
        const precioTotal = this.calcularTotal()
        return precioTotal - ( precioTotal * porcentaje ) / 100
    }
}

module.exports = {
    CarritoCompra
}
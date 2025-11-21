const { CarritoCompra } = require("../index.js")

describe("Class CarritoCompra", ()=> {
    it("debe existir", () => {
        expect(CarritoCompra).toBeDefined()
        expect(CarritoCompra).toBeInstanceOf(Function)
    })

    it("debe poder crear nuevas instancias", () => {
        const newCarrito = new CarritoCompra()
        expect(newCarrito).toBeInstanceOf(CarritoCompra)
    })

    it("debe tener los siguientes metodos: agregarProductos, calcularTotal, aplicarDescuento", () => {        
        expect(CarritoCompra.prototype.constructor).toBeDefined()
        expect(CarritoCompra.prototype.agregarProductos).toBeDefined()
        expect(CarritoCompra.prototype.calcularTotal).toBeDefined()
        expect(CarritoCompra.prototype.aplicarDescuento).toBeDefined()
    })
})


describe("Constructor", () => {
    it("Inicializa el carrito como un array vacío", () =>{
        const newCarrito = new CarritoCompra()
        expect(newCarrito.carrito).toEqual([])
    })
})

describe("agregarProducto", () => {
    it("Recibe un objeto representando un producto y lo agrega al carrito.", () =>{
        const newCarrito = new CarritoCompra()
        const producto = {
            nombre: 'producto 1',
            precio: 10
        }
        expect(newCarrito.agregarProductos(producto)).toBe('producto agregado con exito')
        expect(newCarrito.carrito).toEqual([producto])
        expect(newCarrito.carrito[0]).toEqual(producto)
        expect(newCarrito.carrito[0].nombre).toBe('producto 1')
    })
})

describe("calcularTotal", () => {
    it("Calcula el total de la compra sumando los precios de todos los productos en el carrito", () => {
        const newCarrito = new CarritoCompra()
        const arrayProductos = [
            {
                nombre: 'producto 1',
                precio: 10
            },
            {
                nombre: 'producto 2',
                precio: 20
            },
            {
                nombre: 'producto 3',
                precio: 30
            },
            {
                nombre: 'producto 4',
                precio: 40
            }
        ]
        arrayProductos.forEach( producto => newCarrito.agregarProductos(producto))

        expect(newCarrito.calcularTotal()).toBe(100)
    })
})

describe("aplicarDescuento", () => {
    it("Aplica un descuento al total de la compra según el porcentaje especificado", () => {
        const newCarrito = new CarritoCompra()
        const arrayProductos = [
            {
                nombre: 'producto 1',
                precio: 10
            },
            {
                nombre: 'producto 2',
                precio: 20
            },
            {
                nombre: 'producto 3',
                precio: 30
            },
            {
                nombre: 'producto 4',
                precio: 40
            }
        ]
        arrayProductos.forEach( producto => newCarrito.agregarProductos(producto))

        expect(newCarrito.aplicarDescuento(0)).toBe(100)
        expect(newCarrito.aplicarDescuento(10)).toBe(90)
        expect(newCarrito.aplicarDescuento(50)).toBe(50)
        expect(newCarrito.aplicarDescuento(100)).toBe(0)
    })
})
//Objetos
function Camiseta(id, descripcion, precio) {
    this.id = id;
    this.descripcion = descripcion;
    this.precio = precio;
}
let camisetaBj = new Camiseta(1, "Camiseta Titular de Boca Juniors", 3150)
let CamisetaBj2 = new Camiseta(2, "Camiseta Suplente de Boca Juniors", 2850)
let CamisetaRp = new Camiseta(3, "Camiseta Titular de River Plate", 2900)
let CamisetaRc = new Camiseta(4, "Camiseta Titular de Rosario Central", 1550)
let CamisetaN = new Camiseta(5, "Camiseta Titular de Newells Old Boys", 2100)

//Array
const productos = [camisetaBj, CamisetaBj2, CamisetaRp, CamisetaRc, CamisetaN];
//Array Vacío "Carrtio de compras" para la incorporación de productos seleccionados
let carritoDeCompras = [];

alert("Bienvenido! A continuación le mostraremos la lista de productos disponibles!")
let mostrarProductosDisponibles = productos.map(
    (producto) => `
        ID: ${producto.id}
        ${producto.descripcion},
        Precio:${"$" + producto.precio}
        `)
alert(mostrarProductosDisponibles)


agregarProductosSelecionados();
function agregarProductosSelecionados(productoSeleccionado) {
    for (let i = 0; i < productos.length; i++) {
        let productoSeleccionado = parseInt(prompt("Ingrese el ID del produto que desea agregar a su carrito:"));
        let seleccion = prompt("Desea comprar otro producto?")

        if (productoSeleccionado == 1) {
            const cantidad = parseInt((prompt(`Ha seleccionado: 
                ${camisetaBj.descripcion}\n
                Precio: ${camisetaBj.precio}\n
                Ingrese la cantidad que desea comprar`)))
            carritoDeCompras.push({
                camisetaBj: camisetaBj.descripcion,
                cantidad: cantidad,
                precioTotal: cantidad * camisetaBj.precio
            });
            if (seleccion == "si") {
                productoSeleccionado
            } else if (seleccion == "no") {
                break;
            }
        }
        else if (productoSeleccionado == 2) {
            const cantidad = parseInt((prompt(`Ha seleccionado: 
                ${CamisetaBj2.descripcion}\n
                Precio: ${CamisetaBj2.precio}\n
                Ingrese la cantidad que desea comprar`)))
            carritoDeCompras.push({
                CamisetaBj2: CamisetaBj2.descripcion,
                cantidad: cantidad,
                precioTotal: cantidad * CamisetaBj2.precio
            });
            if (seleccion == "si") {
                productoSeleccionado
            } else if (seleccion == "no") {
                break;
            }
        } else if (productoSeleccionado == 3) {
            const cantidad = parseInt((prompt(`Ha seleccionado: 
                ${CamisetaRp.descripcion}\n
                Precio: ${CamisetaRp.precio}\n
                Ingrese la cantidad que desea comprar`)))
            carritoDeCompras.push({
                CamisetaRp: CamisetaRp.descripcion,
                cantidad: cantidad,
                precioTotal: cantidad * CamisetaRp.precio
            });
            if (seleccion == "si") {
                productoSeleccionado
            } else if (seleccion == "no") {
                break;
            }
        } else if (productoSeleccionado == 4) {
            const cantidad = parseInt((prompt(`Ha seleccionado: 
            ${CamisetaRc.descripcion}\n
            Precio: ${CamisetaRc.precio}\n
            Ingrese la cantidad que desea comprar`)))
            carritoDeCompras.push({
                CamisetaRc: CamisetaRc.descripcion,
                cantidad: cantidad,
                precioTotal: cantidad * CamisetaRc.precio
            });
            if (seleccion == "si") {
                productoSeleccionado
            } else if (seleccion == "no") {
                break;
            }
        } else if (productoSeleccionado == 5) {
            const cantidad = parseInt((prompt(`Ha seleccionado: 
            ${CamisetaN.descripcion}\n
            Precio: ${CamisetaN.precio}\n
            Ingrese la cantidad que desea comprar`)))
            carritoDeCompras.push({
                CamisetaN: CamisetaN.descripcion,
                cantidad: cantidad,
                precioTotal: cantidad * CamisetaN.precio
            });
            if (seleccion == "si") {
                productoSeleccionado
            } else if (seleccion == "no") {
                break;
            }
        } else {
            alert("Producto no encontrado. Ingrese un ID válido")
        }
    }
}
console.log(carritoDeCompras)
const total = carritoDeCompras.reduce((acc, item)=>{
    return acc + item.precioTotal;
},0);
    

console.log(`El total a pagar por su compra es: ${total}`)

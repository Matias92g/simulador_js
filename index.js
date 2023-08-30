
// Función
function precioTotal() {
    const cantidadProducto = parseInt(prompt("Ingrese la cantidad de productos que desea compar"))
// Ciclo 
    for (let i = 1; i <= cantidadProducto; i++) {
        const precioProducto = parseInt(prompt(`Ingrese el precio del producto ${i}:`));
        //condicionales
        if (precioProducto>=3000) {
            (alert("El costo total del producto es: " + precioProducto + " " + "y el envío es GRATIS!!!"))
        }
        else if (precioProducto > 2500 && precioProducto < 3000) {
            alert("El costo total del producto es: $" + (precioProducto + 100))
        }
        else if (precioProducto > 2000 && precioProducto <= 2500) {
            alert("El costo total del producto es: $" + (precioProducto + 120))
        }
        else if (precioProducto > 1500 && precioProducto <= 2000) {
            alert("El costo total del producto es: $" + (precioProducto + 150))
        }
        else if (precioProducto > 1000 && precioProducto <= 1500) {
            alert("El costo total del producto es: $" + (precioProducto + 150))
        }
        else if(precioProducto <= 1000) {
            alert("El costo total del producto es: $" + (precioProducto + 200))
        }
    }
}
precioTotal()

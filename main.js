// CASO ECOMMERCE
// Generen con un función constructora o class constructor 5 objeto relativos a productos.
// Este objeto tiene uqe tener los siguientes propiedades:
// - nombre, precio, cantidad, categoria, id.
// Estos objetos deben ser pusheados a un array vacío que se llame productos
// al tener la data de nuestros productos, se debe hacer uso de un método de array que ordene a los elementos por su nombre (sort).
// luego debemos mandar un prompt, que se aloje en una variable, que le pregunte al usuario qué quiere comprar.
// debemos usar un método de array que busque a ese elemento, que tome su valor de nombre y precio y que mande un
// alerta al usuario, diciéndole que el producto ya está preparado para ir a su domicilio, que salio x dinero y agradecer por su combra.

function Producto(id, nombre, precio, cantidad, categoria) {
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.cantidad = cantidad;
  this.categoria = categoria;
}

const productos = [];

productos.push(new Producto(1, "proteina", 10000, 15, "suplementos"));
productos.push(new Producto(2, "creatina", 7000, 15, "suplementos"));
productos.push(new Producto(3, "quemadores", 5000, 15, "suplementos"));
productos.push(new Producto(4, "straps", 7000, 8, "indumentaria"));
productos.push(new Producto(5, "cinturon", 6600, 10, "indumentaria"));

productos.sort((a, b) => a.nombre.localeCompare(b.nombre));

const productoSeleccionado = prompt("¿Qué producto deseas comprar?");

const productoEncontrado = productos.find(
  (producto) => producto.nombre === productoSeleccionado
);

if (productoEncontrado) {
  const costoTotal = productoEncontrado.precio;

  const mensaje = `El producto "${productoEncontrado.nombre}" está listo para ser despachado. 
    El costo total es $${costoTotal}. ¡Gracias por Confiar en nosotros!`;

  alert(mensaje);
} else {
  alert("Lo sientimos, el producto que busca no esta displonible.");
}

// CASO ECOMMERCE
// Generen con un función constructora o class constructor 5 objeto relativos a productos.
// Este objeto tiene uqe tener los siguientes propiedades:
// - nombre, precio, cantidad, categoria, id.
// Estos objetos deben ser pusheados a un array vacío que se llame productos
// al tener la data de nuestros productos, se debe hacer uso de un método de array que ordene a los elementos por su nombre (sort).
// luego debemos mandar un prompt, que se aloje en una variable, que le pregunte al usuario qué quiere comprar.
// debemos usar un método de array que busque a ese elemento, que tome su valor de nombre y precio y que mande un
// alerta al usuario, diciéndole que el producto ya está preparado para ir a su domicilio, que salio x dinero y agradecer por su combra.

class producto {
  constructor(id, nombre, precio, cantiadad, categoria) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantiadad = cantiadad;
    this.categoria = categoria;
  }
}

const producto = [];

const producto1 = new producto(1, "proteina", 10000, 20, "suplementos");
const producto2 = new producto(2, "creatina", 8200, 20, "suplementos");
const producto3 = new producto(3, "quemadores", 5000, 20, "suplementos");
const producto4 = new producto(4, "straps", 5000, 10, "accesorios");
const producto5 = new producto(5, "cinturon", 7900, 15, "accesorios");

producto.push(producto1, producto2, producto3, producto4, producto5);

producto.sort((a, b) => a.nombre.localecompare(b.nombre));

const productoSeleccionado = prompt(
  "¿Qué producto estas buscando? Ingrese el Nombre del Producto:"
);

const productoEncontrado = producto.find(
  (producto) => preducto.nombre === productoSeleccionado
);

if (productoEncontrado) {
  const precioTotal = productoEncontrado.precio.toFixed(2);
  alert(
    `¡El producto "${productoEncontrado.nombre}" está Listo para ser despachado!\n\n` +
      `Precio: ${precioTotal}\n` +
      `Cantidad disponible: ${productoEncontrado.cantiadad}\n\n` +
      "¡Gracias por su Compra que la disfrute!"
  );
} else {
  alert(
    "producto no Encontrado, Por Favor verifique su nombre e reintente de nuevo."
  );
}

const productos = 
[ 
{ id: 1, nombre: "Laptop Lenovo", categoria: "Computadores", precio: 2500000, stock: 5 }, { id: 2, nombre: "Mouse Logitech", categoria: "Accesorios", precio: 85000, stock: 15 }, { id: 3, nombre: "Teclado Logitech", categoria: "Accesorios", precio: 120000, stock: 8 }, { id: 4, nombre: "Monitor Samsung", categoria: "Monitores", precio: 950000, stock: 4 }, { id: 5, nombre: "Laptop HP", categoria: "Computadores", precio: 3200000, stock: 0 }, { id: 6, nombre: "Monitor LG", categoria: "Monitores", precio: 1100000, stock: 3 }, { id: 7, nombre: "Webcam Logitech", categoria: "Accesorios", precio: 180000, stock: 10 }, { id: 8, nombre: "Laptop Asus", categoria: "Computadores", precio: 2800000, stock: 2 } 
];


function obtenerProductosAgotados(){
    return productos.filter(producto => producto.stock === 0);
}
const agotados = obtenerProductosAgotados(productos);
console.log(agotados);


function obtenerProductosStockBajo(productos){
    return productos.filter(bajo => bajo.stock < 3);
}

const bajoStock = obtenerProductosStockBajo(productos);
console.log(bajoStock);



function calcularValorInventario(){
    return productos.reduce((acumulador, producto) => {
        return acumulador + (producto.precio * producto.stock);
    }, 0)
}

const ValorInventario = calcularValorInventario();
console.log(ValorInventario);



function obtenerNombresProductos(){
  return productos.map(producto => {
    return producto.nombre
  })
}


const nombreProducto = obtenerNombresProductos();
console.log(nombreProducto);


function contarProductos(){
    return productos.length;
}

const totalProductos = contarProductos();
console.log(totalProductos);


const productos=[
    {id:1,titulo:"Barra de cereal con frutos rojos", categoria: "Barras de cereal", precio:200, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vYOc76x5zdUr40ug65HN9jN4b80Ztt0GXZzNrrf9Q9cVULcSA8TFTH6yOcfvYTniTjI&usqp=CAU', stock: 1, preciodescuento:150, cantidad:0},
    {id:2,titulo:"Barra de cereal con chocolate", categoria: "Barras de cereal", precio:200, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp9xgaV1QL6-SF9JqsR9yYMMtJ75giGvgKcA&usqp=CAU', stock:3, preciodescuento:150, cantidad:0},
    {id:3,titulo:"Bolsa de granola con chocolate", categoria: "Granola", precio:575, imagen: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/01/granolachocolate.jpg', stock:0, preciodescuento:500, cantidad:0},
    {id:4,titulo:"Bolsa de granola con frutos rojos", categoria: "Granola", precio:575, imagen: 'https://www.splenda.com/wp-content/themes/bistrotheme/assets/recipe-images/vanilla-cranberry-granola.jpg', stock:10, preciodescuento:500, cantidad:0},
    {id:5,titulo:"Caja de barras de cereal con chocolate x12", categoria: "Barras de cereal", precio:2000, imagen: 'https://i.pinimg.com/originals/17/2b/7a/172b7a668ab53cd5fbea48f60e6e151c.png', stock:5, preciodescuento:1750, cantidad:0},
    {id:6,titulo:"Caja de barras de cereal con frutos rojos x12", categoria: "Barras de cereal", precio:2000, imagen: 'https://i.pinimg.com/originals/17/2b/7a/172b7a668ab53cd5fbea48f60e6e151c.png', stock:1, preciodescuento:1750, cantidad:0},
]


const agregarAlCarrito = (idProducto) => {
    const valorDeCantidad = document.getElementById(`cantidad-${idProducto}`).value;

// Buscando el producto a agregar
    const productoAgregado = productos.find(producto => producto.id === idProducto);
    productoAgregado.cantidad = valorDeCantidad;
   
//  Actualizando el storage del carrito  
    carrito.push(productoAgregado);
    localStorage.setItem("carrito", JSON.stringify(carrito));

// Actualizando el html
    document.getElementById("cantidad-prod").innerHTML=carrito.length;

// Mensaje alert
    swal({
        title: `Producto agregado!`,
        text: `Agregaste ${productoAgregado.titulo} al carrito`,
        icon: `success`,
        button: `Seguir comprando`,
    });

// Actualizar stock
    productoAgregado.stock--;
    console.log(productoAgregado.stock);
    // VER COMO HACER PARA QUE NO TE DEJE AGREGAR PRODUCTOS CUANDO NO ESTAN EN STOCK

    generarCards(productos);
};



const irAlProducto = (idProducto) => {
  
    // Buscando el producto a agregar
    const productoQueQuiereVer = productos.find(producto => producto.id === idProducto);
    // productoAgregado.cantidad = valorDeCantidad;
   
    localStorage.setItem("productoAVer", JSON.stringify(productoQueQuiereVer));
};


generarCards(productos);

function generarCards(productosAMostrar){
    let acumuladorDeCards = ``;
    productosAMostrar.forEach((elementoDelArray) => {
        acumuladorDeCards += `<div class="col mb-5">
        <div class="card h-100">
            <!-- Sale badge-->
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
                ${(elementoDelArray.stock > 0) ? 'Esta en venta' : 'Out of stock'}
            </div>
            <!-- Product image-->
            <img class="card-img-top" src="${elementoDelArray.imagen}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${elementoDelArray.titulo}</h5>
                    <!-- Product price-->
                    <span class="text-muted text-decoration-line-through">$${elementoDelArray.precio}</span>
                    $${elementoDelArray.preciodescuento}
                </div>              
            </div>
            <div class="cantidadDeItems">
            <input type="number" value="1" min="1" id="cantidad-${elementoDelArray.id}" placeholder="cantidad">
            </div>
           <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                    <button onclick="agregarAlCarrito(${elementoDelArray.id})" class="btn btn-outline-dark mt-auto" href="#">
                    Agregar al carrito
                    </button>

                    <a onclick="irAlProducto(${elementoDelArray.id})" class="btn btn-outline-dark mt-auto" href="./pages/detalle.html">
                    Ver Producto
                    </a>
                </div>
            </div>
        </div>
    </div>`;
    });
    mostrarCardsEnElHTML(acumuladorDeCards);
}

function mostrarCardsEnElHTML(cards) {
    document.getElementById("listado-productos").innerHTML = cards;
};


function buscarProducto() {
    const nombreProductoBuscado = document.getElementById("producto-buscado").value.toUpperCase().trim();

    const productosEncontrados = productos.filter((producto) => {
        return producto.titulo.toUpperCase().match(nombreProductoBuscado);
    });

    generarCards(productosEncontrados);
}



function tomarValor(){
    const input = document.getElementById("texto-prueba").value;
    console.log(input);
}














// // DESAFIO 1
// // let texto = prompt("Ingresa una palabra");
// // let acumulador="";

// // while(texto!="esc"){
// //     alert(texto);

// //     acumulador +=texto + " ";

// //     texto=prompt("Ingresa otra palabra");
// // }


// // alert(acumulador);
// // document.write(acumulador);



// function validarStock(stockProducto,cantidadPedida){
//     if(stockProducto>cantidadPedida){
//         console.log("Hay stock");
//     }
//     else{
//        console.log("No hay stock");
//     }
// }


// function valorTotal(valorProducto1, valorProducto2){
//     let resultado = valorProducto1+valorProducto2;
//     console.log(resultado)
// }


// const carrito=[];


// const producto= new product("botas", 700,"zapatos");
// const producto2= new product("vestido", 500,"ropa");
// const producto3= new product("remera", 200,"ropa");


// function product (titulo,precio,categoria){
//     this.titulo=titulo;
//     this.precio=precio;
//     this.categoria=categoria;
// }

// function agregarAlCarrito(elemento){
//     const textoAMostrar = "Agregas al carrito " + elemento.titulo + " a $ " + elemento.precio;
//     carrito.push(elemento);
//     console.log(textoAMostrar);
//     console.log(carrito);
// }

// function eliminarDelCarrito(elemento){
//     const textoAMostrar2 = "Eliminaste del carrito " + elemento.titulo ;
//     const indice= carrito.indexOf(elemento);
//     carrito.splice(indice,1);
//     console.log(textoAMostrar2);
//     console.log(carrito);
// }




// const productos=[
//     {id:1,titulo:"Barra de cereal con chocolate", categoria: "Barras de cereal", precio:200},
//     {id:2,titulo:"Barra de cereal con frutos rojos", categoria: "Barras de cereal", precio:200},
//     {id:3,titulo:"Bolsa de granola con chocolate", categoria: "Granola", precio:575},
//     {id:4,titulo:"Bolsa de granola con frutos rojos", categoria: "Granola", precio:575},
//     {id:5,titulo:"Caja de barras de cereal con chocolate x12", categoria: "Barras de cereal", precio:2000},
//     {id:6,titulo:"Caja de barras de cereal con frutos rojos x12", categoria: "Barras de cereal", precio:2000},
// ]


// // PARA FILTRAR
// let valorFiltrado = prompt("Filtrar productos con precio mayor a (Ingresar numero)")
// const productosDeMayorPrecio = productos.filter((producto) => producto.precio>valorFiltrado);
// console.log(productosDeMayorPrecio);


// // PARA USAR COMO BUSCADOR
// const valorDelBuscador ="Barra de cereal con chocolate"
// const productoEncontrado = productos.find(
// (producto) => producto.titulo.toUpperCase().trim() === valorDelBuscador.toUpperCase().trim());
// console.log(productoEncontrado);
   

// // Acceder a los nodos
// let listadoProductos = document.getElementsByClassName("listadoProductos");

// for (const prod of listadoProductos){
//     console.log (prod.innerHTML);
// }


// // Creando elementos desde objetos
// for (const item of productos){
//     let contenedor = document.createElement("div");
//     contenedor.innerHTML=`    
//     <div class="card" style="width: 18rem;">
//     <img src="..." class="card-img-top" alt="...">
//     <div class="card-body">
//         <h5 class="card-title">${item.titulo}</h5>
//         <p class="card-text"> ID: ${item.id} <b>  Precio: $ ${item.precio}</b> </p>
//         <a href="#" class="btn btn-primary">Agregar al carrito</a>
//     </div>
//     </div>`

//     document.body.appendChild(contenedor);
// }





















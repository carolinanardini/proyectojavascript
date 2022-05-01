
let carrito=[];

if(localStorage.getItem("carrito")==null){
    carrito = [];
}else{
    const carritoStorage=JSON.parse(localStorage.getItem("carrito"));
    carrito = carritoStorage;
}

document.getElementById("cantidad-prod").innerHTML = carrito.length;
//  VER COMO SUMAR LA CANTIDAD TOTAL DE PRODUCTOS AL CARRITO, NO SOLO UNO POR PRODUCTO

const productoAVer = JSON.parse(localStorage.getItem("productoAVer"))
document.getElementById("cardContainer").innerHTML = `
<div class="row gx-4 gx-lg-5 align-items-center">
    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="${productoAVer.imagen}" alt="..." /></div>
    <div class="col-md-6">
        <div class="small mb-1">SKU: BST-498</div>
        <h1 class="display-5 fw-bolder">${productoAVer.titulo}</h1>
        <div class="fs-5 mb-5">
            <span class="text-decoration-line-through">$45.00</span>
            <span>$40.00</span>
        </div>
        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
        <div class="d-flex">
            <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style="max-width: 3rem" />
            <button class="btn btn-outline-dark flex-shrink-0" type="button">
                <i class="bi-cart-fill me-1"></i>
                Add to cart
            </button>
        </div>
    </div>
</div>`

generarCarrito(carrito);
function generarCarrito(productosAComprar){
    const carrito=JSON.parse(localStorage.getItem("carrito")) || [ ];

    let acumuladorDeCarrito = ``;
    productosAComprar.forEach((elemento) => {
        acumuladorDeCarrito += `<div class="col mb-5">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="${elemento.imagen}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${elemento.titulo}</h5>
                    <!-- Product price-->
                    <span class="text-muted text-decoration-line-through">$${elemento.precio}</span>
                    $${elemento.preciodescuento}
                </div>              
            </div>
            <div class="cantidadDeItems">
            <input type="number" value="1" min="1" id="cantidad-${elemento.id}" placeholder="cantidad">
            </div>
           <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                    <button onclick="agregarAlCarrito(${elemento.id})" class="btn btn-outline-dark mt-auto" href="#">
                    Eliminar del carrito
                    </button>
                </div>
            </div>
        </div>
    </div>`;
    });
   
    mostrarCarritoEnElHTML(acumuladorDeCarrito); 
}

function mostrarCarritoEnElHTML(cartas) {
    document.getElementById("cartCardsContainer").innerHTML = cartas;
};



// // event listener
// const removeButton=document.getElementsByClassName('removeFromCartPage');


// showCart();
// function showCart() {
//     const carrito=JSON.parse(localStorage.getItem("carrito")) || [];
//     let cardsHTML = "";
//     for (i = 0; i < carrito.length; i++) {
//         cardsHTML += `<div id="${carrito[i].id}" class="cartCard">
//         <div class="cartImg">
//             <img src=${carrito[i].imagen} alt=${carrito[i].titulo}>
//         </div>
//         <h5 class="cartProductName">${carrito[i].titulo}</h5>
//         <h5 class="cartProductPrice">$ ${carrito[i].precio}</h5>
//         <button type="button" class=" removeFromCartPage btn-close" id="${carrito[i].id}removeButton" aria-label="Close"></button>
//     </div>`
//     }

//     mostrarCarritoEnElHTML(cardsHTML);

// }

// function mostrarCarritoEnElHTML(cards) {
//     document.getElementById("cartCardsContainer").innerHTML = cards;
// };
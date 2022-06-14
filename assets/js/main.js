/*"use strict"

console.log(`inicio de e commerce`)

let fragment = new DocumentFragment()
let stock = document.querySelector(".stock")


stock.textContent = `Stock: 0 `

console.log(stock);
*/

const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'https://academlo-store.netlify.app/assets/img/featured1.png',
      category: 'hoodies',
      stock: 10,
      quantity: 0
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'https://academlo-store.netlify.app/assets/img/featured2.png',
      category: 'shirts',
      stock: 15,
      quantity: 0
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'https://academlo-store.netlify.app/assets/img/featured3.png',
      category: 'sweatshirts',
      stock: 20,
      quantity: 0
    },
    {
      id: 4,
      name: 'Sweatshirts',
      price: 30.00,
      image: 'https://academlo-store.netlify.app/assets/img/featured3.png',
      category: 'sweatshirts',
      stock: 10,
      quantity: 0
    }
]



if( !localStorage.hasOwnProperty('items') ){
    console.log('no existe items')
    localStorage.setItem("items",JSON.stringify(items))
} else { console.log('YA EXISTE items en storage')}



if( !localStorage.hasOwnProperty('Qt') ){
    console.log('no existe Qt')
    let Qt = 0
    localStorage.setItem('Qt',JSON.stringify(Qt))
}else { console.log('YA EXISTE Qt en storage')}



let Cart = JSON.parse(localStorage.getItem('items'))

let fragmentHTML = ""
let seccionCards = document.getElementById('seccionCards')
for(i=0; i < Cart.length ;i++){
    fragmentHTML+= `
    <div class="card-item">
    <div class="imagen-item">
    <img src="${Cart[i].image}" alt="">
    </div>
        <button class="btn-add" id="${Cart[i].id}">+</button>
        <div class="contenedor-precio">
        <h3 class="precio-item">$${Cart[i].price}.00</h3>
        <small class="stock">Stock: ${Cart[i].stock}</small>
        <h3 class="type-item">${Cart[i].category}</h3>
        </div>
        </div>
        `   
    }
    seccionCards.innerHTML = fragmentHTML
    fragmentHTML=""
    

    
    
    let DarkMode = document.querySelector(".DarkMode > img")
    let img  = document.querySelector(".DarkMode > img")
    let body = document.querySelector("body")
    let logodiv = document.querySelector(".logo-academlo > div")
    let nav = document.querySelector("nav")
    let btnShopping = document.querySelector(".btn-shopping")
    let btnMenu  = document.querySelector(".btn-Menu")  
    let btnCloseMenu = document.querySelector('.btn-close-menu')
    let contenedorMenu = document.querySelector('.contenedor-menu')
    let btnClose = document.querySelector(".btn-close-tienda")
    let contenedorTienda = document.querySelector(".contenedor-tienda")
    let labelContCart = document.querySelector('.contador-general-cart')
    let contenedorInfoTienda = document.querySelector('.contenedor-info-tienda')
    let btnsAdd = document.querySelectorAll('.btn-add')
    let precioTotal = document.getElementById('precio-total')
    let itemsTotal = document.getElementById('items-total')
    let btnCheckout = document.getElementById('btn-checkout')
    let contdark = 0
    let cont=0

    let Qt = JSON.parse(localStorage.getItem('Qt'))
    labelContCart.textContent = Qt
    
if( Qt < 1){
    console.log('contadorGeneral Qt esta en', Qt);
    fragmentHTML+= `
    <div class="img-vacio-tienda">
    <img src="./assets/images/empty-cart.png" alt="">
    </div>
    <div class="info-cart">
    <h2>Your cart is empty</h2>
    <p>You can add items to your cart by clicking on the '+' button on the product page.</p>
</div>`
contenedorInfoTienda.innerHTML = fragmentHTML
fragmentHTML=''
}else{
    for(let item of Cart){
        if(item.quantity > 0){
            console.log('ENTRA A IF DE QUANTITY VALOR ITEM.QUANTITY', item.quantity);
            fragmentHTML+= `        
            <div class="info-producto-tienda">       
                <div class="contenedor-img-producto">
                    <img class="img-producto" src="${item.image}" alt="">
                </div>
                <span>${item.name}</span>
                <span>${item.category}</span>
                <span>$${item.price}.00</span>
                <span>${item.quantity}</span>
                <div class="btn-producto-qty">
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
            `
        } 
        console.log(fragmentHTML)
    }

    contenedorInfoTienda.innerHTML = fragmentHTML        
    fragmentHTML=''

    let Qt=0
    let Pt = 0
    for( let element of Cart){
        Qt += element.quantity
        Pt += (element.quantity * element.price)
    }
    
    itemsTotal.textContent = `${Qt} items`
    precioTotal.textContent = `Total $ ${Pt}.00`
    labelContCart.textContent = Qt
}




    //--CONTADOR TIENDA Y PUBLICACON ELEMENTOS EN TIENDA
btnsAdd.forEach(item => {
    item.addEventListener('click', event => {
   
    

    let IdEvento = parseInt(event.target.id)    
    for(let element of Cart){
        if( element.id === IdEvento ){
            element.quantity++
            //element.stock--
            console.log('entre al aumento de quantity', element.quantity)
        }
    }


    contenedorInfoTienda.innerHTML=''     
    fragmentHTML+= `
            <div class="contenedor-labels-productos">
                <span class="Price">Price</span>
                <span class="Qty">Qty</span>
            </div>`

    for(let item of Cart){
        if(item.quantity > 0){
            console.log('ENTRA A IF DE QUANTITY VALOR ITEM.QUANTITY', item.quantity);
            fragmentHTML+= `        
            <div class="info-producto-tienda">       
                <div class="contenedor-img-producto">
                    <img class="img-producto" src="${item.image}" alt="">
                </div>
                <span>${item.name}</span>
                <span>${item.category}</span>
                <span>$${item.price}.00</span>
                <span>${item.quantity}</span>
                <div class="btn-producto-qty">
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
            `
        } 
        console.log(fragmentHTML)
    }

    contenedorInfoTienda.innerHTML = fragmentHTML        
    fragmentHTML=''
    
    let Qt=0
    let Pt = 0
    for( let element of Cart){
        Qt += element.quantity
        Pt += (element.quantity * element.price)
    }
   
    itemsTotal.textContent = `${Qt} items`
    precioTotal.textContent = `Total $ ${Pt}.00`
    labelContCart.textContent = Qt
    
    localStorage.setItem('items',JSON.stringify(Cart))
    localStorage.setItem('Qt',JSON.stringify(Qt))

        
   
    })
})


btnCheckout.addEventListener('click',() => {
   
    for(let cart in Cart){
         cart.stock -= cart.quantity
    }
    localStorage.setItem('items',JSON.stringify(Cart))
})

//--------------

window.addEventListener('scroll', () => {    
    if(window.scrollY >  90){
        nav.classList.replace("transparent","fixednav")
    }else
    {
        nav.classList.replace("fixednav","transparent")
    }
})

DarkMode.addEventListener("click", () => {
    contdark++
   img.src = `./assets/images/sun.png`
   body.classList.toggle("noche")
   logodiv.classList.add("noche")
   if(contdark % 2 === 0 || contdark === 0){
    img.src = `./assets/images/moon.png`
   }
})

btnShopping.addEventListener('click',() => {
    contenedorTienda.classList.add('mostrar')   
})

btnClose.addEventListener('click',() => {
     contenedorTienda.classList.remove("mostrar")
})


btnMenu.addEventListener('click', () => {
    contenedorMenu.classList.add('mostrar')
})

btnCloseMenu.addEventListener('click', () => {
    contenedorMenu.classList.remove('mostrar')
})


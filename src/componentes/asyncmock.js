const productos = [
    {id: "1", nombre: "Mario Bros", precio: 200, img: "../img/marioPelicula.jpg", idCat: "1"},
    {id: "2", nombre: "Pikachu", precio: 300, img: "../img/pikachuPelicula.jpg", idCat: "1"},
    {id: "3", nombre: "CSGO", precio: 500, img: "../img/csgoJuego.png", idCat: "2"},
    {id: "4", nombre: "Dota 2", precio: 350, img: "../img/dotaJuego.jpg", idCat: "2"},
    {id: "5", nombre: "Pochoclos", precio: 400, img: "../img/pochoclosAlimento.jpg", idCat: "3"},
    {id: "6", nombre: "Nachos", precio: 600, img: "../img/nachosAlimento.jpg", idCat: "3"},

]

export const getProductos = () => {
    return new Promise(resolve=> {
        setTimeout( () => {
            resolve(productos);
        },2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout( () =>{
            const producto = productos.find(prod=> prod.id === id);  
            resolve(producto)   
        },100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout( () =>{
            const productosCategoria = productos.filter(prod=> prod.idCat === idCategoria);
            resolve(productosCategoria);     
        },200)
    })
}


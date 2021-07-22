// function Ej1(params) {
//   var personas = ["Nico","Dani","Pato","Ale","Jaqui","Sebas"]
// personas.map(persona => document.write(`<h1> ${persona} </h1>`))
// }
// Ej1()
// var personas = ["Nico","Dani","Pato","Ale","Jaqui","Sebas"]
// for (let index = 0; index < personas.length; index++) {
//   document.write(`<h1> ${personas[index]} </h1>`);
  
// }

// var products = [
//   { id: 233, name: "Leche", price: 120, categories: ["familiar", "comida"] },
//   { id: 342, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
//   { id: 566, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
// ];
// console.log(products[1].categories[1])
// for (let index = 0; index < products.length; index++) {
//   console.log(products[index].categories[0]);
//   console.log(products[index].price);
//   console.log(products[index].name);
  
// }
// products.map(product => {
//   console.log("Categoria :" + product.categories);
//   console.log("Precio :$" + product.price);
//   console.log("Nombre:" + product.name);
//   console.log("ID:" + product.id)
// });
// products[0].modelo = 2018;
// products[1].modelo = 2011;
// products[2].modelo = 2032;
// console.log(products[0],[1],[2])


//literal
// let auto= {
//   marca: "chevrolet",
//   modelo: 2014,
//   color: "blanco"
// }
// //funcion constructora (siempre en mayus)

// function Auto(marca, modelo, color) {
//   this.marca = marca;
//   this.modelo = modelo;
//   this.color = color; 
// }
// var autonew = new Auto("fiat",1993,"verde")
// console.log(autonew)

// //Constructor de objetos 

// var persona = new Object();
//   persona.nombre = "Facu"
//   persona.apellido = "Mirande"
//   persona.edad = "24";

//   console.log(persona);

// //object.create

// let autoNuevo = Object.create(autonew);
// console.log(autoNuevo)
// //*******funcion constructora (siempre en mayus)********/
// const brand = "Ford";
// const color = "Gris"
// const model = 2020;

// function Car(brand, color, model) {
//   this.marca = brand;
//   this.color = color;
//   this.model0 = model;
// }
// var carNew = new Car(brand, color, model)
// console.log(carNew)

// //*********COMPARANDO OBJETOS**********/
// let persona1 = {nombre : "Nicolas"}
// let persona2 = {nombre : "Nicolas"}


// if (persona1.nombre  == persona2.nombre) {
//   alert("son iguales")
// } else {
//   alert("no son iguales")
// }

// //**********************CLASES**/

class Persona {
  constructor(nombre, apellido, edad, admin){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.admin = admin
  }
  isAdmin(){
    if (admin) {
      alert("Es admin.")
    } else {
      alert("Ni es admin.")
    }
  }
}
let persona1 = new Persona("mauricio", "muñoz", 23, true)
let persona2 = new Persona("smith", "chars", 25, false)

console.log(persona1)
console.log(persona2)

persona1.isAdmin();
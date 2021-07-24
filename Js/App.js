class Person{
  constructor(name, age, doc, sex, weight, height, dateOfYear){
    this.nombre = name;
    this.edad = age;
    this.documento = doc;
    this.sexo = sex;
    this.peso = weight;
    this.altura = height;
    this.añoNacimiento = dateOfYear;
  }
  showGeneration (){
    if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
      alert(`${this.nombre} pertenece a "Silent Generation" (niños de la post guerra).\n
      Su rasgo característico es la Austeridad. (Sencillez y moderación propias de la persona.).`)
    } else if(this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968){
      alert(`${this.nombre} pertenece a "Baby Boom".\n
      Su rasgo característico es la Ambicion. (Deseo intenso y vehemente de conseguir una cosa difícil de lograr, especialmente riqueza, poder o fama.).`)
    } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
      alert(`${this.nombre} pertenece a "Generación X".\n
      Su rasgo característico es la Obsesión por el éxito. (Una competencia por alcanzar el éxito, el éxito para algunos a menudo puede variar segun su realidad.).`)
    } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
      alert(`${this.nombre} pertenece a "Generación Y".\n
      Su rasgo característico es la Frustración. (La frustración es una respuesta emocional común a la oposición, relacionada con la ira y la decepción, que surge de la percepción de resistencia al cumplimiento de la voluntad individual.).`)
    } else if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
      alert(`${this.nombre} pertenece a "Generación Z".\n
      Su rasgo característico es la Irreverencia. (Persona que lucha, contiende o está en oposición con otra.).`)
    }
  }
  adult (){
    if (this.edad >= 18) {
      alert(`${this.nombre} es mayor de edad.\n
      Su edad actual es de ${this.edad} años.`)
    } else {
      alert(`${this.nombre} NO mayor de edad.\n
      Su edad actual es de ${this.edad} años.`)
    }
  }
  showData (){
    alert(`Propiedades del objeto.\n
    Nombre: ${this.nombre}.\n
    Edad: ${this.edad} años.\n
    DNI: ${this.documento}.\n
    Sexo: ${this.sexo}.\n
    Peso: ${this.peso} KG.\n
    altura: ${this.altura} CM.\n
    Año de nacimiento: ${this.añoNacimiento}.`) 
  }
  generateId (){
    this.documento = Math.round(Math.random() * 100000000);
    alert('Tu número aleatorio es: ' + this.documento +".");
  } 
}

let Ej1 = () => {
  let random = Math.round(Math.random() * 10);
  let imputNumber = parseInt(document.getElementById("inputEj1").value)
  if (imputNumber <= 10 && !isNaN(imputNumber)) {
    if (imputNumber == random) {
      alert("¡¡¡We Are the Champions!!!")
    } else {
      alert("¡¡¡Fallaste, intenta de nuevo!!!")
    }
  }else {
    alert("Solo puedes ingresar numero del 0 al 10.")
  }
  console.log(random)
}
let people;
let Ej2a = () => {
  let name = document.getElementById("inputName").value
  let age = document.getElementById("inputAge").value
  let doc = document.getElementById("inputDoc").value
  let sex =  document.getElementById("inputSex").value
  let weight = document.getElementById("inputWeight").value
  let height = document.getElementById("inputHeight").value
  let dateOfYear = document.getElementById("inputBirth").value
  people = new Person(name, age, doc, sex, weight, height, dateOfYear)
  console.log(name)
}
let Ej2b = (metod) => {
  people[metod]();
}
let Ej3 = () => {
  let dateClock = new Date();
  
}

function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  //Add a zero in front of numbers<10
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;
  var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}
startTime();

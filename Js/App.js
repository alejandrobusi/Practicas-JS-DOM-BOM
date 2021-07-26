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
  let name = document.getElementById("inputName").value,
  age = document.getElementById("inputAge").value,
  doc = document.getElementById("inputDoc").value,
  sex =  document.getElementById("inputSex").value,
  weight = document.getElementById("inputWeight").value,
  height = document.getElementById("inputHeight").value,
  dateOfYear = document.getElementById("inputBirth").value;
  people = new Person(name, age, doc, sex, weight, height, dateOfYear)
  console.log(name)
}
let Ej2b = (metod) => {
  people[metod]();
}

let Ej3 = () => {
  function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
  }

  let today = new Date(),
  hr = today.getHours(),
  min = today.getMinutes(),
  sec = today.getSeconds(),
  day = today.getDay(),
  date = today.getDate(),
  month = today.getMonth(),
  fullYear = today.getFullYear();
  let dayArray = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]; 
  let monthArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  min = checkTime(min);
  sec = checkTime(sec);
  Hr = checkTime(hr);

  let paragraphDay = document.getElementById('day'),
  paragraphNumbDay = document.getElementById('numberDay'),
  paragraphMonth = document.getElementById('month'),
  paragraphFullYear = document.getElementById('fullYear'),
  paragraphHours = document.getElementById('hours'),
  paragraphMin = document.getElementById('min'),
  paragraphSeg = document.getElementById('seg');
  
  paragraphDay.textContent = dayArray[day];
  paragraphNumbDay.textContent = date;
  paragraphMonth.textContent = monthArray[month];
  paragraphFullYear.textContent = fullYear;
  paragraphHours.textContent = hr;
  paragraphMin.textContent = min;
  paragraphSeg.textContent = sec;
  setInterval(Ej3,500)
}
  Ej3()

//   min = checkTime(min);
//   sec = checkTime(sec);
//   hr = checkTime(hr)
//   document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;
//   setTimeout(function(){ startTime() }, 500);
// }
//

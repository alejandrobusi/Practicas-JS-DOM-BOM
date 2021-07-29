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
    } else if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2021) {
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
class Clock{
  constructor(today){
  this.today = today,
  this.hr = today.getHours(),
  this.min = today.getMinutes(),
  this.sec = today.getSeconds(),
  this.day = today.getDay(),
  this.date = today.getDate(),
  this.month = today.getMonth(),
  this.fullYear = today.getFullYear();
  this.dayArray = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]; 
  this.monthArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  this.paragraphNumbDay = document.getElementById('numberDay'),
  this.paragraphDay = document.getElementById('day'),
  this.paragraphMonth = document.getElementById('month'),
  this.paragraphFullYear = document.getElementById('fullYear'),
  this.paragraphHours = document.getElementById('hours'),
  this.paragraphMin = document.getElementById('min'),
  this.paragraphSeg = document.getElementById('seg');
  this.id ;
  }
  checkTimes(i){
      if (i < 10) {
              i = "0" + i;
          }
          return i;
  }
  write (){
      this.paragraphDay.textContent = this.dayArray[this.day];
      this.paragraphNumbDay.textContent = this.date;
      this.paragraphMonth.textContent = this.monthArray[this.month];
      this.paragraphFullYear.textContent = this.fullYear;
      this.paragraphHours.textContent = this.checkTimes(this.hr);
      this.paragraphMin.textContent = this.checkTimes(this.min);
      this.paragraphSeg.textContent = this.checkTimes(this.sec);
      this.id = setInterval(this.write, 1000)
}
}
class Chrono{
  constructor(hour, min, sec){
  this.sec = sec;
  this.min = min;
  this.hour = hour;
  this.id ;
  }
  checkTime(i) {
    if (i < 10 && i > 0) {
        return "0" + i;
    } else if (i == 0) {
      return "00"
    }else{
    return i;
    }
  }
  write (pSec, pMin, pHour, playBtn){
    playBtn.disabled = true
    this.id = setInterval(()=>{
        this.sec++
          if (this.sec>59){this.min++;this.sec=0;}
          if (this.min>59){this.hour++;this.min=0;}
          if (this.hour>24){this.hour=0;}
        
          pHour.textContent = this.checkTime(this.hour);
          pMin.textContent = this.checkTime(this.min);
          pSec.textContent = this.checkTime(this.sec);
      },1000)
  }
  reset(){
    playBtn.disabled = false
    this.sec
    this.sec = -1
    this.min = 0
    this.hour = 0
    pHour.textContent = "00";
    pMin.textContent = "00";
    pSec.textContent = "00";
  }
  stop(){
    clearInterval(this.id)
    playBtn.disable = false
  }
}
class Temp{
  constructor(){
  this.sec = 0;
  this.min = 0;
  this.hour = 0;
  this.id ;
  }
  checkTime(i) {
    if (i < 10 && i > 0) {
        return "0" + i;
    } else if (i == 0) {
      return "00"
    }else{
    return i;
    }
  }
  setValue (inputHour, inputMin, inputSec){
    this.sec = document.getElementById("inputSec").value
    this.min = document.getElementById("inputMin").value
    this.hour = document.getElementById("inputHour").value
    if (this.sec >= 60 || this.min >= 60 || this.hour >= 23) {
      alert(`Verifica los datos de entrada.\n
      No puedes ingresar mas de 59 segundos, 59 minutos, 23 horas.`)
    } 
    
  }
  write (tempSec, tempMin, tempHour, playBtnTemp){
    playBtnTemp.disabled = true
    this.id = setInterval(()=>{
        this.sec--
          if (this.sec> 0 && this.sec <= 60 ){
              this.seg--;
            }else if (this.min > 0 && this.min <= 60) {
            this.min--;
            this.sec = 59;
          }else if (this.hour > 0) {
            this.hour--;
            this.min = 59;
            this.sec = 59;
          } else{
            this.hour = 0;
            this.min = 0;
            this.sec = 0;
            clearInterval(this.id)
          }
        if (this.sec == 0 && this.min == 0 && this.hour == 0) {
          alert("¡¡¡El tiempo se agotó!!!")
          return
        }
          tempHour.textContent = this.checkTime(this.hour);
          tempMin.textContent = this.checkTime(this.min);
          tempSec.textContent = this.checkTime(this.sec);
      },1000)
  }
  reset(){
    playBtnTemp.disabled = false
    this.sec++
    this.sec = 0
    this.min = 0
    this.hour = 0
    tempHour.textContent = "00";
    tempMin.textContent = "00";
    tempSec.textContent = "00";
    clearInterval(this.id)
  }
  stop(){
    playBtnTemp.disable = false
    clearInterval(this.id)
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

// function checkTime(i) {
//   if (i < 10) {
//       i = "0" + i;
//   }
//   return i;
// }
// let Ej3 = () => {

//   let today = new Date(),
//   interval = setInterval(Ej3,500)
//   hr = today.getHours(),
//   min = today.getMinutes(),
//   sec = today.getSeconds(),
//   day = today.getDay(),
//   date = today.getDate(),
//   month = today.getMonth(),
//   fullYear = today.getFullYear();
//   let dayArray = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]; 
//   let monthArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
//   min = checkTime(min);
//   sec = checkTime(sec);
//   Hr = checkTime(hr);

//   let paragraphDay = document.getElementById('day'),
//   paragraphNumbDay = document.getElementById('numberDay'),
//   paragraphMonth = document.getElementById('month'),
//   paragraphFullYear = document.getElementById('fullYear'),
//   paragraphHours = document.getElementById('hours'),
//   paragraphMin = document.getElementById('min'),
//   paragraphSeg = document.getElementById('seg');
  
//   paragraphDay.textContent = dayArray[day];
//   paragraphNumbDay.textContent = date;
//   paragraphMonth.textContent = monthArray[month];
//   paragraphFullYear.textContent = fullYear;
//   paragraphHours.textContent = hr;
//   paragraphMin.textContent = min;
//   paragraphSeg.textContent = sec;
//   interval
// }

let today = new Date();
let clock = new Clock(today);
let cronometro = new Chrono(0, 0, 0);
let temp = new Temp();





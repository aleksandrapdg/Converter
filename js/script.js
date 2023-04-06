const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')


let fahrenheit
let celsius
// (50°F - 32) x .5556 = 10°C
// (30°C x 1.8) + 32 = 86°F’

const switchFC = () =>{
     if(one.textContent === '°C'){
        one.textContent = '°F'
        two.textContent = '°C'
        result.textContent = ''
     } else {
        one.textContent = '°C'
        two.textContent = '°F'
        result.textContent = ''
     }
}



const fahrtoCel = () =>{
   fahrenheit = converter.value * 1.8 + 32
   result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`
   converter.value = ''
}


const celrtoFahr = () =>{
   celsius = (converter.value -32)/1.8
   result.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`
  converter.value = ''
}

const conversion = () => {
   if(converter.value !== ''){
      if(one.textContent === '°C'){
         fahrtoCel()
      } else{
         celrtoFahr()
      }
   } else{
      result.textContent = 'Musisz podać jakąś wartość!'
   }
}

const reset = () =>{
   converter.value = ''
   result.textContent = ''
}
convBtn.addEventListener('click', conversion)
changeBtn.addEventListener('click', switchFC)
resetBtn.addEventListener('click', reset)
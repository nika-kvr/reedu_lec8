const uppercaseInput = document.querySelector('.uppercaseInput');
const uppercaseSpan = document.querySelector('.uppercaseSpan');

uppercaseInput.addEventListener('input', (e)=>{
  if(/^[A-Z]/.test(e.target.value)){
    uppercaseSpan.style.display = 'none'
  }else{
    uppercaseSpan.style.display = 'block'
  }
})

const dateInput = document.querySelector('.dateInput');
const dateSpan = document.querySelector('.dateSpan');

dateInput.addEventListener('input', (e)=>{
  if(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/.test(e.target.value)){
    dateSpan.style.display = 'none'
  }else{
    dateSpan.style.display = 'block'
  }
})


const gePhoneInput = document.querySelector('.gePhoneInput');
const gePhoneSpan = document.querySelector('.gePhoneSpan');

gePhoneInput.addEventListener('input', (e)=>{
  if(/^\d{3}-\d{2}-\d{2}-\d{2}$/.test(e.target.value)){
    gePhoneSpan.style.display = 'none'
  }else{
    gePhoneSpan.style.display = 'block'
  }
})


const emailInput = document.querySelector('.emailInput');
const emailSpan = document.querySelector('.emailSpan');

emailInput.addEventListener('input', (e)=>{
  if(/^[a-zA-Z0-9._%+-]+@example\.com$/.test(e.target.value)){
    emailSpan.style.display = 'none'
  }else{
    emailSpan.style.display = 'block'
  }
})


// 5) Save the random horoscop data like 10 into localstorage
const horoscopes = [
  "დღეს კარგი დღე გექნება 1",
  "დღეს კარგი დღე გექნება 2",
  "დღეს კარგი დღე გექნება 3",
  "დღეს კარგი დღე გექნება 4",
  "დღეს კარგი დღე გექნება 5",
  "დღეს კარგი დღე გექნება 6",
  "დღეს კარგი დღე გექნება 7",
  "დღეს კარგი დღე გექნება 8",
  "დღეს კარგი დღე გექნება 9",
  "დღეს კარგი დღე გექნება 10",
];

if (!localStorage.getItem('horoscopes')) {
  localStorage.setItem('horoscopes', JSON.stringify(horoscopes));
}

const savedHoroscopes = JSON.parse(localStorage.getItem('horoscopes'));

const today = new Date();
const dayOfMonth = today.getDate(); 

const index = (dayOfMonth - 1) % 10;

const horoscopeElement = document.getElementById('horoscope');
horoscopeElement.textContent = savedHoroscopes[index];


// 6) Make a form with three inputs name, email and phone

const nameForm = document.querySelector('#nameForm')
const emailForm = document.querySelector('#emailForm')
const phoneForm = document.querySelector('#phoneForm')

if(localStorage.getItem('nameForm')){
  nameForm.value = localStorage.getItem('nameForm')
}
if(localStorage.getItem('emailForm')){
  emailForm.value = localStorage.getItem('emailForm')
}
if(localStorage.getItem('phoneForm')){
  phoneForm.value = localStorage.getItem('phoneForm')
}

function saveToLclstrg(e){
  localStorage.setItem(`${e.id}`, e.value)
}

// 7) Create a two button En Ka and the random text below, if you 

const kaText = 'დაე ძალა იყოს შენთან'
const enText = 'May the Force be with you'

const text = document.querySelector('#textToTranslate')

const enBtn = document.querySelector('#enBtn')
const kaBtn = document.querySelector('#kaBtn')

if(localStorage.getItem('language')){
  if(localStorage.getItem('language') === 'en'){
    text.innerHTML = enText
  }else{
    text.innerHTML = kaText
  }
}

function changeLanguage(e){
  if(e.id === 'enBtn'){
    text.innerHTML = enText
    localStorage.setItem('language', 'en')
  }else{
    text.innerHTML = kaText
    localStorage.setItem('language', 'ka')
  }
}
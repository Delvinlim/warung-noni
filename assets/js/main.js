const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

function toggle() {
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navToggle.style.display = "none";
      navClose.style.display = "block";
      navMenu.classList.add("show-menu");
    });
  }
  if (navClose) {
    navClose.addEventListener("click", () => {
      navClose.style.display = "none";
      navToggle.style.display = "block";
      navMenu.classList.remove("show-menu");
    });
  }
}
toggle();

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));


TweenMax.from(".home-title", 1, {
  delay: 0.2,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenMax.from(".home-description", 1, {
  delay: 0.3,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenMax.from(".home-button", 1, {
  delay: 0.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenMax.from(".home-noni-animate", 1, {
  delay: 1.2,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});

function nextStepper(n) {
  var stepper = new Stepper(document.querySelector('#stepper1'), {
    linear: true,
    animation: true,
    selectors: {
      steps: '.step',
      trigger: '.step-trigger',
      stepper: '.bs-stepper'
    }
  })
  if (n === 2) {
    const quantityInput = document.querySelector("#quantity");
    const quantityValue = document.querySelector("#quantityValue");
    quantityValue.innerHTML = quantityInput.value
  }
  stepper.to(n)
}

function previousStepper(n) {
  var stepper = new Stepper(document.querySelector('#stepper1'), {
    linear: true,
    animation: true,
    selectors: {
      steps: '.step',
      trigger: '.step-trigger',
      stepper: '.bs-stepper'
    }
  })
  
  stepper.to(n)
}

document.addEventListener('DOMContentLoaded', function () {
  var stepper = new Stepper(document.querySelector('.bs-stepper'), {
    linear: true,
    animation: true,
    selectors: {
      steps: '.step',
      trigger: '.step-trigger',
      stepper: '.bs-stepper'
    }
  })
  console.log(stepper)
})

var selectedBox = ""
let maleGenderBox = document.getElementById("male-gender-box")
let femaleGenderBox = document.getElementById("female-gender-box")

maleGenderBox.addEventListener("click", () => {
  if(selectedBox = "female") {
    femaleGenderBox.classList.remove("active-genderBox")
  }
  selectedBox = "male"
  maleGenderBox.classList.add("active-genderBox")
});

femaleGenderBox.addEventListener("click", () => {
  if(selectedBox = "male") {
    maleGenderBox.classList.remove("active-genderBox")
  }
  selectedBox = "female"
  femaleGenderBox.classList.add("active-genderBox")
});

const incrementButton = document.querySelector("#increment");
const decrementButton = document.querySelector("#decrement");
const quantityInput = document.querySelector("#quantity");
const quantityValue = document.querySelector("#quantityValue");

incrementButton.addEventListener("click", () => {
  quantityInput.value = parseInt(quantityInput.value) + 1;
  quantityValue.innerHTML = quantityInput.value
});

decrementButton.addEventListener("click", () => {
  console.log((parseInt(quantityInput.value) - 1) < 0, 'see here value')
  console.log((parseInt(quantityInput.value) - 1) < 0, 'see here value')
  if ((parseInt(quantityInput.value) - 1) < 0) {
    quantityValue.innerHTML = 1
    quantityValue.value = 1
  } else {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
  quantityValue.innerHTML = quantityInput.value
});

quantityInput.addEventListener("change", () => {
  quantityValue.innerHTML = quantityInput.value
  if (quantityValue.innerHTML < 0) {
    quantityValue.innerHTML = 1
    quantityInput.value = 1
  }
})

let priceInput = document.querySelector(".price-input")

priceInput.addEventListener('keyup', () => {

  var price = priceInput.value.replace(/[^\d]/g,'');    
  var pre, dec;
  var delimiter = '.';
  
  var result = price;

  if (price.length > 3 && price.charAt(0) == '0') {
    price = price.substr(1);
  }
  
  if (price.length > 2) {
    pre = price.slice(0,-2);
    dec = price.substr( (price.length-2), 2);
    result = pre + delimiter + dec;
  }
  
  priceInput.value = result;
  
});

// priceInput.addEventListener('blur', function(){
//   console.log( 'Your price is: ' + priceInput.value + ' $' );
// });


let options = document.getElementById("options");
let optionList = ["Kuah", "Goreng", "Rebus"];

let button = document.getElementById("button");

let isOpen = false;

options.addEventListener("click", addToUIOptions);

let optionValue = ""
function addToUIOptions(e) {
    if (e.target.classList.contains("hide-option")) {
        controlOptions(e);
    }
    else {
        const pickedOption = e.target;
        optionValue = e.target.innerHTML;

        if (options.firstElementChild.classList.contains("hide-option")) {
            options.removeChild(options.firstElementChild);
        }
        options.insertAdjacentElement("afterbegin", pickedOption);

        deleteOptions();
        controlOptions(e);
    }
}

function controlOptions(e) {
    if (isOpen === false) {
        createOptions();
        options.classList.add("opened");
        isOpen = true;
    }
    else {
        deleteOptions();
        options.classList.remove("opened");
        isOpen = false;
    }
}

function deleteOptions() {
    while (options.childElementCount > 1) {
        options.removeChild(options.lastElementChild);
    }
}

function createOptions() {
    optionList.forEach(element => {
        if (options.firstElementChild.textContent !== element) {
            let option = document.createElement("div");
            option.className = "option";
            option.textContent = element;

            options.firstElementChild.insertAdjacentElement("afterend", option);
        }
    });
};

const FOOD_LIST = {'Lontong Sayur': {
                      'description': 'Lontong sayur adalah sajian khas Indonesia yang bisa dijumpai di pedagang kaki lima sampai di mal dan restoran. lontong sayur yang paling banyak dikenal adalah lontong sayur khas Betawi. Ada sejarah dari lontong sayur ini. Awalnya, lontong sayur merupakan sajian khas pada Hari Raya Idul Fitri dan Idul Adha',
                      'url': '',
                      'img': 'lontong-sayur.jpg'
                    }, 
                    'Pecel': {
                      'description': '',
                      'url': '',
                      'img': 'pecel.jpg'
                    }, 
                    'Gado-Gado': {
                      'description': 'salah satu kuliner khas Indonesia berupa sayur- sayuran yang direbus dan dicampur menjadi satu, dengan bumbu kacang yang dihaluskan serta tambahan irisan telur dan kentang rebus',
                      'url': '',
                      'img': 'gado-gado.jpg'
                    }, 
                    '3T': {
                      'description': '',
                      'url': '',
                      'img': '3t.jpg'
                    }, 
                    'Ayam Penyet': {
                      'description': 'Ayam penyet adalah hidangan Ayam goreng Indonesia, khususnya Jawa, yang terdiri dari ayam goreng yang diulek memakai ulekan untuk melembutkannya, disajikan dengan sambal, potongan-potongan timun, tahu goreng dan tempe',
                      'url': '',
                      'img': 'ayam-penyet.jpg'
                    }, 
                    'Ayam Cabe Ijo': {
                      'description': 'Ayam Cabe Ijo adalah olahan daging ayam berpadu dengan pedas dan aroma khas cabe ijo yang gurih dan lezat. Cara pengolahan masakan ini sangat praktis, sangat pas bagi Anda yang tidak memiliki banyak waktu untuk memasak. Untuk penyajiannya, ayam ini bisa disajikan bersama nasi putih hangat dan lalapan mentimun.',
                      'url': '',
                      'img': 'ayam-cabe-hijau.jpeg'
                    },
                    'Soto Ayam': {
                      'description': 'Soto ayam adalah makanan khas Indonesia yang berupa sejenis sup ayam dengan kuah yang berwarna kekuningan. Warna kuning ini dikarenakan oleh kunyit yang digunakan sebagai bumbu. Soto ayam banyak ditemukan di daerah-daerah di Indonesia dan Singapura',
                      'url': '',
                      'img': 'soto-ayam.jpg'
                    }, 
                    'Soup Ayam': {
                      'description': 'Sup ayam adalah sup yang terbuat dari ayam, yang dicampur dengan berbagai bahan makanan lainnya. Sup ayam klasik terdiri dari kaldu encer, yang dimasukkan potongan ayam atau sayuran; umumnya ditambahkan dengan pasta (biasanya mi, meskipun berbagai jenis lainnya dapat digunakan), dumpling, atau padi-padian seperti nasi dan jelai.',
                      'url': '',
                      'img': 'soup-ayam.jpg'
                    }, 
                    'Soup Tulang': {
                      'description': 'jenis sup yang diolah dari tulang sapi (mulai dari kaki, kepala, rusuk, bahkan usus). Waktu yang digunakan untuk proses perebusan terbilang lama, sehingga warna kuah kaldunya pun berubah menjadi putih-susu.',
                      'url': '',
                      'img': 'soup-tulang.jpg'
                    }, 
                    'Pecel Lele': {
                      'description': ' makanan khas Jawa Timur, Indonesia, yang terdiri dari ikan lele dan sambal tomat. Biasanya, pecel lele berupa ikan lele yang digoreng kering dengan minyak, lalu disajikan dengan sambal tomat dan lalapan',
                      'url': '',
                      'image': 'pecel-lele.jpeg'
                    }}

async function actionRecommend() {
  const baseURL = 'https://delvinlim.pythonanywhere.com/predict'
  const parsedGender = selectedBox === 'male' ? 1 : 0
  const selectedAge = quantityInput.value
  const selectedMoney = priceInput.value
  const selectedFoodCategory = optionValue
  console.log(parsedGender)
  console.log(selectedAge)
  console.log(selectedMoney)
  console.log(selectedFoodCategory)
  if (!parsedGender && !selectedMoney && !selectedFoodCategory) {
    alert('pastikan semua inputan terisi')
    return
  }
  
  
  let parsedFoodCategory
  console.log(selectedFoodCategory, 'see here categor')
  if (selectedFoodCategory === 'Goreng') {
    parsedFoodCategory = 0
  } else if (selectedFoodCategory === 'Rebus') {
    parsedFoodCategory = 1
  } else {
    parsedFoodCategory = 2
  }

  const res = await axios.get(`${baseURL}/${parsedGender}/${selectedAge}/${selectedMoney}/${parsedFoodCategory}`)
  console.log(res, 'res here')
  let uiBlock = document.querySelector("#ui-block")
  let uiLoader = document.querySelector("#ui-loader")
  let uiResult = document.querySelector("#ui-result")

  // Munculkan Ui Block + Loader
  uiBlock.style.display = "block"
  uiLoader.style.display = "block"
  // If Res, Tutup Loader & Munculkan Result Box
  if(res) {
    const finalRes = res.data.split("'")
    // [1]
    const resDescription = FOOD_LIST[finalRes[1]].description
    const resUrl = FOOD_LIST[finalRes[1]].url
    const resImg = FOOD_LIST[finalRes[1]].img
    let resultBoxTitle = document.querySelector(".result-box-content-title")
    let resultBoxDescription = document.querySelector(".result-box-content-description")
    let resultBoxContentLeft = document.querySelector(".result-box-content-left")
    
    let img = document.createElement("img");
    img.src = `./assets/img/${resImg}`
    img.class = "result-box-content-image"
    img.alt = 'food image'

    resultBoxContentLeft.appendChild(img)
    resultBoxTitle.innerHTML = finalRes[1]
    resultBoxDescription.innerHTML = resDescription
    
    console.log(finalRes)
    console.log(FOOD_LIST[finalRes[1]])

    uiLoader.style.display = "none"
    uiResult.style.display = "flex"
  }

  // console.log(optionValue.toLowerCase())
  // console.log(priceInput.value) 
  // console.log(quantityInput.value)
  // console.log(selectedBox)
}

let closeResButton = document.querySelector(".result-box-close")
closeResButton.addEventListener("click", () => {
  let uiBlock = document.querySelector("#ui-block")
  let uiResult = document.querySelector("#ui-result")
  uiBlock.style.display = "none"
  uiResult.style.display = "none"
  window.location.reload()
})
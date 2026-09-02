let all_products = JSON.parse(localStorage.getItem("local_products"));
let all_types = JSON.parse(localStorage.getItem("local_types"));
let current_lang = localStorage.getItem("local_current_lang")
let mood = localStorage.getItem("local_mood")

console.log("all_products = ", all_products)
console.log("all_types = ", all_types)

Object.values(all_types).forEach((value) => {
    renderTypes(value)
})

gitLangToWork()

gitMoodToWork()

gitTypeSelectToWork()


function gitTypeSelectToWork() {
    let types_container = document.querySelector(".types_container")
    if (current_lang === "en") {
        types_container.innerHTML += `
        <a href="#starters" class="type_link">Starters</a>
        <a href="#pasta" class="type_link">Pasta</a>
        <a href="#pizza" class="type_link">Pizza</a>
        <a href="#sideDishes" class="type_link">Side Dishes</a>
        <a href="#dessert" class="type_link">Dessert</a>
        <a href="#drinks" class="type_link">Drinks</a>
        <a href="#coffee" class="type_link">Coffee</a>
        `
    }
    else if (current_lang === "ar") {
        types_container.innerHTML += `
        <a href="#coffee" class="type_link">قهوة</a>
        <a href="#drinks" class="type_link">مشروبات</a>
        <a href="#dessert" class="type_link">حلويات</a>
        <a href="#sideDishes" class="type_link">أطباق جانبية</a>
        <a href="#pizza" class="type_link">بيتزا</a>
        <a href="#pasta" class="type_link">مكرونة</a>
        <a href="#starters" class="type_link">المقبلات</a>
        `
    }
}

function renderTypes(type_ob) {
    let cards_container = document.querySelector(".cards_container")
    console.log("type_ob.en = ", type_ob.en);
    if (current_lang === "en") {
        typeHTML = `<div id="${type_ob.en}">
                        <h1>${type_ob.en.toUpperCase()}</h1>
                        <div class="special_line">
                            <span class="line"></span>
                            <span class="dot"></span>
                            <span class="line"></span>
                        </div>
                    </div>`
        let cardsHTML = ``
        let cards_ob = [];
        all_products.forEach(function filter(dish_ob) {
            if (dish_ob.category === type_ob.en) {
                cards_ob.push(dish_ob);
            }
        })
        cards_ob.forEach(function (card) {
            cardsHTML += `<a href="dishs_pages/${card.file_name}" class="card${mood === "dark" ? " dark-mode" : ""}">
        <p class="product_name">${card.name_en}</p>
        <div class="normal_line"></div>
        <p class="price">${card.price}⃁</p>
        <i class="bi bi-caret-right"></i>
        </a>`
        })
        typeHTML += cardsHTML
        cards_container.innerHTML += typeHTML
        console.log("typeHTML = ", typeHTML)
        cards_container.innerHTML += ``
    }
    else if (current_lang === "ar") {
        typeHTML = `<div id="${type_ob.en}">
                        <h1>${type_ob.ar.toUpperCase()}</h1>
                        <div class="special_line">
                            <span class="line"></span>
                            <span class="dot"></span>
                            <span class="line"></span>
                        </div>
                    </div>`
        cardsHTML = ``
        let cards_ob = [];
        all_products.forEach(function filter(dish_ob) {
            if (dish_ob.category === type_ob.en) {
                cards_ob.push(dish_ob);
            }
        })
        cards_ob.forEach(function (card) {
            cardsHTML += `<a href="dishs_pages/${card.file_name}" class="card">
            <i class="bi bi-caret-right" style="transform: rotate(180deg);"></i>
            <p class="price">⃁${card.price}</p>
            <div class="normal_line"></div>
            <p class="product_name">${card.name_ar}</p>
        </a>`
        })
        typeHTML += cardsHTML
        cards_container.innerHTML += typeHTML
        console.log("typeHTML = ", typeHTML)
        cards_container.innerHTML += ``
    }
}

function gitLangToWork() {
    let lang_button = document.querySelector(".lang_button")
    let current_lang_and_arrow = document.querySelector('.current_lang_and_arrow')
    let li = lang_button.querySelector("li")
    let p = current_lang_and_arrow.querySelector("p")
    if (current_lang === "en") {
        p.innerHTML = "English"
        li.innerHTML = "Arabic"
    }
    else {
        p.innerHTML = "Arabic"
        li.innerHTML = "English"
    }
    current_lang_and_arrow.addEventListener("click", function () {
        if (lang_button.classList.contains("open")) {
            lang_button.classList.remove("open")
            lang_button.classList.add("close")
        }
        else {
            lang_button.classList.remove("close")
            lang_button.classList.add("open")
        }
    });

    li.addEventListener("click", (ev) => {
        let temp = li.innerHTML
        li.innerHTML = p.innerHTML
        p.innerHTML = temp
        if (p.innerHTML === "Arabic") {
            current_lang = "ar"
            localStorage.setItem("local_current_lang", current_lang)
        }
        else {
            current_lang = "en"
            localStorage.setItem("local_current_lang", current_lang)
        }
        window.location.reload()
    })
}
function gitMoodToWork() {
    if (mood === "dark") {
        document.body.classList.add("dark-mode")
    }
    let mood_container = document.querySelector(".theme")
    let light = document.querySelector(".theme i.bi-brightness-high-fill")
    let dark = document.querySelector(".theme i.bi-moon-fill")
    if (mood === "light") {
        light.classList.add("active")
    }
    else {
        dark.classList.add("active")
    }
    mood_container.addEventListener("click", (ev) => {
        if (light.classList.contains("active")) {
            mood = "dark"
            localStorage.setItem("local_mood", mood)
            window.location.reload()
        }
        else {
            mood = "light"
            localStorage.setItem("local_mood", mood)
            window.location.reload()
        }
    })
}
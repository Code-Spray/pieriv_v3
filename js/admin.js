let all_products = JSON.parse(localStorage.getItem("local_products"));
let all_types = JSON.parse(localStorage.getItem("lacal_types"));
let main = document.querySelector("main")
console.log("all_products = ", all_products)
console.log("all_types = ", all_types)

Object.values(all_types).forEach(renderTypes)

gitEditAllWork()

gitAddAllWork()

function renderTypes(type_ob) {
    console.log("type", type_ob.en, "is prossing");
    main.innerHTML += `
        <section id="${type_ob.en}">
            <div class="type_and_edit">
                <h2>${type_ob.en.toUpperCase()}</h2>
            </div>
            <div class="cards_container">
            </div>
        </section>`
    cardsHTML = ``
    let cards_ob = [];
    all_products.forEach(function filter(dish_ob) {     /*home made function (●'◡'●)*/
        if (dish_ob.category === type_ob.en) {
            cards_ob.push(dish_ob);
        }
    })
    cards_ob.forEach(function (card) {
        cardsHTML += `
            <div class="card" id="${card.id}">
                <div class="title_and_edit">
                    <h3>${card.name_en}</h3>
                    <button class="edit_button">Edit</button>
                </div>
                <div class="info_container">
                    <div class="info">
                        <p class="label">English Name : </p>
                        <p class="value">${card.name_en}</p>
                    </div>
                    <p>||</p>
                    <div class="info">
                        <p class="label">Arabic Name : </p>
                        <p class="value">${card.name_ar}</p>
                    </div>
                    <p>||</p>
                    <div class="info">
                        <p class="label">Price : </p>
                        <p class="value">${card.price}</p>
                    </div>
                    <p>||</p>
                    <div class="info">
                        <p class="label">English Description : </p>
                        <p class="value">${card.description_en}</p>
                    </div>
                    <p>||</p>
                    <div class="info">
                        <p class="label">Arabic Description : </p>
                        <p class="value">${card.description_ar}</p>
                    </div>
                    <p>||</p>
                    <div class="info">
                        <p class="label">image : </p>
                        <p class="value">?</p>
                    </div>
                </div>
            </div>`
    })
    document.querySelector(`#${type_ob.en} .cards_container`).innerHTML += cardsHTML
    document.querySelector(`#${type_ob.en} .cards_container`).innerHTML += `
    <div class="add_card">
        <div class="circle">
            <i class="bi bi-plus-lg"></i>
        </div>
        <p>Add Dish</p>
    </div>`
}

function gitEditAllWork() {
    let edit_buttons_cards = document.querySelectorAll(`.cards_container .edit_button`)
    edit_buttons_cards.forEach((button) => {
        button.addEventListener("click", (ev) => {
            let card_in_edit_html = ev.target.closest(".card")
            let target_card_ob
            all_products.forEach((card_ob) => {        /*home made function (●'◡'●)*/
                if (card_ob.id === Number(card_in_edit_html.id)) { target_card_ob = card_ob }
            })
            card_in_edit_html.className = "card_in_edit"
            card_in_edit_html.innerHTML = `
                    <div class="title_and_buttons">
                    <h3>${target_card_ob.name_en}</h3>
                        <div class="delete_and_cancel">
                        <button class="delete_button">Delete</button>
                        <button class="cancel_button">Cancel</button>
                        </div>
                        </div>
                        <div class="info_container">
                        <div class="info">
                        <p class="label">English Name : </p>
                        <input type="text" class="value" value="${target_card_ob.name_en}">
                        </div>
                        <p>||</p>
                        <div class="info">
                            <p class="label">Arabic Name : </p>
                            <input type="text" class="value" value="${target_card_ob.name_ar}">
                            </div>
                            <p>||</p>
                            <div class="info">
                            <p class="label">Price : </p>
                            <input type="number" class="value" value="${target_card_ob.price}">
                        </div>
                        <p>||</p>
                        <div class="info">
                            <p class="label">English Description : </p>
                            <p class="value"></p>
                            <input type="text" class="value" value="${target_card_ob.description_en}">
                            </div>
                            <p>||</p>
                        <div class="info">
                        <p class="label">Arabic Description : </p>
                            <p class="value"></p>
                            <input type="text" class="value" value="${target_card_ob.description_ar}">
                            </div>
                            <p>||</p>
                        <div class="info">
                        <p class="label">image : </p>
                        <input type="text" class="value" value="?">
                        </div>
                    </div>
                    <button class="save_button">Save</button>`
            disableAll(card_in_edit_html)
            gitCancelWork(card_in_edit_html, target_card_ob)
            gitSaveWork(card_in_edit_html, "edit")
            gitDeleteWork(card_in_edit_html, target_card_ob)
        })
    })
}

function disableAll(working_card) {
    console.log("working_card = ", working_card)
    let cards_to_disable = Array.from(document.querySelectorAll(".card"))
    Array.from(document.querySelectorAll(".add_card")).forEach((card) => {
        cards_to_disable.push(card)
    })
    cards_to_disable.forEach((card) => {
        card.style.pointerEvents = "none"
    })
}

function gitAddAllWork() {
    let all_add_cards = document.querySelectorAll(".add_card");
    all_add_cards.forEach((add_card, index) => {
        add_card.addEventListener("click", (ev) => {
            let cards_container = ev.target.closest(".cards_container")
            cards_container.querySelector(".add_card").remove()
            cards_container.innerHTML +=
                `<div class="card_in_edit">
                    <div class="title_and_buttons">
                    <h3>Product</h3>
                        <button class="cancel_button">Cancel</button>
                    </div>
                    <div class="info_container">
                        <div class="info">
                            <p class="label">English Name : </p>
                            <input type="text" class="value">
                        </div>
                        <p>||</p>
                        <div class="info">
                            <p class="label">Arabic Name : </p>
                            <input type="text" class="value">
                        </div>
                        <p>||</p>
                        <div class="info">
                            <p class="label">Price : </p>
                            <input type="number" class="value">
                        </div>
                        <p>||</p>
                        <div class="info">
                            <p class="label">English Description : </p>
                            <p class="value"></p>
                            <input type="text" class="value">
                        </div>
                        <p>||</p>
                        <div class="info">
                            <p class="label">Arabic Description : </p>
                            <p class="value"></p>
                            <input type="text" class="value">
                        </div>
                        <p>||</p>
                        <div class="info">
                            <p class="label">image : </p>
                            <input type="text" class="value">
                        </div>
                    </div>
                    <button class="save_button">Save</button>
                </div>`
            card_in_edit_html = cards_container.querySelector(".card_in_edit")
            card_in_edit_html.querySelector(".cancel_button").addEventListener("click", (ev) => {
                window.location.reload()
            })
            gitSaveWork(card_in_edit_html, "add")
            disableAll(card_in_edit_html)
        })
    })
}

function gitCancelWork(cardHTML, card_ob) {
    let cancel_button = cardHTML.querySelector(".cancel_button")
    console.log("cancel_button = ", cancel_button)
    cancel_button.addEventListener("click", (ev) => {
        cardHTML.className = "card"
        cardHTML.innerHTML = `
                <div class="title_and_edit">
                    <h3>${card_ob.name_en}</h3>
                    <button class="edit_button">Edit</button>
                </div>
                <div class="info_container">
                    <div class="info">
                        <p class="label">English Name : </p>
                        <p class="value">${card_ob.name_en}</p>
                    </div>
                    <p>||</p>
                    <div class="info">
                        <p class="label">Arabic Name : </p>
                        <p class="value">${card_ob.name_ar}</p>
                    </div>
                    <p>||</p>
                    <div class="info">
                        <p class="label">Price : </p>
                        <p class="value">${card_ob.price}</p>
                    </div>
                    <p>||</p>
                    <div class="info">
                        <p class="label">English Description : </p>
                        <p class="value">${card_ob.description_en}</p>
                    </div>
                    <p>||</p>
                    <div class="info">
                        <p class="label">Arabic Description : </p>
                        <p class="value">${card_ob.description_ar}</p>
                    </div>
                    <p>||</p>
                    <div class="info">
                        <p class="label">image : </p>
                        <p class="value">?</p>
                    </div>
                </div>`
        window.location.reload()
    })
}

function gitSaveWork(cardHTML, op) {
    let save_button = cardHTML.querySelector(".save_button")
    console.log("cardHTML = ", cardHTML)
    if (op === "edit") {
        console.log("Edit work")
        save_button.addEventListener("click", (ev) => {
            let info = cardHTML.querySelectorAll("input")
            let en_name_in = info[0].value
            let ar_name_in = info[1].value
            let price_in = info[2].value
            let en_des_in = info[3].value
            let ar_des_in = info[4].value
            all_products.forEach(function filter(dish_ob) {     /*home made function (●'◡'●)*/
                if (dish_ob.id === Number(cardHTML.id)) {
                    dish_ob.name_en = en_name_in
                    dish_ob.name_ar = ar_name_in
                    dish_ob.price = price_in
                    dish_ob.description_en = en_des_in
                    dish_ob.description_ar = ar_des_in
                    localStorage.setItem("local_products", JSON.stringify(all_products))
                    window.location.reload()
                }
            })
        })
    }
    else if (op === "add") {
        save_button.addEventListener("click", (ev) => {
            let info = cardHTML.querySelectorAll("input")
            let new_dish = { id: (all_products.length + 1), category: "", name_en: "", name_ar: "", price: 0, description_en: "", description_ar: "" }
            let category = cardHTML.closest("section")
            new_dish.category = category.id
            new_dish.name_en = info[0].value
            new_dish.name_ar = info[1].value
            new_dish.price = info[2].value
            new_dish.description_en = info[3].value
            new_dish.description_ar = info[4].value
            all_products.push(new_dish)
            localStorage.setItem("local_products", JSON.stringify(all_products))
            window.location.reload()
        })
    }
}

function gitDeleteWork(cardHTML, card_ob) {
    let body = document.querySelector("body")
    let delete_button = cardHTML.querySelector(".delete_button")
    delete_button.addEventListener("click", (ev) => {
        main.className = "main_blur"
        body.insertAdjacentHTML("beforeend",
            `<div class="ensure_delete">
            <div class="h3_and_x">
                <h3>Delete Dish!!</h3>
                <i class="bi bi-x-lg"></i>
            </div>
            <hr>
            <p>You can't undo this</p>
            <hr>
            <div class="delete_and_cancel">
                <button class="cancel_button">Cancel</button>
                <button class="delete_button">Delete</button>
            </div>
        </div>`)
        document.querySelector(".ensure_delete i").addEventListener("click", (ev) => {
            document.querySelector(".ensure_delete").remove()
            main.removeAttribute("class")
        })
        document.querySelector(".ensure_delete .cancel_button").addEventListener("click", (ev) => {
            document.querySelector(".ensure_delete").remove()
            main.removeAttribute("class")
        })
        document.querySelector(".ensure_delete .delete_button").addEventListener("click", (ev) => {
            all_products.forEach((dish_ob, index) => {
                if (dish_ob.id === card_ob.id) {
                    all_products.splice(index, 1)
                    localStorage.setItem("local_products", JSON.stringify(all_products))
                    window.location.reload()
                }
            })
        })
    })
}
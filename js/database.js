let products = [
  { id: 1, category: "starters", name_en: "Burrata Salad", name_ar: "سلطة بوراتا", price: 54, file_name: "burrata-salad.html", description_en: "Creamy burrata over fresh greens with cherry tomatoes.", description_ar: "بوراتا كريمية مع خضار طازجة وطماطم كرزية." },
  { id: 2, category: "starters", name_en: "PieRev special Salad", name_ar: "سلطة بايريف الخاصة", price: 39, file_name: "pierev-special-salad.html", description_en: "Our signature house salad with a mix of seasonal ingredients.", description_ar: "سلطة المطعم الخاصة بمكونات موسمية متنوعة." },
  { id: 3, category: "starters", name_en: "Bruschetta Salad", name_ar: "سلطة بروسكيتا", price: 26, file_name: "bruschetta-salad.html", description_en: "Toasted bread topped with tomatoes, basil, and olive oil.", description_ar: "خبز محمص مع طماطم وريحان وزيت زيتون." },

  { id: 4, category: "pasta", name_en: "Arrabbiata", name_ar: "أرابياتا", price: 49, file_name: "arrabbiata.html", description_en: "Spicy tomato sauce with garlic and chili flakes.", description_ar: "صوص طماطم حار بالثوم ورقائق الفلفل الحار." },
  { id: 5, category: "pasta", name_en: "Chicken alfredo", name_ar: "الفريدو بالفراخ", price: 56, file_name: "chicken-alfredo.html", description_en: "Creamy alfredo sauce with grilled chicken breast.", description_ar: "صوص ألفريدو كريمي مع صدر فراخ مشوي." },
  { id: 6, category: "pasta", name_en: "Lasagne", name_ar: "لازانيا", price: 58, file_name: "lasagne.html", description_en: "Layered pasta with meat sauce, bechamel, and cheese.", description_ar: "باستا مطبقة بصوص اللحمة والبشاميل والجبنة." },

  { id: 7, category: "pizza", name_en: "Pepperoni", name_ar: "بيبيروني", price: 62, file_name: "pepperoni.html", description_en: "Classic pizza loaded with pepperoni and mozzarella.", description_ar: "بيتزا كلاسيك محملة بالبيبيروني والموزاريلا." },
  { id: 8, category: "pizza", name_en: "Truffle Pizza", name_ar: "بيتزا الكمأة", price: 75, file_name: "truffle-pizza.html", description_en: "Rich truffle-infused pizza with a blend of cheeses.", description_ar: "بيتزا غنية بنكهة الكمأة مع خليط من الأجبان." },
  { id: 9, category: "pizza", name_en: "Burrata Pizza", name_ar: "بيتزا بوراتا", price: 52, file_name: "burrata-pizza.html", description_en: "Wood-fired pizza topped with creamy burrata cheese.", description_ar: "بيتزا مشوية على الحطب مع جبنة بوراتا كريمية." },
  { id: 10, category: "pizza", name_en: "Alfredo Pizza", name_ar: "بيتزا الفريدو", price: 56, file_name: "alfredo-pizza.html", description_en: "White pizza base with creamy alfredo sauce and cheese.", description_ar: "بيتزا بيضاء بصوص ألفريدو كريمي وجبنة." },
  { id: 11, category: "pizza", name_en: "Pesto Pizza", name_ar: "بيتزا بيستو", price: 64, file_name: "pesto-pizza.html", description_en: "Basil pesto base with mozzarella and cherry tomatoes.", description_ar: "بيتزا بصوص البيستو والموزاريلا والطماطم الكرزية." },
  { id: 12, category: "pizza", name_en: "Cheese goat Pizza", name_ar: "بيتزا جبنة الماعز", price: 57, file_name: "cheese-goat-pizza.html", description_en: "Tangy goat cheese pizza with honey drizzle.", description_ar: "بيتزا بجبنة الماعز مع رشة عسل." },
  { id: 13, category: "pizza", name_en: "Margherita Pizza", name_ar: "بيتزا مارجريتا", price: 62, file_name: "margherita-pizza.html", description_en: "Classic tomato, mozzarella, and fresh basil pizza.", description_ar: "بيتزا كلاسيك بالطماطم والموزاريلا والريحان الطازج." },

  { id: 14, category: "sideDishes", name_en: "Truffle Fries", name_ar: "بطاطس بالكمأة", price: 42, file_name: "truffle-fries.html", description_en: "Crispy fries tossed with truffle oil and parmesan.", description_ar: "بطاطس مقرمشة مع زيت الكمأة وجبنة البارميزان." },

  { id: 15, category: "desserts", name_en: "Tiramisu", name_ar: "تيراميسو", price: 42, file_name: "tiramisu.html", description_en: "Classic Italian coffee-flavored layered dessert.", description_ar: "حلى إيطالي كلاسيك بطبقات ونكهة القهوة." },

  { id: 16, category: "drinks", name_en: "Blueberry mojito", name_ar: "موهيتو التوت الأزرق", price: 26, file_name: "blueberry-mojito.html", description_en: "Refreshing mocktail with blueberry and fresh mint.", description_ar: "موكتيل منعش بالتوت الأزرق والنعناع الطازج." },
  { id: 17, category: "drinks", name_en: "Raspberry mojito", name_ar: "موهيتو التوت", price: 26, file_name: "raspberry-mojito.html", description_en: "Refreshing mocktail with raspberry and fresh mint.", description_ar: "موكتيل منعش بالتوت والنعناع الطازج." },
  { id: 18, category: "drinks", name_en: "Passion Fruit mojito", name_ar: "موهيتو فاكهة الباشون", price: 26, file_name: "passion-fruit-mojito.html", description_en: "Refreshing mocktail with passion fruit and fresh mint.", description_ar: "موكتيل منعش بفاكهة الباشون والنعناع الطازج." },
  { id: 19, category: "drinks", name_en: "Soft drinks", name_ar: "مشروبات غازية", price: 8, file_name: "soft-drinks.html", description_en: "Assorted carbonated soft drinks.", description_ar: "مشروبات غازية متنوعة." },
  { id: 20, category: "drinks", name_en: "Water", name_ar: "مياه", price: 6, file_name: "water.html", description_en: "Bottled still water.", description_ar: "مياه معدنية." },

  { id: 21, category: "coffee", name_en: "Espresso", name_ar: "إسبريسو", price: 10, file_name: "espresso.html", description_en: "Bold and concentrated shot of coffee.", description_ar: "شوت قهوة قوي ومركز." },
  { id: 22, category: "coffee", name_en: "Americano", name_ar: "أمريكانو", price: 10, file_name: "americano.html", description_en: "Espresso diluted with hot water for a smoother taste.", description_ar: "إسبريسو مخفف بالماء الساخن لطعم أنعم." },
  { id: 23, category: "coffee", name_en: "Flat white", name_ar: "فلات وايت", price: 15, file_name: "flat-white.html", description_en: "Espresso with a thin layer of steamed milk foam.", description_ar: "إسبريسو مع طبقة رقيقة من رغوة اللبن." },
  { id: 24, category: "coffee", name_en: "Cappuccino", name_ar: "كابتشينو", price: 16, file_name: "cappuccino.html", description_en: "Espresso topped with steamed milk and thick foam.", description_ar: "إسبريسو مع لبن مبخر ورغوة سميكة." },
  { id: 25, category: "coffee", name_en: "Latte", name_ar: "لاتيه", price: 16, file_name: "latte.html", description_en: "Espresso with a generous amount of steamed milk.", description_ar: "إسبريسو مع كمية وفيرة من اللبن المبخر." },
];

let types = {
  starters: { en: "starters", ar: "المقبلات" },
  pasta: { en: "pasta", ar: "مكرونة" },
  pizza: { en: "pizza", ar: "بيتزا" },
  sideDishes: { en: "sideDishes", ar: "أطباق جانبية" },
  desserts: { en: "dessert", ar: "حلويات" },
  drinks: { en: "drinks", ar: "مشروبات" },
  coffee: { en: "coffee", ar: "قهوة" },
};

let current_language = "en"

let mood_in_database = "light"

if (localStorage.getItem("local_products") === null) {
  localStorage.setItem("local_products", JSON.stringify(products))
}
if (localStorage.getItem("local_types") === null) {
  localStorage.setItem("local_types", JSON.stringify(types))
}
if (localStorage.getItem("local_current_lang") === null) {
  localStorage.setItem("local_current_lang", current_language)
}
if (localStorage.getItem("local_mood") === null) {
  localStorage.setItem("local_mood", mood_in_database)
}

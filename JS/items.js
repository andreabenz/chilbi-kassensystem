// Kategorien
export let categories = [
    { id: 1, name: "Pizza" },
    { id: 2, name: "Flammkuchen" },
    { id: 3, name: "Crêpe" },
    { id: 4, name: "Getränke" },
    { id: 5, name: "Kaffee" },
    { id: 6, name: "Extras"}
]

// Artikel
export let items = [
    // Pizza
    { id: 101, category_id: 1, name: "Simpel", base_price: 10.00 },
    { id: 102, category_id: 1, name: "Waldboden", base_price: 12.00 },
    { id: 103, category_id: 1, name: "Vegiboden", base_price: 11.50 },
    { id: 104, category_id: 1, name: "Salami", base_price: 11.00 },

    // Flammkuchen
    { id: 201, category_id: 2, name: "Brännt - Crème fraîche, Zwiebeln, Speck", base_price: 11.50 },
    { id: 202, category_id: 2, name: "Vegibrännt - Crème fraîche, Zwiebeln", base_price: 10.50 },

    // Crêpe
    { id: 301, category_id: 3, name: "Schinken & Käse", base_price: 7.50 },
    { id: 302, category_id: 3, name: "Zimt & Zucker", base_price: 6.00 },
    { id: 303, category_id: 3, name: "Nutella", base_price: 6.50 },
    { id: 304, category_id: 3, name: "Nutella & Banane", base_price: 7.00 },
    { id: 305, category_id: 3, name: "Apfelmus", base_price: 6.50 },

    // Getränke
    { id: 401, category_id: 4, name: "Cola" },
    { id: 402, category_id: 4, name: "Schorle" },
    { id: 403, category_id: 4, name: "Icetea Peach" },
    { id: 404, category_id: 4, name: "Icetea Lemon" },
    { id: 405, category_id: 4, name: "Rivella" },
    { id: 406, category_id: 4, name: "Citro" },
    { id: 407, category_id: 4, name: "Mineralwasser ohne Kohlensäure" },
    { id: 408, category_id: 4, name: "Mineralwasser mit Kohlensäure" },

    // Kaffee
    { id: 501, category_id: 5, name: "Kaffee" },

    //Extras
    { id: 601, category_id: 6, name: "Pilze", base_price: 0.50 },
    { id: 602, category_id: 6, name: "Schinken", base_price: 1.00 },
    { id: 603, category_id: 6, name: "Salami", base_price: 1.00 },
    { id: 604, category_id: 6, name: "Oliven", base_price: 0.50 },
    { id: 605, category_id: 6, name: "Peperoni", base_price: 0.50 },
    { id: 606, category_id: 6, name: "Crème fraîche", base_price: 0.50 },
    { id: 607, category_id: 6, name: "Speck", base_price: 1.00 },
    { id: 608, category_id: 6, name: "Zwiebeln", base_price: 0.50 }
]

// Varianten Getränke
export let variants = [
    // Grössen Getränke
    { id: 1, size: "3dl", price: 3.0 },
    { id: 2, size: "5dl", price: 4.0 },
    { id: 3, size: "1.5l", price: 10.0 }
]
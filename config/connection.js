import mongoose from "mongoose"
import dotenv from "dotenv"
import colors from "colors"
import Recipe from "../model/recipe.js";
dotenv.config();
let dummyData = [
    {
        title: "Spaghetti Bolognese",
        ingredients: [
            "200g spaghetti",
            "100g minced beef",
            "1 onion",
            "2 garlic cloves",
            "400g canned tomatoes",
            "Salt",
            "Pepper",
            "Olive oil"
        ],
        instructions: "Boil the spaghetti. In another pan, sauté onions and garlic, add minced beef and cook until brown. Add tomatoes, season, and simmer. Serve sauce over spaghetti.",
        image: "https://images.unsplash.com/photo-1603133872876-5a9c49f6e37e"
    },
    {
        title: "Margherita Pizza",
        ingredients: [
            "1 pizza base",
            "100g mozzarella",
            "50g tomato sauce",
            "Fresh basil",
            "Olive oil",
            "Salt"
        ],
        instructions: "Spread tomato sauce on the base, add mozzarella and basil leaves. Drizzle olive oil and bake at 220°C for 10–12 mins.",
        image: "https://images.unsplash.com/photo-1601924582975-4cbb4f74fc5b"
    },
    {
        title: "Chicken Caesar Salad",
        ingredients: [
            "2 chicken breasts",
            "Romaine lettuce",
            "Croutons",
            "Parmesan cheese",
            "Caesar dressing",
            "Salt",
            "Pepper"
        ],
        instructions: "Grill the chicken. Toss lettuce, croutons, and parmesan with dressing. Top with sliced chicken.",
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb36"
    },
    {
        title: "Avocado Toast",
        ingredients: [
            "2 slices whole grain bread",
            "1 ripe avocado",
            "Lemon juice",
            "Salt",
            "Chili flakes"
        ],
        instructions: "Toast bread. Mash avocado with lemon juice and salt. Spread on toast and sprinkle chili flakes.",
        image: "https://images.unsplash.com/photo-1604909053048-5808e3c2e5b3"
    },
    {
        title: "Blueberry Pancakes",
        ingredients: [
            "1 cup flour",
            "1 egg",
            "1 cup milk",
            "2 tbsp sugar",
            "1 tsp baking powder",
            "Blueberries",
            "Butter"
        ],
        instructions: "Mix all ingredients (except blueberries). Pour batter on a hot pan, sprinkle blueberries on top, and cook both sides.",
        image: "https://images.unsplash.com/photo-1587731501232-62d9989b0b35"
    }
];
;

mongoose.connect((process.env.MONGOURI)).then(() => {
    console.log("connection successs".rainbow.bgBlack)

    const insertData = async () => {
        await Recipe.deleteMany();
        await Recipe.insertMany(dummyData);
    }
    insertData();
}).catch((err) => {
    console.log("connection failed with error : ".bgRed + err)
})
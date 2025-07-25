import Recipe from "../model/Recipe.js"

export const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        return res.status(200).json({ success: true, recipes: recipes })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Internal server error" })
    }
}

export const addRecipe = async (req, res) => {

    try {
        const { title, ingredients, instructions, image } = req.body;
        if (!title || !ingredients || !instructions || !image) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        const newRecipe = await Recipe.create({ title, ingredients, instructions, image });
        return res.status(201).json({ success: true, message: "Recipe added successfully", newRecipe })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Internal server error" })
    }
}
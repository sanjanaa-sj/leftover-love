// src/data/recipeDatabase.js

export const recipeDatabase = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    description: "Classic Italian pasta dish with eggs, cheese, and pancetta",
    cookTime: "20 mins",
    rating: 4.5,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "spaghetti",
      "pancetta",
      "eggs",
      "parmesan cheese",
      "black pepper",
      "salt"
    ],
    instructions: [
      "Cook spaghetti according to package instructions",
      "Fry pancetta until crispy",
      "Beat eggs with grated Parmesan cheese",
      "Toss hot pasta with pancetta",
      "Add egg mixture and toss quickly off heat",
      "Season with black pepper and serve immediately"
    ],
    tags: ["Italian", "Pasta", "Quick", "Comfort Food"]
  },
  {
    id: 2,
    name: "Chicken Fried Rice",
    description: "Quick and delicious fried rice with leftover chicken",
    cookTime: "15 mins",
    rating: 4.3,
    servings: 3,
    difficulty: "Easy",
    ingredients: [
      "cooked rice",
      "chicken breast",
      "eggs",
      "soy sauce",
      "garlic",
      "ginger",
      "green onions",
      "vegetable oil"
    ],
    instructions: [
      "Heat oil in a large pan or wok",
      "Scramble eggs and set aside",
      "Stir-fry chicken until heated through",
      "Add rice and break up clumps",
      "Add soy sauce, garlic, and ginger",
      "Stir in eggs and green onions",
      "Serve hot"
    ],
    tags: ["Asian", "Rice", "Leftover", "Quick"]
  },
  {
    id: 3,
    name: "Tomato Basil Pasta",
    description: "Simple pasta with fresh tomatoes and basil",
    cookTime: "25 mins",
    rating: 4.2,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "pasta",
      "tomatoes",
      "fresh basil",
      "garlic",
      "olive oil",
      "onion",
      "salt",
      "pepper"
    ],
    instructions: [
      "Cook pasta according to package directions",
      "Sauté onion and garlic in olive oil",
      "Add chopped tomatoes and cook until soft",
      "Season with salt and pepper",
      "Toss with cooked pasta",
      "Top with fresh basil",
      "Serve immediately"
    ],
    tags: ["Italian", "Vegetarian", "Fresh", "Simple"]
  },
  {
    id: 4,
    name: "Beef Stir Fry",
    description: "Quick beef stir fry with mixed vegetables",
    cookTime: "20 mins",
    rating: 4.4,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "beef strips",
      "broccoli",
      "bell peppers",
      "soy sauce",
      "garlic",
      "ginger",
      "cornstarch",
      "vegetable oil"
    ],
    instructions: [
      "Marinate beef strips in soy sauce and cornstarch",
      "Heat oil in wok over high heat",
      "Stir-fry beef until browned",
      "Add vegetables and stir-fry",
      "Add garlic and ginger",
      "Toss everything together",
      "Serve over rice"
    ],
    tags: ["Asian", "Beef", "Vegetables", "Quick"]
  },
  {
    id: 5,
    name: "Mushroom Risotto",
    description: "Creamy risotto with mixed mushrooms",
    cookTime: "45 mins",
    rating: 4.6,
    servings: 4,
    difficulty: "Hard",
    ingredients: [
      "arborio rice",
      "mushrooms",
      "vegetable broth",
      "white wine",
      "onion",
      "garlic",
      "parmesan cheese",
      "butter"
    ],
    instructions: [
      "Sauté mushrooms and set aside",
      "Sauté onion and garlic in butter",
      "Add rice and stir until translucent",
      "Add wine and stir until absorbed",
      "Add broth gradually, stirring constantly",
      "Fold in mushrooms and parmesan",
      "Serve immediately"
    ],
    tags: ["Italian", "Vegetarian", "Mushrooms", "Creamy"]
  },
  {
    id: 6,
    name: "Chicken Salad",
    description: "Fresh chicken salad with vegetables",
    cookTime: "10 mins",
    rating: 4.1,
    servings: 2,
    difficulty: "Easy",
    ingredients: [
      "cooked chicken",
      "lettuce",
      "tomatoes",
      "cucumber",
      "mayonnaise",
      "celery",
      "lemon juice",
      "salt"
    ],
    instructions: [
      "Dice cooked chicken",
      "Mix with mayonnaise and lemon juice",
      "Add diced celery",
      "Season with salt",
      "Serve over lettuce",
      "Top with tomatoes and cucumber"
    ],
    tags: ["Salad", "Chicken", "Healthy", "No Cook"]
  },
  {
    id: 7,
    name: "Vegetable Soup",
    description: "Hearty soup with mixed vegetables",
    cookTime: "30 mins",
    rating: 4.0,
    servings: 6,
    difficulty: "Easy",
    ingredients: [
      "carrots",
      "celery",
      "onion",
      "potatoes",
      "vegetable broth",
      "tomatoes",
      "green beans",
      "herbs"
    ],
    instructions: [
      "Chop all vegetables",
      "Sauté onion, carrots, and celery",
      "Add potatoes and broth",
      "Simmer for 15 minutes",
      "Add tomatoes and green beans",
      "Season with herbs",
      "Simmer until vegetables are tender"
    ],
    tags: ["Soup", "Vegetarian", "Healthy", "Comfort Food"]
  },
  {
    id: 8,
    name: "Grilled Cheese Sandwich",
    description: "Classic grilled cheese with tomato",
    cookTime: "10 mins",
    rating: 4.2,
    servings: 1,
    difficulty: "Easy",
    ingredients: [
      "bread",
      "cheese",
      "butter",
      "tomato"
    ],
    instructions: [
      "Butter one side of each bread slice",
      "Place cheese between unbuttered sides",
      "Add tomato slices",
      "Cook in pan until golden brown",
      "Flip and cook other side",
      "Serve hot"
    ],
    tags: ["Sandwich", "Comfort Food", "Quick", "Cheese"]
  },
  {
    id: 9,
    name: "Fish Tacos",
    description: "Fresh fish tacos with cabbage slaw",
    cookTime: "25 mins",
    rating: 4.5,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "white fish",
      "tortillas",
      "cabbage",
      "lime",
      "cilantro",
      "mayonnaise",
      "chili powder",
      "garlic"
    ],
    instructions: [
      "Season fish with chili powder and garlic",
      "Cook fish until flaky",
      "Mix cabbage with lime and cilantro",
      "Make sauce with mayonnaise and lime",
      "Warm tortillas",
      "Assemble tacos with fish and slaw",
      "Serve with sauce"
    ],
    tags: ["Mexican", "Fish", "Tacos", "Fresh"]
  },
  {
    id: 10,
    name: "Pancakes",
    description: "Fluffy breakfast pancakes",
    cookTime: "20 mins",
    rating: 4.3,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "flour",
      "milk",
      "eggs",
      "sugar",
      "baking powder",
      "salt",
      "butter",
      "vanilla"
    ],
    instructions: [
      "Mix dry ingredients in a bowl",
      "Whisk wet ingredients separately",
      "Combine wet and dry ingredients",
      "Don't overmix the batter",
      "Cook on griddle until bubbles form",
      "Flip and cook until golden",
      "Serve with syrup"
    ],
    tags: ["Breakfast", "Sweet", "Fluffy", "Classic"]
  }
];

// Common ingredients for suggestions
export const commonIngredients = [
  "eggs", "milk", "butter", "flour", "sugar", "salt", "pepper", "olive oil",
  "garlic", "onion", "tomatoes", "cheese", "chicken", "beef", "pasta",
  "rice", "bread", "potatoes", "carrots", "celery", "broccoli", "lettuce",
  "lemon", "lime", "herbs", "spices", "soy sauce", "vegetable oil"
];

// Export default
export default recipeDatabase;
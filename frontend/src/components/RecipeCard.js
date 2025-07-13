import React, { useState } from 'react';
import { Heart, Clock, Star, Leaf, ChefHat, Eye, EyeOff, User } from 'lucide-react';

// Mock utility functions (you'll need to implement these based on your needs)
const getMatchPercentage = (recipe, availableIngredients) => {
  if (!recipe.ingredients || !availableIngredients) return 0;
  const matchCount = recipe.ingredients.filter(ingredient => 
    availableIngredients.some(available => 
      available.toLowerCase().includes(ingredient.toLowerCase())
    )
  ).length;
  return Math.round((matchCount / recipe.ingredients.length) * 100);
};

const hasIngredient = (ingredient, availableIngredients) => {
  return availableIngredients.some(available => 
    available.toLowerCase().includes(ingredient.toLowerCase())
  );
};

const getMissingIngredients = (recipe, availableIngredients) => {
  return recipe.ingredients.filter(ingredient => 
    !hasIngredient(ingredient, availableIngredients)
  );
};

const getDifficultyColor = (difficulty) => {
  switch (difficulty?.toLowerCase()) {
    case 'easy': return 'text-green-600';
    case 'medium': return 'text-yellow-600';
    case 'hard': return 'text-red-600';
    default: return 'text-gray-600';
  }
};

const RecipeCard = ({ 
  recipe, 
  availableIngredients = [], 
  onSaveRecipe, 
  isSaved = false 
}) => {
  const [showInstructions, setShowInstructions] = useState(false);
  const matchPercentage = getMatchPercentage(recipe, availableIngredients);
  const missingIngredients = getMissingIngredients(recipe, availableIngredients);

  const handleSaveRecipe = () => {
    if (!isSaved && onSaveRecipe) {
      onSaveRecipe(recipe);
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200 bg-white">
      {/* Recipe Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-800 mb-1">
            {recipe.name}
          </h3>
          <p className="text-gray-600 text-sm mb-2 leading-relaxed">
            {recipe.description}
          </p>
          
          {/* Recipe Meta Info */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {recipe.cookTime}
            </span>
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500" />
              {recipe.rating}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {recipe.servings} servings
            </span>
            <span className={`flex items-center gap-1 ${getDifficultyColor(recipe.difficulty)}`}>
              <ChefHat className="w-4 h-4" />
              {recipe.difficulty}
            </span>
          </div>
        </div>
        
        {/* Save Button */}
        <button
          onClick={handleSaveRecipe}
          className={`p-2 rounded-full transition-colors ${
            isSaved 
              ? 'text-red-500 bg-red-50 hover:bg-red-100' 
              : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
          }`}
          disabled={isSaved}
        >
          <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Match Percentage */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm text-gray-600">Ingredient Match</span>
          <span className="text-sm font-medium text-gray-800">{matchPercentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${matchPercentage}%` }}
          />
        </div>
      </div>

      {/* Ingredients List */}
      <div className="mb-3">
        <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-1">
          <Leaf className="w-4 h-4 text-green-500" />
          Ingredients ({recipe.ingredients?.length || 0})
        </h4>
        <div className="space-y-1">
          {recipe.ingredients?.map((ingredient, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <span 
                className={`w-2 h-2 rounded-full ${
                  hasIngredient(ingredient, availableIngredients) 
                    ? 'bg-green-500' 
                    : 'bg-red-500'
                }`}
              />
              <span className={
                hasIngredient(ingredient, availableIngredients) 
                  ? 'text-gray-700' 
                  : 'text-gray-500 line-through'
              }>
                {ingredient}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Missing Ingredients */}
      {missingIngredients.length > 0 && (
        <div className="mb-3 p-2 bg-red-50 rounded-lg">
          <h5 className="font-medium text-red-800 text-sm mb-1">
            Missing Ingredients ({missingIngredients.length})
          </h5>
          <p className="text-red-600 text-xs">
            {missingIngredients.join(', ')}
          </p>
        </div>
      )}

      {/* Instructions Toggle */}
      <div className="border-t pt-3">
        <button
          onClick={() => setShowInstructions(!showInstructions)}
          className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
        >
          {showInstructions ? (
            <>
              <EyeOff className="w-4 h-4" />
              Hide Instructions
            </>
          ) : (
            <>
              <Eye className="w-4 h-4" />
              Show Instructions
            </>
          )}
        </button>
        
        {showInstructions && (
          <div className="mt-3 p-3 bg-gray-50 rounded-lg">
            <h5 className="font-medium text-gray-800 mb-2">Instructions:</h5>
            {recipe.instructions?.map((step, index) => (
              <div key={index} className="mb-2 text-sm text-gray-700">
                <span className="font-medium text-gray-800">{index + 1}. </span>
                {step}
              </div>
            )) || <p className="text-gray-500 text-sm">No instructions available</p>}
          </div>
        )}
      </div>
    </div>
  );
};

// Example usage with sample data
const App = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  
  const sampleRecipe = {
    name: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    cookTime: "20 mins",
    rating: 4.5,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "400g spaghetti",
      "200g pancetta",
      "4 large eggs",
      "100g Parmesan cheese",
      "Black pepper",
      "Salt"
    ],
    instructions: [
      "Cook spaghetti according to package instructions",
      "Fry pancetta until crispy",
      "Beat eggs with grated Parmesan",
      "Toss hot pasta with pancetta",
      "Add egg mixture and toss quickly",
      "Season with black pepper and serve"
    ]
  };

  const availableIngredients = [
    "spaghetti",
    "eggs",
    "Parmesan cheese",
    "black pepper",
    "salt"
  ];

  const handleSaveRecipe = (recipe) => {
    setSavedRecipes([...savedRecipes, recipe]);
  };

  const isRecipeSaved = (recipe) => {
    return savedRecipes.some(saved => saved.name === recipe.name);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Recipe Card Demo</h1>
      <RecipeCard
        recipe={sampleRecipe}
        availableIngredients={availableIngredients}
        onSaveRecipe={handleSaveRecipe}
        isSaved={isRecipeSaved(sampleRecipe)}
      />
    </div>
  );
};

export default App;
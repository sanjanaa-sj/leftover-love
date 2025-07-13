// src/utils/recipeUtils.js

/**
 * Calculate the percentage of ingredients available for a recipe
 * @param {Object} recipe - Recipe object with ingredients array
 * @param {Array} availableIngredients - Array of available ingredient strings
 * @returns {number} Percentage of available ingredients (0-100)
 */
export const getMatchPercentage = (recipe, availableIngredients) => {
  if (!recipe.ingredients || !availableIngredients || recipe.ingredients.length === 0) {
    return 0;
  }
  
  const matchCount = recipe.ingredients.filter(ingredient => 
    hasIngredient(ingredient, availableIngredients)
  ).length;
  
  return Math.round((matchCount / recipe.ingredients.length) * 100);
};
export const findMatchingRecipes = (recipes, availableIngredients) => {
  if (!recipes || !availableIngredients) return [];
  
  return recipes.filter(recipe => {
    // Your matching logic here
    return recipe.ingredients.some(ingredient => 
      availableIngredients.includes(ingredient.toLowerCase())
    );
  });
};

export const calculateImpact = (recipes) => {
  // Your implementation here
};

/**
 * Check if an ingredient is available in the user's ingredients
 * @param {string} ingredient - Ingredient to check
 * @param {Array} availableIngredients - Array of available ingredient strings
 * @returns {boolean} True if ingredient is available
 */
export const hasIngredient = (ingredient, availableIngredients) => {
  if (!ingredient || !availableIngredients) return false;
  
  const normalizedIngredient = ingredient.toLowerCase().trim();
  return availableIngredients.some(available => 
    available.toLowerCase().trim().includes(normalizedIngredient) ||
    normalizedIngredient.includes(available.toLowerCase().trim())
  );
};

/**
 * Get list of missing ingredients for a recipe
 * @param {Object} recipe - Recipe object with ingredients array
 * @param {Array} availableIngredients - Array of available ingredient strings
 * @returns {Array} Array of missing ingredient strings
 */
export const getMissingIngredients = (recipe, availableIngredients) => {
  if (!recipe.ingredients || !availableIngredients) {
    return recipe.ingredients || [];
  }
  
  return recipe.ingredients.filter(ingredient => 
    !hasIngredient(ingredient, availableIngredients)
  );
};

/**
 * Get color class for difficulty level
 * @param {string} difficulty - Difficulty level (easy, medium, hard)
 * @returns {string} Tailwind color class
 */
export const getDifficultyColor = (difficulty) => {
  switch (difficulty?.toLowerCase()) {
    case 'easy':
      return 'text-green-600';
    case 'medium':
      return 'text-yellow-600';
    case 'hard':
      return 'text-red-600';
    default:
      return 'text-gray-600';
  }
};

/**
 * Filter recipes based on available ingredients and minimum match percentage
 * @param {Array} recipes - Array of recipe objects
 * @param {Array} availableIngredients - Array of available ingredient strings
 * @param {number} minMatchPercentage - Minimum match percentage (0-100)
 * @returns {Array} Filtered array of recipes
 */
export const filterRecipesByAvailability = (recipes, availableIngredients, minMatchPercentage = 0) => {
  if (!recipes || !availableIngredients) return [];
  
  return recipes.filter(recipe => {
    const matchPercentage = getMatchPercentage(recipe, availableIngredients);
    return matchPercentage >= minMatchPercentage;
  });
};

/**
 * Sort recipes by ingredient match percentage (highest first)
 * @param {Array} recipes - Array of recipe objects
 * @param {Array} availableIngredients - Array of available ingredient strings
 * @returns {Array} Sorted array of recipes
 */
export const sortRecipesByMatch = (recipes, availableIngredients) => {
  if (!recipes || !availableIngredients) return recipes || [];
  
  return [...recipes].sort((a, b) => {
    const matchA = getMatchPercentage(a, availableIngredients);
    const matchB = getMatchPercentage(b, availableIngredients);
    return matchB - matchA;
  });
};

/**
 * Get recipe statistics
 * @param {Array} recipes - Array of recipe objects
 * @param {Array} availableIngredients - Array of available ingredient strings
 * @returns {Object} Statistics object
 */
export const getRecipeStats = (recipes, availableIngredients) => {
  if (!recipes || !availableIngredients) {
    return {
      totalRecipes: 0,
      availableRecipes: 0,
      perfectMatches: 0,
      averageMatch: 0
    };
  }
  
  const matches = recipes.map(recipe => getMatchPercentage(recipe, availableIngredients));
  const availableRecipes = matches.filter(match => match > 0).length;
  const perfectMatches = matches.filter(match => match === 100).length;
  const averageMatch = matches.reduce((sum, match) => sum + match, 0) / matches.length;
  
  return {
    totalRecipes: recipes.length,
    availableRecipes,
    perfectMatches,
    averageMatch: Math.round(averageMatch)
  };
};

/**
 * Get unique ingredients from all recipes
 * @param {Array} recipes - Array of recipe objects
 * @returns {Array} Array of unique ingredient strings
 */
export const getAllIngredients = (recipes) => {
  if (!recipes) return [];
  
  const allIngredients = recipes.reduce((acc, recipe) => {
    if (recipe.ingredients) {
      acc.push(...recipe.ingredients);
    }
    return acc;
  }, []);
  
  return [...new Set(allIngredients)].sort();
};

/**
 * Format cooking time for display
 * @param {string|number} time - Time in minutes or string format
 * @returns {string} Formatted time string
 */
export const formatCookTime = (time) => {
  if (!time) return 'N/A';
  
  if (typeof time === 'number') {
    if (time < 60) {
      return `${time} mins`;
    } else {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;
      return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
    }
  }
  
  return time.toString();
};

/**
 * Calculate recipe complexity score based on ingredients and cook time
 * @param {Object} recipe - Recipe object
 * @returns {number} Complexity score (1-10)
 */
export const getComplexityScore = (recipe) => {
  if (!recipe) return 1;
  
  const ingredientCount = recipe.ingredients?.length || 0;
  const cookTimeNum = typeof recipe.cookTime === 'number' ? recipe.cookTime : 30;
  
  // Base score on ingredient count (1-5 scale)
  const ingredientScore = Math.min(Math.ceil(ingredientCount / 3), 5);
  
  // Add cook time factor (1-5 scale)
  const timeScore = Math.min(Math.ceil(cookTimeNum / 30), 5);
  
  return Math.min(ingredientScore + timeScore, 10);
};
import React, { useState, useEffect } from 'react';
import Header from './components/Header';

import IngredientInput from './components/IngredientInput';
import RecipeList from './components/RecipeList';
import LoadingScreen from './components/LoadingScreen';
import { NoIngredientsState, NoMatchesState, WelcomeMessage } from './components/EmptyStates';
import { recipeDatabase } from './data/recipeDatabase';
import { findMatchingRecipes } from './utils/recipeUtils';
import './App.css';

function App() {
  // Loading state
  const [isLoading, setIsLoading] = useState(true);
  
  // Existing state management
  const [availableIngredients, setAvailableIngredients] = useState([]);
  const [matchedRecipes, setMatchedRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [totalWasteSaved, setTotalWasteSaved] = useState(0);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Find matching recipes when ingredients change
  useEffect(() => {
    if (!isLoading) {
      const matches = findMatchingRecipes(recipeDatabase, availableIngredients);
      setMatchedRecipes(matches || []);
    }
  }, [availableIngredients, isLoading]);

  // Hide welcome message after first interaction
  useEffect(() => {
    if (availableIngredients.length > 0 && isFirstVisit) {
      setIsFirstVisit(false);
    }
  }, [availableIngredients, isFirstVisit]);

  // Ingredient management functions
  const handleAddIngredient = (ingredient) => {
    const trimmedIngredient = ingredient.trim().toLowerCase();
    if (trimmedIngredient && !availableIngredients.includes(trimmedIngredient)) {
      setAvailableIngredients(prev => [...prev, trimmedIngredient]);
    }
  };

  const handleRemoveIngredient = (ingredient) => {
    setAvailableIngredients(prev => prev.filter(item => item !== ingredient));
  };

  // Recipe management functions
  const handleSaveRecipe = (recipe) => {
    if (!savedRecipes.find(saved => saved.id === recipe.id)) {
      setSavedRecipes(prev => [...prev, recipe]);
      setTotalWasteSaved(prev => prev + parseFloat(recipe.wasteReduction));
    }
  };

  // Load saved data on component mount (simulating persistence)
  useEffect(() => {
    if (!isLoading) {
      // In a real app, this would load from localStorage or API
      const savedData = {
        savedRecipes: [],
        totalWasteSaved: 0,
        availableIngredients: []
      };
      
      if (savedData.savedRecipes.length > 0) {
        setSavedRecipes(savedData.savedRecipes);
        setTotalWasteSaved(savedData.totalWasteSaved);
      }
    }
  }, [isLoading]);

  // Show loading screen
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  // Main app content with enhanced animations
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 app-container">
      {/* Test div - should be red background */}
     
      
      <Header />
      
      <div className="max-w-4xl mx-auto p-6 animate-fade-in">
        {/* Welcome Message for First-Time Users */}
        {isFirstVisit && availableIngredients.length === 0 && (
          <div className="animate-slide-up">
            <WelcomeMessage />
          </div>
        )}

        

        {/* Ingredient Input Section */}
        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <IngredientInput
            availableIngredients={availableIngredients}
            onAddIngredient={handleAddIngredient}
            onRemoveIngredient={handleRemoveIngredient}
          />
        </div>

        {/* Recipe Results Section */}
        {matchedRecipes.length > 0 && (
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <RecipeList
              recipes={matchedRecipes}
              availableIngredients={availableIngredients}
              onSaveRecipe={handleSaveRecipe}
              savedRecipes={savedRecipes}
            />
          </div>
        )}

        {/* Empty States */}
        {availableIngredients.length === 0 && !isFirstVisit && (
          <div className="animate-fade-in">
            <NoIngredientsState />
          </div>
        )}

        {availableIngredients.length > 0 && matchedRecipes.length === 0 && (
          <div className="animate-fade-in">
            <NoMatchesState ingredientCount={availableIngredients.length} />
          </div>
        )}

        {/* Enhanced Footer */}
        <footer className="text-center py-8 mt-12 border-t border-orange-200 animate-fade-in">
          <p className="text-gray-600 text-sm mb-2">
            Made with ❤️ by sanjanaa
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
            <span>🌍 Every meal saved helps the planet</span>
            <span>•</span>
            <span >💚 Cook with love, waste with care</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
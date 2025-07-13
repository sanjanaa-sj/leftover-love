import React from 'react';
import { ChefHat, Heart, Lightbulb, Plus } from 'lucide-react';

export const NoIngredientsState = () => (
  <div className="text-center py-12">
    <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
      <ChefHat className="w-12 h-12 text-orange-500" />
    </div>
    <h3 className="text-xl font-semibold text-gray-700 mb-2">
      Ready to cook something amazing?
    </h3>
    <p className="text-gray-500 mb-4 max-w-md mx-auto">
      Add some ingredients from your fridge and let's create magic together! 
      Every ingredient is a step toward reducing food waste.
    </p>
    <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
      <span className="flex items-center gap-1">
        <Plus className="w-4 h-4 text-green-500" />
        Add ingredients
      </span>
      <span className="flex items-center gap-1">
        <Heart className="w-4 h-4 text-pink-500" />
        Get recipes
      </span>
      <span className="flex items-center gap-1">
        <ChefHat className="w-4 h-4 text-orange-500" />
        Start cooking
      </span>
    </div>
  </div>
);

export const NoMatchesState = ({ ingredientCount }) => (
  <div className="text-center py-12 bg-white rounded-xl shadow-lg border-2 border-orange-100">
    <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
      <Lightbulb className="w-12 h-12 text-yellow-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-700 mb-2">
      No perfect matches yet
    </h3>
    <p className="text-gray-500 mb-4 max-w-md mx-auto">
      {ingredientCount < 3 ? 
        "Try adding a few more ingredients to find delicious recipes!" :
        "Your ingredients are quite unique! Try adding some common staples like eggs, rice, or vegetables."
      }
    </p>
    
    <div className="bg-blue-50 rounded-lg p-4 max-w-md mx-auto">
      <h4 className="font-medium text-blue-800 mb-2">💡 Pro Tips:</h4>
      <ul className="text-sm text-blue-700 space-y-1 text-left">
        <li>• Add basic ingredients like eggs, rice, or pasta</li>
        <li>• Include vegetables or proteins you have</li>
        <li>• Try common pantry items like garlic or onions</li>
        <li>• Most recipes need at least 2-3 matching ingredients</li>
      </ul>
    </div>
  </div>
);

export const LoadingState = () => (
  <div className="text-center py-12">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
    <p className="text-gray-500">Finding perfect recipes for you...</p>
  </div>
);

export const WelcomeMessage = () => (
  <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-6 mb-6 border-2 border-orange-200">
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Welcome to Leftover Love! 
      </h2>
      <p className="text-gray-600 mb-4">
        Transform your leftover ingredients into delicious meals while fighting food waste
      </p>
      <div className="flex items-center justify-center gap-6 text-sm">
        <div className="text-center">
          <div className="bg-green-100 rounded-full p-3 mb-2 inline-block">
            <Heart className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-gray-600">Save Food</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-100 rounded-full p-3 mb-2 inline-block">
            <ChefHat className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-gray-600">Cook Smart</p>
        </div>
        <div className="text-center">
          <div className="bg-purple-100 rounded-full p-3 mb-2 inline-block">
            <Lightbulb className="w-5 h-5 text-purple-600" />
          </div>
          <p className="text-gray-600">Get Creative</p>
        </div>
      </div>
    </div>
  </div>
);
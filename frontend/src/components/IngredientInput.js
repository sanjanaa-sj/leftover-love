import React, { useState } from 'react';
import { Plus, Trash2, X } from 'lucide-react';
import { commomIngridient } from '../data/recipeDatabase';
import { commonIngredients } from '../data/recipeDatabase';

const IngredientInput = ({ 
  availableIngredients, 
  onAddIngredient, 
  onRemoveIngredient 
}) => {
  const [newIngredient, setNewIngredient] = useState('');
  const [showAllCommon, setShowAllCommon] = useState(false);

  const handleAddIngredient = () => {
    if (newIngredient.trim() && !availableIngredients.includes(newIngredient.trim())) {
      onAddIngredient(newIngredient.trim());
      setNewIngredient('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddIngredient();
    }
  };

  const handleQuickAdd = (ingredient) => {
    if (!availableIngredients.includes(ingredient)) {
      onAddIngredient(ingredient);
    }
  };

  const displayedCommonIngredients = showAllCommon 
    ? commonIngredients 
    : commonIngredients.slice(0, 12);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-2 border-orange-100">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
        <Plus className="w-5 h-5 text-orange-500" />
        What's in your fridge?
      </h2>
      
      {/* Manual Input */}
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          value={newIngredient}
          onChange={(e) => setNewIngredient(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add an ingredient (e.g., tomatoes, cheese, rice)..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
        <button
          onClick={handleAddIngredient}
          className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2 font-medium"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      {/* Quick Add Common Ingredients */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-600">Quick add common ingredients:</p>
          <button
            onClick={() => setShowAllCommon(!showAllCommon)}
            className="text-xs text-orange-500 hover:text-orange-600 transition-colors"
          >
            {showAllCommon ? 'Show less' : 'Show all'}
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {displayedCommonIngredients.map(ingredient => (
            <button
              key={ingredient}
              onClick={() => handleQuickAdd(ingredient)}
              disabled={availableIngredients.includes(ingredient)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                availableIngredients.includes(ingredient)
                  ? 'bg-green-100 text-green-700 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700'
              }`}
            >
              {ingredient}
              {availableIngredients.includes(ingredient) && (
                <span className="ml-1">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Current Ingredients */}
      {availableIngredients.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">
              Your ingredients ({availableIngredients.length}):
            </p>
            <button
              onClick={() => availableIngredients.forEach(onRemoveIngredient)}
              className="text-xs text-red-500 hover:text-red-600 transition-colors flex items-center gap-1"
            >
              <X className="w-3 h-3" />
              Clear all
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {availableIngredients.map(ingredient => (
              <div 
                key={ingredient} 
                className="flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full group hover:bg-orange-200 transition-colors"
              >
                <span className="text-sm font-medium">{ingredient}</span>
                <button
                  onClick={() => onRemoveIngredient(ingredient)}
                  className="text-orange-600 hover:text-orange-800 transition-colors opacity-70 group-hover:opacity-100"
                  title={`Remove ${ingredient}`}
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {availableIngredients.length === 0 && (
        <div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-lg">
          <div className="text-gray-400 mb-2">
            <Plus className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm">No ingredients added yet</p>
          </div>
          <p className="text-xs text-gray-500">
            Start by adding ingredients you have available
          </p>
        </div>
      )}
    </div>
  );
};

export default IngredientInput;
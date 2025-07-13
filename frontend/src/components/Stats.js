import React, { useState } from 'react';
import { TrendingUp, Leaf, DollarSign, Droplets } from 'lucide-react';
import { calculateImpact } from '../utils/recipeUtils';

const Stats = ({ totalWasteSaved, savedRecipesCount, matchedRecipesCount }) => {
  const [showDetails, setShowDetails] = useState(false);
  const impact = calculateImpact(totalWasteSaved);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-2 border-orange-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-500" />
          Your Impact
        </h2>
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="text-orange-500 hover:text-orange-600 transition-colors text-sm font-medium"
        >
          {showDetails ? 'Hide' : 'Show'} Details
        </button>
      </div>
      
      <div className="grid grid-cols-3 gap-4 text-center mb-4">
        <div className="bg-green-50 rounded-lg p-3 border border-green-200">
          <div className="text-2xl font-bold text-green-600">
            {totalWasteSaved.toFixed(1)}
          </div>
          <div className="text-sm text-green-700">lbs saved</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
          <div className="text-2xl font-bold text-blue-600">
            {savedRecipesCount}
          </div>
          <div className="text-sm text-blue-700">recipes tried</div>
        </div>
        <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
          <div className="text-2xl font-bold text-purple-600">
            {matchedRecipesCount}
          </div>
          <div className="text-sm text-purple-700">matches found</div>
        </div>
      </div>

      {showDetails && (
        <div className="space-y-3">
          <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Leaf className="w-4 h-4 text-green-500" />
              Environmental Impact
            </h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-green-600 mb-1">
                  <DollarSign className="w-4 h-4" />
                  <span className="font-bold">${impact.costSaved}</span>
                </div>
                <div className="text-gray-600">Money saved</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-blue-600 mb-1">
                  <Leaf className="w-4 h-4" />
                  <span className="font-bold">{impact.co2Reduced} lbs</span>
                </div>
                <div className="text-gray-600">CO2 reduced</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-cyan-600 mb-1">
                  <Droplets className="w-4 h-4" />
                  <span className="font-bold">{impact.waterSaved} gal</span>
                </div>
                <div className="text-gray-600">Water saved</div>
              </div>
            </div>
          </div>
          
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 leading-relaxed">
              <span className="font-semibold text-green-600">Amazing work!</span> You've prevented {totalWasteSaved.toFixed(1)} pounds of food waste. 
              That's like saving {Math.round(totalWasteSaved * 4)} meals from going to the landfill and helping reduce greenhouse gas emissions.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stats;
"use client";
import { useState, useEffect } from "react";

// Function to fetch a list of meal ideas based on the ingredient
const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || []; // Return the meals data or an empty array if no meals are found
};

// Function to fetch detailed meal information
const fetchMealDetails = async (mealId) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  const data = await response.json();
  return data.meals ? data.meals[0] : null; // Return the meal details or null if no meal is found
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [mealDetails, setMealDetails] = useState(null);
  const [selectedMealId, setSelectedMealId] = useState(null);

  // Function to load meal ideas based on the provided ingredient
  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  const handleMealClick = async (mealId) => {
    setSelectedMealId(mealId);
    const details = await fetchMealDetails(mealId);
    setMealDetails(details);
  };

  return (
    <div className="flex-1 max-w-sm m-4 bg-[#111827] p-4 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-white mb-4">Meal Ideas:</h3>
      <div>
        {meals.length > 0 ? (
          <>
            <h1 className="text-white mb-4">Here are some meal ideas using "{ingredient}":</h1>
            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                className="p-3 mb-4 bg-[#1f2937] hover:bg-[#f97316] cursor-pointer rounded-lg shadow-md transition-all duration-300"
                onClick={() => handleMealClick(meal.idMeal)}
              >
                <h2 className="text-lg font-medium text-white">{meal.strMeal}</h2>
                {mealDetails && selectedMealId === meal.idMeal && (
                  <div className="mt-3 text-sm text-gray-300">
                    <h3 className="text-xs mb-2">Ingredients needed:</h3>
                    <ul>
                      {Array.from({ length: 20 }).map((_, index) => {
                        const ingredient = mealDetails[`strIngredient${index + 1}`];
                        const measure = mealDetails[`strMeasure${index + 1}`];
                        return ingredient ? (
                          <li key={index} className="text-gray-400">
                            {`${ingredient} (${measure})`}
                          </li>
                        ) : null;
                      })}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </>
        ) : (
          <p className="text-white">No meal ideas found for this ingredient.</p>
        )}
      </div>
    </div>
  );
}

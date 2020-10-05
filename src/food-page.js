import React from "react";
import breakfastMenu from "./components/menu-items";
import lunchMenu from "./components/lunch-menu-items";
import dinnerMenu from "./components/dinner-menu-list";
import dessertMenu from "./components/dessert-menu-list";
import appSnackMenu from "./components/app-snack-menulist";
let foodItem = "";
let foodIngredients = "";
let foodRecipe = "";
function FoodPage(id, mealType) {
  foodSort(mealType, id);
  return (
    <main>
      <h2>{foodItem}</h2>
      <div>
        <ul>
          <li>{foodIngredients}</li>
        </ul>
      </div>
      <div>{foodRecipe}</div>
    </main>
  );
}

function foodSort(mealType, idName) {
  if (mealType === "breakfast") Breakfast(idName);
  else if (mealType === "lunch") Lunch(idName);
  else if (mealType === "dinner") Dinner(idName);
  else if (mealType === "dessert") Dessert(idName);
  else if (mealType === "appetizers/snacks") App_Snack(idName);
}

function Breakfast(idName) {
  for (let i = 0; i < breakfastMenu.length; i++) {
    const foodData = breakfastMenu[i];
    displayRecipe(foodData, idName);
  }
}

function Lunch(idName) {
  for (let i = 0; i < lunchMenu.length; i += 1) {
    const foodData = lunchMenu[i];
    displayRecipe(foodData, idName);
  }
}

function Dinner(idName) {
  for (let i = 0; i < dinnerMenu.length; i += 1) {
    const foodData = dinnerMenu[i];
    displayRecipe(foodData, idName);
  }
}

function Dessert(idName) {
  for (let i = 0; i < dessertMenu.length; i += 1) {
    const foodData = dessertMenu[i];
    displayRecipe(foodData, idName);
  }
}

function App_Snack(idName) {
  for (let i = 0; i < appSnackMenu.length; i += 1) {
    const foodData = appSnackMenu[i];
    displayRecipe(foodData, idName);
  }
}

function displayRecipe(foodData, idName) {
  if (idName === foodData.Item) {
    foodItem = foodData.Item;
    foodIngredients = foodData.Ingredients;
    foodRecipe = foodData.Recipe;
    console.log(foodItem);
    console.log(foodIngredients);
  }
}
export default FoodPage;

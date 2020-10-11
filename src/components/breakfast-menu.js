import React from "react";
import FoodPage from "../food-page.js";
import breakfastMenuItems from "./menu-items.js";
import { Link } from "react-router-dom";

function BreakfastMenu() {
  return (
    <main>
      <h2>Breakfast</h2>
      <div>
        {breakfastMenuItems.map((breakfastElement) => {
          return (
            <ul key={breakfastElement.key}>
              <li key={breakfastElement.Item}>
                <Link
                  to="/foodpage"
                  onClick={() => FoodSelected(breakfastElement.Item)}
                >
                  <button>{breakfastElement.Item}</button>
                </Link>
              </li>
            </ul>
          );
        })}
      </div>
    </main>
  );
}

function FoodSelected(id) {
  if (id !== "breakfast") return FoodPage(id, "breakfast");
}

export default BreakfastMenu;

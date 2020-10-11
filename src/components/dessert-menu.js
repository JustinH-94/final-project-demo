import React from "react";
import dessertMenuItems from "./dessert-menu-list";
import { Link } from "react-router-dom";
import FoodPage from "../food-page.js";
function DessertMenu() {
  return (
    <main>
      <h2>Dessert</h2>
      <div>
        {dessertMenuItems.map((dessertElement) => {
          return (
            <ul>
              <li>
                <Link
                  to="/foodpage"
                  onClick={() => FoodSelected(dessertElement.Item)}
                >
                  <button>{dessertElement.Item}</button>
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
  if (id !== "dessert") return FoodPage(id, "dessert");
}

export default DessertMenu;

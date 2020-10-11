import React from "react";
import { Link } from "react-router-dom";
import FoodPage from "../food-page";
import LunchMenuItems from "./lunch-menu-items";
function LunchMenu() {
  return (
    <main>
      <h2>Lunch</h2>
      <div>
        {LunchMenuItems.map((lunchElement) => {
          return (
            <ul key={lunchElement.key}>
              <li key={lunchElement.Item}>
                <Link
                  to="/foodpage"
                  onClick={() => FoodSelected(lunchElement.Item)}
                >
                  <button>{lunchElement.Item}</button>
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
  if (id !== "lunch") return FoodPage(id, "lunch");
}
export default LunchMenu;

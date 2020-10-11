import React from "react";
import { Link } from "react-router-dom";
import FoodPage from "../food-page";
import DinnerMenuList from "./dinner-menu-list";
function DinnerMenu() {
  return (
    <main>
      <h2>Dinner</h2>
      <div>
        {DinnerMenuList.map((dinnerElement) => {
          return (
            <ul>
              <li>
                <Link
                  to="/foodpage"
                  onClick={() => FoodSelected(dinnerElement.Item)}
                >
                  <button>{dinnerElement.Item}</button>
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
  if (id !== "dinner") return FoodPage(id, "dinner");
}
export default DinnerMenu;

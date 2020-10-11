import React from "react";
import { Link } from "react-router-dom";
import FoodPage from "../food-page";
import appsnackMenuList from "./app-snack-menulist";
function AppSnackMenu() {
  return (
    <main>
      <h2>Appetizers/Snacks</h2>
      <div>
        {appsnackMenuList.map((appSnackElement) => {
          return (
            <ul>
              <li>
                <Link
                  to="/foodpage"
                  onClick={() => FoodSelected(appSnackElement.Item)}
                >
                  <button>{appSnackElement.Item}</button>
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
  if (id !== "appetizers/snacks") return FoodPage(id, "appetizers/snacks");
}
export default AppSnackMenu;

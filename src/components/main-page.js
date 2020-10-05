import React from "react";
import { Link } from "react-router-dom";
function MainPage() {
  return (
    <main>
      <button>
        <Link to="/breakfast">Breakfast</Link>
      </button>
      <button>
        <Link to="/lunch">Lunch</Link>
      </button>
      <button>
        <Link to="/dinner">Dinner</Link>
      </button>
      <button>
        <Link to="/dessert">Dessert</Link>
      </button>
      <button>
        <Link to="/app-snack">Appetizer/Snacks</Link>
      </button>
    </main>
  );
}

export default MainPage;

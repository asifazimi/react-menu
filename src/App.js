import React, { useState } from "react";
// components
import Menu from "./components/Menu";
import Categories from "./components/Categories";
// Data
import items from "./data";

function App() {
  // Getting all the Categories. New Set -> represents unique categories
  const allCategories = ["all", ...new Set(items.map((item) => item.category))];

  const [menuItems, setMenuItems] = useState(items);
  const [itemCategories, setItemCategories] = useState(allCategories);

  // Filter items
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories itemCategories={itemCategories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;

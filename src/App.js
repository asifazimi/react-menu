import React, { useState } from "react";
// components
import Menu from "./components/Menu";
import Categories from "./components/Categories";
// Data
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [category, setCategory] = useState(items);

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
        <Categories filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;

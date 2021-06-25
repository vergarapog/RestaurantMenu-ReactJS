import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = [
  "all",
  ...new Set(
    items.map((i) => {
      return i.category;
    })
  ),
];

console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((i) => {
      if (i.category === category) {
        return i;
      }
    });
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterFunc={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;

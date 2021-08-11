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

  class Person {
    constructor(name) {
      this.name = name;
    }
    walk() {
      console.log(`walk ${this.name}`);
    }
  }

  const per1 = new Person("brian");
  console.log(per1);
  per1.walk();

  return (
    <main>
      <section className="menu section">
        <div className="title-container">
          <div className="title">
            <h2>Jabee Favorites</h2>
            <div className="underline"></div>
          </div>
        </div>

        <Categories categories={categories} filterFunc={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;

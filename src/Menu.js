import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((mItem) => {
        const { id, title, img, desc, price } = mItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <div className="price">₱{price}</div>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;

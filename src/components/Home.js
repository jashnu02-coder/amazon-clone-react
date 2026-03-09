import React from "react";
import Product from "./Product";
import Banner from "../components/Banner";
import "./Home.css";

import logo from "../images/Logo.jpeg";
import laptop from "../images/Laptop.jpeg";
import headphones from "../images/Headphones.jpeg";
import keyboard from "../images/Keyboard.jpeg";
import curtains from "../images/curtains.jpeg";
import dress from "../images/Dress.jpeg";
import fragnances from "../images/Fragnances.jpeg";
import handbags from "../images/Handbags.jpeg";
import kidswear from "../images/Kidswear.jpeg";
import kitchenset from "../images/Kitchenset.jpeg";
import luggage from "../images/Luggage.jpeg";
import makeupset from "../images/Makeupset.jpeg";
import shoes from "../images/Shoes.jpeg";

function Home({ search }) {

  const products = [
    { id: 1, title: "Laptop", price: 50000, rating: 5, image: laptop },
    { id: 2, title: "Headphones", price: 2000, rating: 4, image: headphones },
    { id: 3, title: "Keyboard", price: 1500, rating: 3, image: keyboard },
    { id: 4, title: "Curtains", price: 700, rating: 3, image: curtains },
    { id: 5, title: "Long Frock", price: 900, rating: 2, image: dress },
    { id: 6, title: "Perfumes", price: 1500, rating: 3, image: fragnances },
    { id: 7, title: "Handbags", price: 600, rating: 4, image: handbags },
    { id: 8, title: "Kids Dresses", price: 600, rating: 4, image: kidswear },
    { id: 9, title: "Kitchen Set", price: 1000, rating: 4, image: kitchenset },
    { id: 10, title: "Luggage Bag", price: 600, rating: 4, image: luggage },
    { id: 11, title: "Makeup Set", price: 600, rating: 4, image: makeupset },
    { id: 12, title: "Shoes", price: 600, rating: 4, image: shoes },
  ];

  // Filter products based on search input
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search)
  );

  return (
    <div className="home">
      {/* Banner under header */}
      <Banner />

      <div className="home_container">
        {/* Display all products in a row */}
        <div className="home_row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            ))
          ) : (
            <h2>No products matched</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
import React from 'react';
import './Blog.css';
import balance from "/src/assets/balance.jpg";
import fruit from "/src/assets/fruit.png";
import food from "/src/assets/food.png";
import paneer from "/src/assets/paneer.jpg";
import pulses from "/src/assets/pulses.png";
import vegetables from "/src/assets/vegetables.jpg";

const cardsData = [
  {
    id: 1,
    image: balance ,
    title: "Power of Plant-Based Nutrition",
    content: "A perfect balance of vegetables, legumes, and healthy fats fuels the body naturally. This nutrient-dense mix supports heart health and boosts daily energy. Going plant-based is a simple step toward long-term wellness."
  },
  {
    id: 2,
    image: fruit ,
    title: "Nature’s Sweet Energy",
    content: "Fruits are rich in antioxidants, hydration, and natural sugar. They cleanse the body, improve digestion, and boost skin health. Adding them daily refreshes the body and mind from within."
  },
  {
    id: 3,
    image: food,
    title: "Balanced Vegetarian Diet",
    content: "A wholesome combination of paneer and fresh vegetables offers complete nutrition. It delivers protein, fiber, and vitamins in a delicious, fulfilling way. Ideal for active lifestyles focused on strength and balance."
  },
  {
    id: 4,
    image: paneer,
    title: "Protein-Rich Delight",
    content: "Paneer is packed with high-quality protein and essential minerals. It supports muscle growth, bone strength, and long-lasting satiety. A great addition to vegetarian diets focused on performance and health."
  },
  {
    id: 5,
    image: pulses ,
    title: "Superfood for Strength",
    content:  "Pulses are rich in plant protein, iron, and complex carbs. They improve heart health, digestion, and overall stamina. A daily dose keeps you energized and nutritionally balanced."
  },
  {
    id: 6,
    image: vegetables ,
    title: "Freshness for Vitality",
    content: "Fresh vegetables provide vitamins, antioxidants, and disease-fighting nutrients. They purify the system and keep the immune system strong. Eating seasonal, colorful produce supports full-body wellness."
  },
];

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="cards-wrapper">
        {cardsData.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.image} alt={card.title} />
            <h3 className="card-title">{card.title}</h3>
            <p className="card-content">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

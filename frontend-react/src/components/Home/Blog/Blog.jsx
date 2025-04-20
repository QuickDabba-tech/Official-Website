import React, { useEffect, useState } from "react";
import "./Blog.css";


const Blog = () => {
  const [index, setIndex] = useState(0);

  const cards = [
    { id: 1, title: "Power of Plant-Based Nutrition", content: "A perfect balance of vegetables, legumes, and healthy fats fuels the body naturally. This nutrient-dense mix supports heart health and boosts daily energy. Going plant-based is a simple step toward long-term wellness.", img: "../../assets/balance.jpg" },
    { id: 2, title: "Nature’s Sweet Energy", content: "Fruits are rich in antioxidants, hydration, and natural sugar. They cleanse the body, improve digestion, and boost skin health. Adding them daily refreshes the body and mind from within.", img: "../../assets/fruit.png" },
    { id: 3, title: "Balanced Vegetarian Diet", content: "A wholesome combination of paneer and fresh vegetables offers complete nutrition. It delivers protein, fiber, and vitamins in a delicious, fulfilling way. Ideal for active lifestyles focused on strength and balance.", img: "../../assets/food.png" },
    { id: 4, title: "Protein-Rich Delight", content: "Paneer is packed with high-quality protein and essential minerals. It supports muscle growth, bone strength, and long-lasting satiety. A great addition to vegetarian diets focused on performance and health.", img: "../../assets/paneer.jpg" },
    { id: 5, title: "Superfood for Strength", content: "Pulses are rich in plant protein, iron, and complex carbs. They improve heart health, digestion, and overall stamina. A daily dose keeps you energized and nutritionally balanced.", img: "../../assets/pulses.png" },
    { id: 6, title: "Freshness for Vitality", content: "Fresh vegetables provide vitamins, antioxidants, and disease-fighting nutrients. They purify the system and keep the immune system strong. Eating seasonal, colorful produce supports full-body wellness.", img: "../../assets/vegetables.jpg" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 6000); // 

    return () => clearInterval(interval);
  }, [6000]);

  const isMobile = window.innerWidth <= 642;
  const isCard = window.innerWidth <= 487;

  return (
    <div className="blog-container">
      <div className="slider-wrapper">
        <div className="slider" style={{
          transform: isMobile ? 'none' : `translateX(-${index * 100}%)`,
          transition: isMobile ? 'none' : 'transform 0.5s ease-in-out',
        }}>
          <div className="slide">
            {isCard
              ? cards.slice(0, 2).map(card => (
                <div key={card.id} className="card">
                  <img src={card.img} alt={card.title} />
                  <h2>{card.title}</h2>
                  <p>{card.content}</p>
                </div>
              ))
              : cards.slice(0, 3).map(card => (
                <div key={card.id} className="card">
                  <img src={card.img} alt={card.title} />
                  <h2>{card.title}</h2>
                  <p>{card.content}</p>
                </div>
              ))
            }
          </div>
          <div className="slide">
            {isCard
              ? cards.slice(2, 4).map(card => (
                <div key={card.id} className="card">
                  <img src={card.img} alt={card.title} />
                  <h2>{card.title}</h2>
                  <p>{card.content}</p>
                </div>
              ))
              : cards.slice(3, 6).map((card) => (
              <div key={card.id} className="card">
                <img src={card.img} alt={card.title} />
                <h2>{card.title}</h2>
                <p>{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;


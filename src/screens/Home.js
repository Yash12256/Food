import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// import axios from 'axios';

const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();
    console.log(response.foodData)
    setFoodItem(response.foodData.food_items);
    setFoodCat(response.foodData.food_category);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <Carousel />
      <div className='container'>
        {foodCat && foodCat.length !== 0
          ? foodCat.map((category) => {
              return (
                <div key={category._id} style={{display: 'flex', flexDirection: 'row'}}>
                  <div className='fs-3 m-3'>{category.CategoryName}</div>
                  <hr />
                  {foodItem
                    .filter((item) => item.CategoryName === category.CategoryName)
                    .map((item) => ( 
                      // <Card key={item._id} />
                      <Card
                      arr={item}
                      />
                    ))}
                </div>
              );
            })
          : null}
      </div>
      <Footer />
    </div>
  );
};

export default Home;







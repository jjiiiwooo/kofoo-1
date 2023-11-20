import React from 'react';

const Nutrition = ({food}) => {
    return (
        <div>
            <h3>{food.Foodingredient}</h3>
            <h3>{food.Foodcalorie}</h3>
            <h3>{food.Foodprotein}</h3>
            <h3>{food.Foodfat}</h3>
            <h3>{food.Foodcarbohydrate}</h3>
            <h3>{food.Foodsugars}</h3>
            <h3>{food.Foodcalcium}</h3>
            <h3>{food.FoodIron}</h3>
            <h3>{food.Foodpotassium}</h3>
        </div>
    );
};

export default Nutrition;
import React from 'react';

const MenuItem = (props) => {
    
    return (
        <div>
            <div key={props.food.Id}><img src={props.food.FoodImage} alt={props.food.caption} />
                <p>{props.food.FoodName}</p>
            </div>
            
        </div>
    );
};

export default MenuItem;
import { useState, useEffect } from 'react';
import axios from 'axios';
import MenuItem from './MenuItem';

const MenuList = () => {
    const [menu, setMenu] = useState([]);
    //API 요청이 대기 중인지 판별
    //요청이 대기 중일때는 true, 요청이 끝나면 false
    const [loading, setLoading] = useState(false);

    const getMenu = async() => {
     setLoading(true);
     try{
         //axios.get()을 사용하여 데이터 가져오기
         const response = await axios.get('http://localhost:3001/food');
         setMenu(response.data);
     } catch(error) {
         console.log('Error fetching data:',error);
       }
       setLoading(false);
     }
     
    useEffect(()=>{
     getMenu();
    },[]);

    //대기 중일때 
    if(loading) {
        return <div>대기 중...</div>;
    }

    //menu값이 유효할 때
    return (
        <div>
            {menu.map(food => (
                <MenuItem key={food.Id} food={food} />
            ))}
        </div>
    );
};

export default MenuList;
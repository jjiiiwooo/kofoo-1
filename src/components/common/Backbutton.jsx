import React from 'react';
import { useNavigate } from 'react-router-dom';

const Backbutton = () => {
    const navigate = useNavigate();

    const BackClick = () => {
        navigate(-1);
    }
    return (
        <div>
            <button onClick={BackClick}>뒤로가기</button>
        </div>
    );
};

export default Backbutton;
import styled from 'styled-components';
import MenuList from '../components/MenuList';

const MenuBlock = styled.div`
    .logo {
        img {
            margin: 0 auto;
            display: flex;
            width: 200px;
            height: 121px;
            left: 574px;
            top: 85px;
        }
    }

    .text {
        h1 {
            width:100%;
            text-align:center;
            margin: 0 auto;
            display: block;
            margin:5rem;
            font-family: 'IBM Plex Mono';
            font-style: normal;
            font-weight: 400;
            font-size: 60.84px;
            line-height: 50px;

        }
    }

`;
const Menu = () => {
    const imogi = "/img/imogimenu.png";

    return (
        <MenuBlock>
            <div className="logo">
                <img src={imogi} alt=""/>
            </div>

            <div className="text">
                <h1>This is the menu of the Resutraunt</h1>
            </div>
            
            <MenuList />     
        </MenuBlock>
    );
};

export default Menu;
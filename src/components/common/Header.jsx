import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const HeaderBlock = styled.div`
    position:fixed;
    width:100%;
    background: white;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.08);
`;

const Wrapper = styled.div`
    height:6rem;
    display: flex;
    align-items:center;
    justify-content: space-between;

    .logo {
        position: flex;
        width: 200.57px;
        height: 210.35px;
        left: 3px;
        top: 26px;
    }

    .right {
        display: flex;
        align-items: center;
        padding:2px;
    }
`;

const Spacer = styled.div`
    height:6rem;
`;

const Button = styled.button`
    border:none;
    border-radius: 4px;
    font-size:2rem;
    font-weight:bold;
    padding:0.25rem lrem;
    color:white;
    cursor:pointer;
    background:#FBCCCC;
`;


const Header = () => {
    const logo = "/img/logo.png";
    const navigate = useNavigate();

    const onLogout = () => {
        alert('logout');
        navigate("/");
    }

    return (
        <>
        <HeaderBlock>
            <Wrapper>
                <img className="logo"src={logo} alt=""/>
            <div className="right">
                <Button onClick={onLogout}>로그아웃</Button>
            </div>
            </Wrapper>
        </HeaderBlock>
        <Spacer/>
         </>
    );
};

export default Header;
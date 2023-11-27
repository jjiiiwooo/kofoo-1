import {useContext} from 'react';
import AuthContext from '../../Context/AuthContext';

const Header = () => {
    const {isLoggedIn, logout} = useContext(AuthContext);

    return (
      <header>
        <nav>
            {isLoggedIn &&(<button onClick={logout}>로그아웃</button>)}
        </nav>
      </header>
    );
};

export default Header;
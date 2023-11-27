import { useState } from "react";
import AuthContext from "./AuthContext";

//Provider를 사용하며 Context의 value 변경 가능
const AuthProvider = ({children}) => {
    //로그인 상태 
    const [isLoggedin, setIsLoggedIn] = useState(false);
    //유저 정보
    const [user, setUser] = useState(null);

    //로그인
    const login = (nickname) => {
        setIsLoggedIn(true);
        setUser(nickname);
    };

    //로그아웃
    const logout= () => {
        setIsLoggedIn(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{isLoggedin,login,user,logout}}>
                {children}
            </AuthContext.Provider>
    
    );
};

export default AuthProvider;
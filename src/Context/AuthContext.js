import { createContext, useReducer, useContext} from "react";

 //초기상태
 const initialState = {
    isLoggedIn:false,
    currentUser:{
        email:null,
        password:null,
        nickname:null,
    }, //현재 로그인한 유저 
};

//리듀서 함수 
//state: 현재 가리키고 있는 상태
//dispatch:액션을 발생시키는 함수 
const reducer = (state,action) => {
    switch(action.type) {
        case 'LOGIN' :
            return {
                ...state, //불변성 유지
                isLoggedIn:true,
                user:action.payload,
            };
        case 'LOGOUT' : 
            return {
                ...state,
                isLoggedIn:false,
                user:null,
            };
        case 'SET_CURRENT_USER' :
            return {
                ...state,
                currentUser:action.payload
            }
        //아무것도 해당되지 않을 시 기본 상태 반환
        default:
            return state;
    }
}

//Context 객체 생성
const AuthContext = createContext();

//createContext.Provider 작성
const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    // 로그인 액션을 디스패치하는 함수
    const login = (user) => {
      dispatch({ type: 'LOGIN', payload: user });
    };
    
    // 로그아웃 액션을 디스패치하는 함수
    const logout = () => {
      dispatch({ type: 'LOGOUT' });
    };

  
    return (
      <AuthContext.Provider value={{ state,dispatch, login, logout,}}>
        {children}
      </AuthContext.Provider>
    );
  };

  export const useUserContext = () => useContext(AuthContext);
  
  export { AuthContext, AuthProvider };
  

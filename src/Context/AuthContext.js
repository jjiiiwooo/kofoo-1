import { createContext, useReducer} from "react";

 //초기상태
 const initialState = {
    isLoggedIn:false,
    user:null,
    show:false, //헤더, 푸터 표시여부
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
        case 'SHOW' :
            return {
                ...state,
                show:action.payload,
            };
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

    //헤더 표시 액션을 디스패치
    const show = () => {
        dispatch({type:'SHOW'});
    }
  
    return (
      <AuthContext.Provider value={{ state, login, logout,show}}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export { AuthContext, AuthProvider };
  

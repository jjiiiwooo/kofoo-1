import { createContext } from "react";

//createContext 함수를 사용해 AuthContext 생성
//로그인 상태와, 사용자 정보 저장
const AuthContext = createContext();

export default AuthContext;
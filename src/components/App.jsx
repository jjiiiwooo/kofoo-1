import React from "react";
import {Routes,Route, BrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Main from "../pages/Main";
import UserPicture from "../pages/UserPicture";
import MapSearching from "../pages/MapSearching";
import MenuDetail from "../pages/MenuDetail";
import MenuList from "../pages/MenuList";
import Mypage from "../pages/Mypage";
import { AuthProvider } from "../Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="/login/main" element={<Main />} />
          <Route path="/login/main/mypage" element={<Mypage/>}/>
          <Route path="/login/main/picture" element={<UserPicture />} />
          <Route path="/login/main/map" element={<MapSearching />} />
          <Route path="/login/main/picture/menu" element={<MenuList/>} />
          <Route path="/login/main/picture/menu/detail/:id" element={<MenuDetail />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    
  );
}


export default App;
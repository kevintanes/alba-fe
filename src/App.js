import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import { Box } from '@chakra-ui/react';
import ProfilePage from './pages/ProfilePage';
import Footer from "./components/Footer"
import { API_AUTEN } from './helper';
import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { authLoginAction } from "./reducers/auth";

function App() {
  const dispatch = useDispatch();

  const keepLogin = async () => {
    try {
      let email = localStorage.getItem("userAuth");
      if (email) {
        let res = await axios.post(`${API_AUTEN}`, {
          email: email,
          password: "asdf"
        });

        localStorage.setItem("userlogin", res.data.token);
        dispatch(authLoginAction(res.data))
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    keepLogin();
  }, []);


  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;

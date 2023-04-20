import { useState, useEffect } from "react";
import "./App.css";
import LoginForm from "./components/Login/loginForm";
import Navbar from "./components/Navbar/Navbar";
import RegisterForm from "./components/Register/RegisterForm";
import Home from "./components/Home/Home";
import { Card, CardBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "./redux/LoginStore";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Router Imprt
import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

//Firebase
import { auth } from "./config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

function App() {
  const dispatch = useDispatch();
  const baseUrl = process.env.REACT_APP_MY_URL

  const [user, setUser] = useState({});

  const [getUserName, setUserName] = useState("");

  const isLoggedIn = useSelector((state) => {
    // console.log(state.login)
    return state.login;
  });

  useEffect(() => {
    const my_login = localStorage.getItem("LoggedIn");
    if (my_login) {
      dispatch(createAction.login());
    } else {
      dispatch(createAction.logout());
    }
  }, []);

  const register = async (data) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        data.registerEmail,
        data.registerPassword
      );

      window.open(`${baseUrl}/login`, "_self");
    } catch (err) {
      toast.error('Invalid Email or Password!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log(err.message);
    } 
  };

  const login = async (data, UserName) => {
    UserName = data.loginEmail;
    let user;
    try {
      user = await signInWithEmailAndPassword(
        auth,
        data.loginEmail,
        data.loginPassword
      );
    } catch (err) {
      console.log(err.message);
      toast.error("Invalid Credentials!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      if (user) {
        dispatch(createAction.login());
        setUserName(UserName);
        localStorage.setItem("LoggedIn", "1");
      }
    }
  };

  const logout = async () => {
    await signOut(auth);
    dispatch(createAction.logout());
    localStorage.removeItem("LoggedIn");
  };

  useEffect(() => {
    auth.onAuthStateChanged((currUser) => {
      setUser(currUser);
    });
  }, []);

  return (
    <>
      <Router>
        <div className="App">
          <Navbar onLogout={logout} />
          {!isLoggedIn && (
            <Routes>
              <Route path="/login" element={<LoginForm onLogin={login} />} />
              <Route
                path="/signup"
                element={<RegisterForm onRegister={register} />}
              />
            </Routes>
          )}
        </div>
        {isLoggedIn && <Home getUser={getUserName} />}
      </Router>
      {/* Instruction to Use */}
      {!isLoggedIn && (
        <div className="card_home">
          <Card>
            <CardBody>
              <h5>This App Is About To Get Info About github user</h5>
              <h6>Steps:</h6>
              <div>1. First Create Account</div>
              <div>2. Login with that Account</div>
              <div>3. Search Name of GitHub User</div>
            </CardBody>
          </Card>
          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default App;

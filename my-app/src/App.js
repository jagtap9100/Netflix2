import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../src/componuts/auth";
import { login, logout, selectUser } from "./features/userslice";
import Homwscreen from "./componuts/Homwscreen";
import Profile from "./componuts/Profile";
import LoginScrren from "./componuts/LoginScrren";
import Loading from "./componuts/Loading";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
      setLoading(false); // Set loading to false after the state is resolved
    });

    return unsubscribe;
  }, [dispatch]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    ); // Show a loading indicator until the state is resolved
  }

  return (
    <BrowserRouter>
      {!user ? (
        <LoginScrren />
      ) : (
        <Routes>
          <Route path="/" element={<Homwscreen />} />
          <Route path="/user" element={<Profile />} />
          <Route path="/success" element={<Homwscreen />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;

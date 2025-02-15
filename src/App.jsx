import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Ranks from "./pages/ranks/Ranks";
import AddStudent from "./pages/addStudent/AddStudent";
import NavBar from "./components/navbar/NavBar";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { getStudents } from "./redux/actions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rank" element={<Ranks />} />
        <Route path="/add-student" element={<AddStudent />} />
      </Routes>
    </div>
  );
}

export default App;

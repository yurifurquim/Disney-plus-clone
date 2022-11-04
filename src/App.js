import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from "./components/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import {
  Routes,
  Route,
  Link
} from "react-router-dom"
import Detail from "./pages/Detail"

function App() {
  return (
    <div className="App">
          <Header />
      <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Detail />} path="/detail" />
          <Route element={<Login />} path="/login" />
      </Routes>
    </div>
  );
}

export default App;

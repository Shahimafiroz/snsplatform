import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Navbar from "./components/Navbar";
import Error from "./components/Extraa/Error";
import Photos from "./components/Extraa/Photos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/users" element={<Users />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/posts/:id" element={<Posts />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

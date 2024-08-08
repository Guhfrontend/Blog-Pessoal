import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Navbar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import axios from "axios";
import { Users } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

function App() {
  
  interface User {
    id: number;
    name: string;
  }

const [users, setUsers] = useState<User[]>([]);
  
    useEffect(() => {
      axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

  return (

    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
        </Routes>

      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App

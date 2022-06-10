import './App.css';
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";


const App = () => {
  return (
      <Router>
          <Navbar/>
          <Routes>
              <Route path="/" caseSensitive={false} element={<Home />} />
          </Routes>
      </Router>
  );
}

export default App;

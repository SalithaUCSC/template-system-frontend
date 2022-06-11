import './App.css';
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Templates from "./components/Templates";
import Template from "./components/Template";


const App = () => {
  return (
      <Router>
          <Navbar/>
          <Routes>
              <Route path="/" caseSensitive={false} element={<Home />} />
              <Route path="/templates" caseSensitive={false} element={<Templates />} />
              <Route path="/templates/:id" element={<Template />}/>
          </Routes>
      </Router>
  );
}

export default App;

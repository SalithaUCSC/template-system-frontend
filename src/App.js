import './App.css';
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import TemplateDetails from "./components/TemplateDetails";


const App = () => {
  return (
      <Router>
          <Navbar/>
          <Routes>
              <Route path="/" caseSensitive={false} element={<Home />} />
              <Route path="/templates/:id" caseSensitive={false} element={<TemplateDetails />}/>
          </Routes>
      </Router>
  );
}

export default App;

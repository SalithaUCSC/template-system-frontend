import './App.css';
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import TemplateDetails from "./components/templates/TemplateDetails";
import AddCard from "./components/cards/AddCard";
import Templates from "./components/templates/Templates";
import AddTemplate from "./components/templates/AddTemplate";


const App = () => {
  return (
      <Router>
          <Navbar/>
          <Routes>
              <Route path="/" caseSensitive={false} element={<Home />} />
              <Route path="/templates" caseSensitive={false} element={<Templates />}/>
              <Route path="/templates/addTemplate" caseSensitive={false} element={<AddTemplate />}/>
              <Route path="/templates/:id" caseSensitive={false} element={<TemplateDetails />}/>
              <Route path="/templates/:id/addCard" caseSensitive={false} element={<AddCard />}/>
          </Routes>
      </Router>
  );
}

export default App;

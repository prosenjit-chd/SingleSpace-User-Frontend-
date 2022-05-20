import './App.css';
import Header from './components/pages/common/Header/Header';
import Footer from './components/pages/common/Footer/Footer';
import Home from './components/pages/Home/Home';
import Description from './components/pages/Home/Description';
import Projects from './components/pages/Projects/Projects';
import Clients from './components/pages/Clients/Clients';
import About from './components/pages/About/About';
import Project from './components/pages/Project/Project';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ProjectDetails from './components/pages/ProjectDetails/ProjectDetails';
import ScrollToTop from './components/pages/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/home" element={<Description />}></Route>
          <Route path="/clients" element={<Clients />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/project/:id" element={<ProjectDetails />}></Route>

        </Routes>
        <Footer />
      </Router>






    </div>
  );
}

export default App;

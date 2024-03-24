import About from "./components/About";
import Mainbody from "./components/Mainbody";
import Navbar from "./components/Navbar";
import { SharedState } from "./context/Sharedstate";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <SharedState>
        <Router>
          <Navbar/>
          <Routes>

            <Route exact path="/" element={<Mainbody />} />
            <Route exact path="/about" element={<About />} />

          </Routes>
        </Router>
      </SharedState>
    </>
  );
}

export default App;

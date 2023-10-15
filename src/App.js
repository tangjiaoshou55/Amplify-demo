import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/main" element={<Main />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;

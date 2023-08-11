import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import HomePage from "./page/HomePage";
import ReservePage from "./page/ReservePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<ReservePage />}></Route>
      </Routes>

    </Router>
  );
}

export default App;

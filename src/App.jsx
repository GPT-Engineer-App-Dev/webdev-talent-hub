import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import DeveloperList from "./components/DeveloperList.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/developers" element={<DeveloperList />} />
      </Routes>
    </Router>
  );
}

export default App;

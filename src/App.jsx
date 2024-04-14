import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import DeveloperList from "./components/DeveloperList.jsx";
import DeveloperProfile from "./components/DeveloperProfile.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/developers" element={<DeveloperList />} />
        <Route path="/developers/:id" element={<DeveloperProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

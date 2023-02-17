import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import ReviewPage from "./components/Review/ReviewPage";
import CreateSetPage from "./Pages/CreateSetPage";

function App() {
  return (
    <Routes>
      <Route exact path="/home" element={<Homepage />} />
      <Route exact path="/review" element={<ReviewPage />} />
      <Route exact path="/createset" element={<CreateSetPage />} />
    </Routes>
  );
}

export default App;

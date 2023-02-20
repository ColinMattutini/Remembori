import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import ReviewPage from "./components/Review/ReviewPage";
import CreateSetPage from "./Pages/CreateSetPage";
import ReviewSetsListPage from "./Pages/ReviewSetsListPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/review/:setName" element={<ReviewPage />} />
      <Route exact path="/reviewset" element={<ReviewSetsListPage />} />
      <Route exact path="/createset" element={<CreateSetPage />} />
    </Routes>
  );
}

export default App;

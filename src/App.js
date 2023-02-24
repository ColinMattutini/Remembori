import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import ReviewPage from "./components/Review/ReviewPage";
import CreateSetPage from "./Pages/CreateSetPage";
import EditSetPage from "./Pages/EditSetPage";
import ReviewSetsListPage from "./Pages/ReviewSetsListPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/review/:setName" element={<ReviewPage />} />
      <Route exact path="/reviewset" element={<ReviewSetsListPage />} />
      <Route exact path="/createset" element={<CreateSetPage />} />
      <Route exact path="/edit/:setName" element={<EditSetPage />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import ReviewPage from "./components/Review/ReviewPage";
import CreateSetPage from "./Pages/CreateSetPage";
import EditSetPage from "./Pages/EditSetPage";
import NotesPage from "./Pages/NotesPage";
import ReviewModePage from "./Pages/ReviewModePage";
import ReviewSetsListPage from "./Pages/ReviewSetsListPage";
import FooterNavBar from "./components/UI/FooterNavBar";
import FullScreenNavBar from "./components/UI/FullScreenNavBar";
import { useState } from "react";
import { useEffect } from "react";
import NoteSetsPage from "./Pages/NoteSetsPage";

function App() {
  const [mobile, setMobile] = useState(window.innerWidth <= 500);

  const handleWindowSizeChange = () => {
    setMobile(window.innerWidth <= 500);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    console.log("mobile");
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/review/:setName" element={<ReviewPage />} />
        <Route exact path="/reviewset" element={<ReviewSetsListPage />} />
        <Route exact path="/createset" element={<CreateSetPage />} />
        <Route exact path="/edit/:setName" element={<EditSetPage />} />
        <Route exact path="/reviewmode/:setName" element={<ReviewModePage />} />
        <Route exact path="/notesedit/:notesName" element={<NotesPage />} />
        <Route exact path="/notesreview" element={<NoteSetsPage />} />
      </Routes>
      {!mobile && <FullScreenNavBar />}
      {mobile && <FooterNavBar />}
    </div>
  );
}

export default App;

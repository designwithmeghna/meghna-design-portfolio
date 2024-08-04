import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

import "./App.css";
import DigitalResume from "./pages/DigitalResume";
// import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <>
      {/* <ComingSoon /> */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/digital-resume" element={<DigitalResume />} />
            <Route index path="/" element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

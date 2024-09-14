import BackAnimation from "./components/animations/back-animation/BackAnimation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App ">
      <BackAnimation />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </BrowserRouter>

      {/* <Layout /> */}
    </div>
  );
}

export default App;

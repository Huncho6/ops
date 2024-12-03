import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cloudsec from "./pages/Cloudsec";
import CloudVerse from "./pages/CloudVerse";
import Home from "./pages/Home";
import Onesec from "./pages/Onesec";
import OpsecFooter from "./pages/OpsecFooter";
import OpsecNetwork from "./pages/OpsecNetwork";
import ProjectsIn from "./pages/ProjectsIn";
import Wallets from "./pages/Wallets";
import Claim from "./pages/Claim";
import Migration from "./pages/Migration";

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <Claim />
      <Migration />
      <ProjectsIn />
      <CloudVerse />
      <Cloudsec />
      <OpsecNetwork />
      <Onesec />
      <OpsecFooter />
      <Routes>
      <Route path="/wallets" element={<Wallets />} />
     </Routes>
    </>
  );
}

export default App;

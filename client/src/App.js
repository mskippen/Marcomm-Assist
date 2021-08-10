import { Route, Switch } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Homepage from "./pages/Homepage";
import AuthPage from "./pages/AuthPage";
import ProjectPage from "./pages/Projects";
import CampaignPage from "./pages/CampaignPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={AuthPage} />
        <Route path="/projects" component={ProjectPage} />
        <Route path="/campaign" component={CampaignPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mousey from "./components/Mousey";
import Projects from "./components/Projects";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ViewProject from "./components/ViewProject";

function App() {

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <BrowserRouter>

      <div className="App">
        <Switch>
        <Route  path="/view-project" exact component={ViewProject} />
        <Route path={["/", "/*"]} exact>
          <>
        <Header />
        <Mousey />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </>
      </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

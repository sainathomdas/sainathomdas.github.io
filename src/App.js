import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";

import ViewProject from "./components/ViewProject";
import Portfolio from "./components/Portfolio";

function App() {

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <BrowserRouter>

      <div className="App">
        <Switch>
        <Route  path="/view-project" exact component={ViewProject} />
        <Route path="/" exact component={Portfolio} />
        <Route component={Portfolio}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

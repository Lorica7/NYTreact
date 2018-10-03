import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Saved from "./components/Saved";
import Saved from "./components/Saved";
import Saved from "./components/Saved";
import Saved from "./components/Saved";

const App = () => (
  <Router>
    <div>
      <Header />
      <Search/>
      <Results/>
      <Saved/>
    </div>
  </Router>
);

export default App;
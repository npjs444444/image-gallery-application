import React from "react";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// importing navbar from components
import Navbar from "./components/navbar";

// importing homepage from components
import Home from "./components/home";

//importing specific post from components
import Specific from "./components/specific";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/specific/:id' component={Specific} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
